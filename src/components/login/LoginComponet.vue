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


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


async function login() {

    if (!validateEmail(username.value)) {
        errorMessage.value = 'Por favor, ingresa una dirección de correo electrónico válida.';
        return; 
    }

    const dataConnection = {
        username: username.value,
        password: password.value
    }

let isAuthenticated = await store.login(dataConnection)

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
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                
            <div class="inputs">
            
            <input type="password" id="password" placeholder="Contraseña" required v-model="password"></div>
            
        </form>

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
    margin-right: 25%;

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