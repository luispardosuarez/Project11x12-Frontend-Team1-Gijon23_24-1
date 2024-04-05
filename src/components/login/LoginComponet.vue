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
        
                <input type="text" id="username" placeholder="Usuario" v-model="username"></div>
                
            <div class="inputs">
            
                <input type="password" id="password" placeholder="Contraseña" required v-model="password"></div>
            
        </form>

        <p class="paragraph">¿No tienes cuenta? <a href="#" @click.prevent="redirectToRegister()">Regístrate</a></p>

        <button type="submit" @click="login">Entrar</button></div>
    
</template>


<style scoped>

img{
    width: 30%;
    height: 40%;
    justify-content: center;
    margin-left: 35%;
    margin-top: 8%;

}

h2{
        color: white;
        margin-left: 39%;
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
    padding: 5px;
    border-radius: 3px;
    border: none;

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
    margin-left: 40%;
    width: 20%;
    height: 6vh;
    margin-top: 20px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}


.mi-clase{
    color:black;
}




</style>