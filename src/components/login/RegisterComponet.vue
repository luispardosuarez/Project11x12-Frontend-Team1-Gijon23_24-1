<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { useRoute, useRouter } from "vue-router";

const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL

const route = useRoute()
const router = useRouter()

const errorMessage = ref('');

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


async function register() {

    if (!email.value) {
        errorMessage.value = 'Por favor, introduce tu correo electrónico.';
        return;
    }

    if (!isValidEmail(email.value)) {
        errorMessage.value = 'Por favor, introduce un correo electrónico válido.';
        return;
    }
    try {
        let passwordEncrypted = btoa(`${password.value}`)
        

        const data = {
            username: email.value,
            password: passwordEncrypted
        }

        const response = await axios.post(`${uri}/register`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            
        })
        console.log(response);
        const status = response.status

        console.log(status);
        redirectToDashboard()
    } catch (error) {
        throw new Error('Error occured during API fetch POST request while login : ' + error)
    }
}


function redirectToDashboard() {
    const redirectPath = '/user'
    router.push(redirectPath)
}

const isAdult = ref(false);
const canRegister = ref(false);
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPrivacyPolicy = ref(false);
const aceptoCondiciones = ref(false);


const closePrivacyPolicy = () => {
    showPrivacyPolicy.value = false;
};

const handleAceptoCondicionesChange = () => {
    if (aceptoCondiciones.value) {
        showPrivacyPolicy.value = true;
    }
    canRegister.value = isAdult.value && aceptoCondiciones.value;
};


</script>

<template>

    <div class="container">
    <img src="../../assets/imageLogin/11x12 recortada.png" alt="">

        <h2>REGISTRO</h2>

        <form @submit.prevent="register">
            <div class="input-group">

                <input type="email" id="email" placeholder="Usuario" v-model="email" required>
            </div>

            <div class="input-group">
                <input type="password" id="password" placeholder="Contraseña" v-model="password" required>
            </div>


            <div class="input-group">
                <input type="password" id="confirmPassword" placeholder="Confirmar Contraseña" v-model="confirmPassword"
                    required> </div>

                <div class="checkbox-container">
                    <input type="checkbox" id="mayorDeEdad" v-model="isAdult" @change="handleMayorDeEdadChange">
                    <label for="mayorDeEdad">Soy mayor de edad</label> 

                    <div class="checkbox-container">
                        <input type="checkbox" id="aceptoCondiciones" v-model="aceptoCondiciones"
                            @change="handleAceptoCondicionesChange">
                        <label for="aceptoCondiciones">Acepto las condiciones legales </label>
                    </div>
                </div>
            
        </form>

        <div v-if="errorMessage" class="error-popup">
    <div class="error-content">
        <p>{{ errorMessage }}</p>
        <button @click="errorMessage = ''">Cerrar</button>
    </div>
