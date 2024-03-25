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


async function login() {

    const dataConnection = {
        username: username.value,
        password: password.value
    }

let isAuthenticated = await store.login(dataConnection)

    if (isAuthenticated && store.user.roles == "ROLE_ADMIN") {
        const redirectPath = route.query.redirect || '/dashboard'
        router.push(redirectPath)
    }

    if (isAuthenticated && store.user.roles == "ROLE_USER") {
        const redirectPath = route.query.redirect || '/'
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

        <form @submit.prevent="handleLogin">
            <div class="inputs">
        
                <input type="text" id="username" placeholder="Usuario" v-model="username" >
            </div>
            <div class="inputs">
            
                <input type="password" id="password" placeholder="Contraseña" required v-model="password">
            </div>
            
        </form>

        <p class="paragraph">¿No tienes cuenta? <a href="#" @click.prevent="redirectToRegister()">Regístrate</a></p>

        <button type="submit"><a href="#" class="mi-clase" @click="enviar">Entrar</a></button>
    </div>
    
</template>

<style scoped>

img{
    width: 30%;
    height: 40%;
    justify-content: center;
    margin-left: 35%;

}

h2{
        color: white;
        margin-left: 41%;
        margin-bottom: 3%;
    }

.inputs{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    
    
}

input{
    width: 30%;
    height: 6vh;
}

p{
    color: white;
    margin-left: 35%;
}

a{
    
    text-decoration: none; 
    color: white;
    transition: color 0.3s ease;
}

a:hover {
    color: #383e7d;
}

button{
    margin-left: 41%;
    width: 20%;
    height: 6vh;
    margin-top: 10px;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #009eb393;
}

.mi-clase{
    color:black;
}


@media (max-width: 768px) {
    img{
        width: 50%;
        height: auto;
        margin-left: 25%;
    }

    h2{
        margin-left: 25%;
    }

    .inputs{
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 80%;
    }

    p{
        margin-left: 25%;
    }

    button{
        width: 60%;
        margin-left: 20%;
    }
}




</style>