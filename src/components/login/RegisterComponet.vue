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
                        <label for="aceptoCondiciones">Acepto las condiciones legales </label>
                    </div>
                </div>
            </div>
        </form>

        <div v-if="showPrivacyPolicy" class="privacy-policy-popup">
            <div class="privacy-policy-content">
                <h3>Condiciones legales</h3>
                <p class="lorem"> <ol>
                    <li> Intelectual: Todos los derechos de propiedad intelectual
                    relacionados con el nombre "11x12 Gijón", incluyendo pero no limitado a marcas registradas, derechos
                    de autor, y cualquier propiedad intelectual relacionada, son propiedad exclusiva de la entidad
                    responsable de su creación. Cualquier uso no autorizado de estos derechos está prohibido y puede
                    estar sujeto a acciones legales.</li><br>

                    <li>Responsabilidad del Contenido: La entidad "11x12 Gijón" no se hace responsable por el
                    contenido de terceros enlazado desde su sitio web o cualquier otra plataforma de comunicación. Los
                    usuarios asumen toda la responsabilidad por el contenido que compartan en relación con la marca
                    "11x12 Gijón".</li><br>

                    <li>Privacidad: La entidad "11x12 Gijón" se compromete a proteger la privacidad de los
                    usuarios de acuerdo con las leyes de protección de datos aplicables. Cualquier información personal
                    recopilada será utilizada únicamente con el propósito declarado y no será compartida con terceros
                    sin el consentimiento expreso del usuario, excepto cuando sea requerido por ley.</li><br>

                    <li>Jurisdicción: Cualquier disputa legal relacionada con "11x12 Gijón" estará sujeta a la
                    jurisdicción de los tribunales competentes en la ubicación de su sede principal o de acuerdo con los
                    términos especificados en los contratos pertinentes.</li><br>

                    <li>Modificaciones: Cualquier disputa legal relacionada con "11x12 Gijón" estará sujeta a la
                    jurisdicción de los tribunales competentes en la ubicación de su sede principal o de acuerdo con los
                    términos especificados en los contratos pertinentes.</li><br>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis, error vero illum laboriosam fuga consequuntur cum, ducimus voluptas magnam quasi inventore. Blanditiis unde aut numquam voluptates esse exercitationem sunt ipsum quidem, ut ex veniam, quos necessitatibus, voluptate architecto error quas aspernatur nam eius? Velit vel alias earum deserunt veniam vero. Recusandae molestiae obcaecati eius, facere necessitatibus accusamus laborum ipsam nostrum totam incidunt illo, minima quaerat accusantium ducimus enim, quod sequi aspernatur vitae porro rem? Eos quod minus vitae quia nesciunt corrupti, quas quos soluta nulla deleniti quis enim, expedita asperiores at? Eos minima, cumque quasi culpa dolor inventore magni?
                </ol>

                </p>
                <button class="accept-button" @click="closePrivacyPolicy">Cerrar</button>
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

h2 {
    color: white;
    margin-left: 41%;
    margin-bottom: 3%;
}

a{
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
}

/* a:hover {
    color: #383E7D;
} */

button{
    margin-left: 40%;
    width: 20%;
    height: 6vh;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: pink;
}

.mi-clase{
    padding: 10px 20px; 
    text-decoration: none; 
    color: #000000;
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
            width: 400px;
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
    /* background-color: rgba(0, 0, 0, 0.181); */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: auto; 
}

/* .privacy-policy-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    height: 100vh;
    max-width: 500%;
    box-sizing: border-box;
    
} */

.privacy-policy-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 600px;
    max-height: 400px; 
    overflow-y: auto;
    box-sizing: border-box;
}


.accept-button {
    background-color: rgba(255, 0, 0, 0.873);
    margin-left: 30%;
    border-radius: 5px;
    color: #fff;
    width: 35%;
    height: 45px;
    font-size: x-large;
    font-weight: 600;
}


h3{
    margin-left: 25%;
    color: rgba(255, 0, 0, 0.79);
}

.lorem{
    color: black;
    margin-left: 5%;
    font-size:large;
    font-weight: normal;
}


</style>