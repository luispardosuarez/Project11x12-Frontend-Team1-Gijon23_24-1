<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";



let uri = import.meta.env.VITE_API_ENDPOINT_GENERAL

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

let username = ref("")
let password = ref("")
let errorMessage = ref("")



async function login() {


    const dataConnection = {
        username: username.value,
        password: password.value
    }

let isAuthenticated = await store.login(dataConnection)

if (!isAuthenticated) {
        errorMessage.value = "El correo no coincide o no está registrado."
        return
    }


    if (isAuthenticated && store.user.roles == "ROLE_ADMIN") {
        const redirectPath = route.query.redirect || '/admin'
        router.push(redirectPath)
    }

    if (isAuthenticated && store.user.roles == "ROLE_USER") {
        const redirectPath = route.query.redirect || '/user'
        router.push(redirectPath)
    }
} 


function redirectToRegister() {
    const redirectPath = route.query.redirect || '/register'
    router.push(redirectPath)
}

</script>


<template>
    <div class="container">
        <div class="image"><img src="../../assets/imageLogin/11x12.png" alt=""></div>

        <h2>INICIAR SESIÓN</h2>

        <form @submit.prevent="login">
            <div class="inputs">
        
                <input type="text" id="username" placeholder="Usuario" v-model="username" ></div>
                
                
            <div class="inputs">
            
            <input type="password" id="password" placeholder="Contraseña" required v-model="password"></div>
            
        </form>
<!-- 
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div> -->


        <div v-if="errorMessage" class="error-popup">
    <div class="error-content">
        <p>{{ errorMessage }}</p>
        <button @click="errorMessage = ''">Cerrar</button>
    </div>
</div>


        <p class="paragraph">¿No tienes cuenta? <a href="#" @click.prevent="redirectToRegister()"> <b>Regístrate aquí</b></a></p>

        <button type="submit" @click="login">ENTRAR</button></div>
    
</template>


<style scoped>


.container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
}

.image {
    text-align: center;
    margin-top: 5%;
}

.image img {
    width: 100%;
    max-width: 400px;
    height: auto;
}

h2 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
    color: white;
    
}

.inputs {
    margin-bottom: 15px;
    justify-content: center;
    
}

input {
    width: 80%;
    height: 45px;
    padding: 5px;
    border-radius: 3px;
    border: none;
    margin-left: 10%;

}

p {
    text-align: center;
    color: white;
    margin-right: 0%;

}

a {
    color: white;
    
}

button {
    width: 40%;
    height: 40px;
    border-radius: 3px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    margin-left: 30%;
    margin-top: 20px;
    font-size: large;
}


.error-message {
    color: red;
    margin-top: 10px;
}


.error-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.error-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 400px;
    text-align: center;
}

.error-content p {
    margin-bottom: 20px;
}


/* .error-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.error-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
} */

@media only screen and (max-width: 768px) {
    .container {
        padding: 0 10px;
    }

    .image img {
    margin-top: 15%;
}

    input {
        width: 100%;
        margin-left: 0;
    }

    p {
    text-align: center;
    color: white;
    margin-right: 20%;

}

    button {
        width: 50%;
        margin-left: 20p;
    }
}

@media only screen and (min-width: 992px) {
    .container {
        max-width: 700px;
        padding: 0 50px;
        
    }


}



</style>