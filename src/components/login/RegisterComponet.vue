<script setup>
import { ref } from 'vue';

const isAdult = ref(false);


const username = ref('');
const password = ref('');
const confirmPassword = ref('');


const handleLogin = async () => {
    if (!isAdult.value) {
        alert('Debes ser mayor de edad para registrarte.');
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    //AQUI VA LA LLAMADA A AXIOS
};

const enviar = () => {
    handleLogin();
};


</script>

<template>
<div class="container">
        <div class="image"><img src="../../assets/imageLogin/11x12.png" alt=""></div>

        <h2>REGISTRO</h2>

        <form @submit.prevent="handleLogin">
            <div class="inputs">
        <input type="text" id="username" placeholder="Usuario" v-model="username" required>
    </div>
    <div class="inputs">
        <input type="password" id="password" placeholder="Contraseña" v-model="password" required>
    </div>

    <div class="inputs">
            <input type="password" id="confirmPassword" placeholder="Confirmar Contraseña" v-model="confirmPassword" required>
        </div>

            <div class="inputs">
            <input type="checkbox" id="isAdult"  v-model="isAdult" >
            <label for="isAdult" class="checkbox-label">Acepto ser mayor de edad</label>
            
        </div>
            
        </form>


        <button type="submit"><a href="#" class="mi-clase" @click="enviar" >REGISTRARSE</a></button>
    </div>

</template>


<style scoped>

.checkbox-label {
    display: inline-block;
}

input[type="checkbox"] {
    transform: scale(0.50);
    margin-right: 10%;
}

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
    margin-bottom: 5px;
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


</style>