</div>


        <div v-if="showPrivacyPolicy" class="privacy-policy-popup">
            <div class="privacy-policy-content">
                <h3>Condiciones legales</h3>
                <p >
                    Los datos recogidos en los diferentes apartados de la Web municipal son tratados por el Ayuntamiento
                    de Gijón/Xixón (dirección postal: Plaza Mayor, 1. 33201 Gijón - Asturias; teléfono: 985 181 105),
                    como responsable del tratamiento, con las finalidades descritas en cada procedimiento, formulario o
                    en los modelos de la sede electrónica.<br><br>

                    En la Página web municipal no se recogen datos personales sin que previamente se informe y detalle
                    el tratamiento realizado, de acuerdo con el contenido del artículo 13 del Reglamento (UE) General de
                    Protección de Datos.<br><br>

                    Los datos aportados se utilizarán, con carácter único y exclusivo, para los fines previstos en el
                    procedimiento o actuación para los que sean tratados.<br><br>

                    El Ayuntamiento no trata (recoge, gestiona, conserva, comunica, etc.) sus datos personales sin haber
                    analizado previamente la base de licitud y respetando los principios de lealtad, limitación de la
                    finalidad, minimización, conservación y confidencialidad. Puede consultar los tratamientos de datos
                    que realiza el Ayuntamiento de Gijón/Xixón junto con su base de licitud en el Inventario Municipal
                    del Tratamiento de Datos Personales.<br><br>

                    En el caso de que las personas usuarias de la Página Web, Sede electrónica o aplicaciones
                    municipales (app) aportaran datos personales de terceros, reconocen y garantizan al Ayuntamiento que
                    dispone de la correspondiente autorización y consentimiento de dicho tercero.<br><br>

                    En cumplimiento con la normativa vigente, el Ayuntamiento de Gijón/Xixón ha adoptado las medidas
                    técnicas y organizativas necesarias para mantener el nivel de seguridad requerido en atención al
                    riesgo en los datos personales tratados, en el marco del Esquema Nacional de Seguridad. Asimismo,
                    está dotado de los mecanismos precisos a su alcance para evitar en la medida de lo posible los
                    accesos no autorizados, sustracciones y modificaciones ilícitas, así como la pérdida de datos.<br><br>

                    Para más información puede consultar la Política de Seguridad de la Información y Política de Datos
                    Personales del Ayuntamiento de Gijón/Xixón modificado puntualmente al objeto de actualizar la
                    denominación y composición del Comité de Seguridad de la Información<br><br>

                    Esta declaración de privacidad se aplica a las páginas de la Web y la Sede electrónica municipales;
                    no se garantiza en los accesos a través de enlaces con estos sitios ni a los enlaces desde estos
                    sitios con otras páginas web.<br><br>


                    <b>  • DELEGADO/A DE PROTECCIÓN DE DATOS PERSONALES</b><br><br>

                    El Ayuntamiento de Gijón/Xixón le recuerda que los datos personales publicados en la Página Web
                    tienen como finalidad la transparencia e información pública de conformidad con la legislación
                    específica aplicable en la materia respectiva (leyes de transparencia, empleo público,
                    contratación…). El Ayuntamiento no autoriza el tratamiento de datos personales con finalidades
                    distintas ni la copia o difusión de dichos datos en páginas ajenas a la municipal.<br><br>

                    El Ayuntamiento le informa expresamente que si utiliza los datos con finalidades propias será
                    considerado como responsable del tratamiento, quedando obligado a garantizar el pleno respeto de los
                    principios que consagran la protección de datos personales, en los términos establecidos en el
                    Reglamento General de Protección de Datos (RGPD) UE 2016/679 y la Ley Orgánica 3/2018, de 5 de
                    diciembre, de Protección de Datos Personales y garantía de los derechos digitales, debiendo
                    responder directamente de las posibles infracciones y sanciones que puedan derivarse de los
                    incumplimientos de la normativa de protección de datos personales.<br><br>

                  <b>  • DELEGADO/A DE PROTECCIÓN DE DATOS PERSONALES</b><br><br>

                    El Ayuntamiento de Gijón/Xixón ha designado una persona como Delegada de Protección de Datos
                    Personales que incluye en su ámbito de actuación al propio Ayuntamiento de Gijón, sus Organismos
                    Autónomos y las empresas municipales de desarrollo y promoción económica, así como la coordinación
                    de los trabajos de adecuación al RGPD en el resto de empresas municipales, tal y como se constata en
                    el número 225 del Boletín Oficial del Principado de Asturias (BOPA) del 27 de septiembre de 2018.<br><br>

                    Las funciones principales de la persona Delegada de Protección de Datos son las de asesoramiento y
                    supervisión de las medidas adoptadas para garantizar un adecuado cumplimiento de la normativa
                    reguladora del derecho a la protección de los datos personales. Además, la Delegada puede responder
                    a consultas o reclamaciones que le presenten las personas afectadas por tratamientos de datos del
                    Ayuntamiento. También es la persona encargada de coordinarse con la Autoridad de Control (Agencia
                    Española de Protección de Datos). Si lo desea puede ponerse en contacto con la Delegada de
                    Protección de Datos a través de la dirección de correo electrónico: dpd@gijon.es<br><br>

                   <b>  • DELEGADO/A DE PROTECCIÓN DE DATOS PERSONALES</b><br><br>

                    Si desea ejercitar los derechos reconocidos en la normativa de protección de datos, el Ayuntamiento
                    de Gijón/Xixón dispone de diferentes medios, bien de forma presencial en nuestras oficinas de
                    asistencia en materia de registros, por correo postal o en la oficina virtual de la Sede electrónica
                    municipal. Le recordamos que el ejercicio de derechos en materia de protección de datos es personal
                    al ser un derecho fundamental, por lo que deberá identificarse para que sea posible atender
                    correctamente su solicitud. En caso de que la solicitud sea presentada por un representante legal o
                    voluntario, se deberá acreditar dicha representación por cualquier medio válido en derecho para el
                    trámite concreto.<br><br>

                    El plazo de resolución es de un mes desde su presentación, pudiendo incrementarse mediante
                    resolución motivada que le será comunicada, ante solicitudes complejas.<br><br>

                    Si desea presentar su solicitud por el modelo normalizado de la Agencia Española de Protección de
                    Datos, puede acudir a su página web. En cualquier caso, será atendido el ejercicio de su derecho en
                    el plazo de un mes, como se recoge en la normativa de protección de datos, sin perjuicio de la
                    posibilidad de alargar dicho plazo con carácter excepcional y previa información al solicitante o su
                    representante hasta un máximo de dos meses.

                </p>
                <button class="accept-button" @click="closePrivacyPolicy">Cerrar</button>
            </div>
        </div>

        <button type="submit" :disabled="!canRegister"  @click="register" class="register-button">REGISTRARSE</button> 
    

    </div>




