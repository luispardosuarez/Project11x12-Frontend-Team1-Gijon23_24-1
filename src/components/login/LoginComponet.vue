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

        <p class="paragraph">¿No tienes cuenta? <a href="#" @click.prevent="redirectToRegister()">Regístrate</a></p>

        <button type="submit" @click="login">Entrar</button></div>
    
</template>


<style scoped>


.image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image img {
    width: 35%;
    height: auto;
}

h2 {
    color: white;
    margin-left: 40%;
    margin-bottom: 3%;
    font-size: xx-large;
    justify-content: center;
}

.inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
}

input {
    width: 50%;
    height: 6vh;
    padding: 5px;
    border-radius: 3px;
    border: none;
}

p {
    color: white;
    margin-left: 25%;
    font-weight: 400;
}

a {
    color: white;
    text-decoration: none;
}

button {
    width: 30%;
    justify-content: center;
    margin-left: 35%;
    height: 6vh;
    margin-top: 20px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
}





</style>