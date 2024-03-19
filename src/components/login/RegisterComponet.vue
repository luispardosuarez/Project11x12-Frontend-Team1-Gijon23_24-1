<script setup>
import { ref } from 'vue';

const isAdult = ref(false);
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPrivacyPolicy = ref(false);

const closePrivacyPolicy = () => {
 showPrivacyPolicy.value = false;
};

const handleAceptoCondicionesChange = () => {
 if (!aceptoCondiciones.value) {
    showPrivacyPolicy.value = true;
 }
};


const aceptoCondiciones = ref(false);


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

        <div v-if="showPrivacyPolicy" class="privacy-policy-popup">
            <div class="privacy-policy-content">
                <h3>Condiciones legales</h3>
                <p class="lorem">Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones
                    en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco
                    creíbles.

                    Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante
                    escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet
                    tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador
                    verdadero (válido) en la Internet.

                </p>
                <button class="accept-button" @click="closePrivacyPolicy">Aceptar</button>
            </div>
        </div>

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


    .privacy-policy-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.181);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.privacy-policy-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    max-width: 500px;
    
}


.accept-button{
    background-color: rgba(255, 0, 0, 0.873);
}

h3{
    margin-left: 20%;
    color: rgba(255, 0, 0, 0.79);
}

.lorem{
    color: black;
    margin-left: 5%;
}

</style>