</template>

<style scoped>

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}


img {
    width: 30%;
    height: 20%;
    justify-content: center;
    margin-top: 8%;
}

p{
    color: black;
    margin-left: 3%;
    text-align: center;
}


h2 {
    color: white;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 3%;
}


button{
    width: auto;
    margin-top: 3%;
    margin-bottom: 2%;
    border-radius: 4px;
    border: none;
    background-color: white;
    padding:1%; 
    color: #858585;
}

.register-button {
    cursor: pointer;
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


input[type="email"], input[type="password"] {
    width: 500px;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    background-color: rgba(255, 255, 255, 0.773);
}

label[for="mayorDeEdad"], label[for="aceptoCondiciones"] {
        margin-left: 10px;
        color: #fff; 
        font-weight: 600;
    }

    .privacy-policy-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: auto; 
    text-align: center;
}


.privacy-policy-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    max-height: 400px; 
    overflow-y: auto;
    box-sizing: border-box;
    font-weight: normal;
    
}

.accept-button {
    background-color: rgba(255, 0, 0, 0.873);
    border-radius: 5px;
    color: #fff;
    width: 30%;
    height: 40px;
    font-size: large;
    font-weight: 500;
}


h3{
    margin-left: 13%;
    color: rgba(255, 0, 0, 0.79);
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

@media only screen and (max-width : 767px) {
    .container {

        max-width: 800px;
        margin: 0 auto;
    }

    img {
        max-width: 100%;
        height: auto;
    }


    input[type="email"], input[type="password"] {

        width: 100%;
        max-width: 400px;
    }

    button{
        margin-top: 3%;
    }

    .privacy-policy-content, .error-content {
        max-width: 600px;
    }

    .accept-button {
        width: auto;
        padding: 10px 20px;
    }

    h3 {
        text-align: center;
        font-size: 1.5em;
    }
}


@media only screen and (min-width : 992px) {
    .container {
        max-width: 900px;
        margin: 0 auto;
    }

    img {
        width: 40%;
        height: auto;
    }

    input[type="email"], input[type="password"] {
        width: 100%;
        max-width: 500px;
    }

    .privacy-policy-content, .error-content {
        max-width: 800px;
    }

    .accept-button {
        width: auto;
        padding: 15px 30px;
    }

    h3 {
        font-size: 2em;
    }
}


</style>