<script setup>
import { ref } from 'vue';

const isAdult = ref(false);


const username = ref('');
const password = ref('');
const confirmPassword = ref('');




</script>

<template>
    <div class="container">
        <div class="image"><img src="../../assets/imageLogin/11x12.png" alt=""></div>

        <h2>REGISTRO</h2>

        <form @submit.prevent="checkin">
            <div class="input-group">
                <input type="text" id="username" placeholder="Usuario" v-model="username" required>
            </div>
            <div class="input-group">
                <input type="password" id="password" placeholder="Contraseña" v-model="password" required>
            </div>
            <div class="inputs">
                <input type="password" id="confirmPassword" placeholder="Confirmar Contraseña" v-model="confirmPassword"
                    required>
                <div class="checkbox-container">
                    <input type="checkbox" id="mayorDeEdad" v-model="mayorDeEdad" @change="handleMayorDeEdadChange">
                    <label for="mayorDeEdad">Soy mayor de edad</label>
                    <div class="checkbox-container">
                        <input type="checkbox" id="aceptoCondiciones" v-model="aceptoCondiciones"
                            @change="handleAceptoCondicionesChange">
                        <label for="aceptoCondiciones">Acepto las condiciones legales</label>
                    </div>
                </div>
            </div>
        </form>
        <button type="submit"><a href="#" class="mi-clase" @click="enviar">REGISTRARSE</a></button>
    </div>




</template>

<style scoped>



img{
    width: 30%;
    height: 40%;
    justify-content: center;
    margin-left: 35%;
}
p{
    color: white;
    margin-left: 35%;
}
h2{
  color: white;
  margin-left: 41%;
  margin-bottom: 3%;
}
a{
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
}
a:hover {
    color: #383E7D;
}
button{
    margin-left: 40%;
    width: 20%;
    height: 6vh;
    margin-top: 10px;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
button:hover {
    background-color: pink;
}
.mi-clase{
    color:black;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}
input[type="text"], input[type="password"] {
    width: 500px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    
}

#confirmPassword {
    width: 64vh;
    height: 45px;
}

label[for="mayorDeEdad"], label[for="aceptoCondiciones"] {
        margin-left: 10px;
        color: #fff; 
    }
</style>