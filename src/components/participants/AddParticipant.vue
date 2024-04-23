<script setup>
import { ref } from 'vue';

const participant = ref({

 participantName: '',
 participantSurname: '',
 dni: '',
 street: '',
 pc: '',
 city: '',
 municipality: '', 
 mail: '',
 birthDate: '',
 allergies: '',
 remarks: '',

});

const saveParticipant = () => {
 addParticipant(participant.value);
};

const addParticipant = (participantData) => {
 console.log(participantData);
};

</script>

<template>

    <div id="participantWelcome">

        <h2>AÑADIR PARTICIPANTE</h2>
        <img src="../../assets/img/11x12-horizontal.jpg">
    </div>

    <div id="participantDashboard">

        <div class="inputGroup">

            <label class="name" for="Nombre">Nombre</label>
            <input v-model="participant.participantName" type="text" class="name" placeholder="Nombre">

        </div>

        <div class="inputGroup">

            <label class="surname" for="Apellidos">Apellidos</label>
            <input v-model="participant.participantSurname" class="surname" type="Apellidos">

        </div>

        <div class="inputGroup">

            <label class="dni" for="DNI">DNI</label>
            <input v-model="participant.dni" class="dni" type="DNI">

        </div>

        <div class="inputGroup">

            <label class="direction" for="Dirección">Dirección</label>
            <input v-model="participant.street" class="direction" type="Dirección">

        </div>

        <div class="inputGroup">

            <label class="cp" for="CP">CP</label>
            <input v-model="participant.pc" class="cp" type="CP">

        </div>

        <div class="inputGroup">

            <label class="locality" for="Localidad">Localidad</label>
            <input v-model="participant.city" class="locality" type="Localidad">

        </div>

        <div class="inputGroup">

            <label class="municipality" for="Municipio">Municipio</label>
            <input v-model="participant.municipality" class="municipality" type="Municipio">

        </div>

        <div class="inputGroup">

        <label class="birth" for="Fecha de nacimiento">Fecha de nacimiento</label>
        <input v-model="participant.birthDate" class="birth" type="Fecha de nacimiento">

        </div>

        <div class="inputGroup">

            <label class="email" for="Email">Email</label>
            <input v-model="participant.mail" class="email" type="Email">

        </div>

        <div class="inputGroup">

            <label class="allergies" for="Alergias">Alergias</label>
            <textarea v-model="participant.allergies" class="allergies" type="Alergias"></textarea>

        </div>

        <div class="inputGroup">

            <label class="observations" for="Observaciones">Observaciones</label>
            <textarea v-model="participant.remarks" class="observations" id="Observaciones"></textarea>

        </div>

        <button @click="saveParticipant" class="save">Guardar</button>

    </div>
    
</template>

<style lang="scss">

// Mobile

#participantWelcome {
    display: flex;
    justify-content: space-around;

    h2 {
        font-size: 20px;
        margin-top: 13px;
    }

    img {
        width: 35%;
        margin-top: 5px;
    }
}

#participantDashboard {

    background-color: $gray-form;
    margin-top: 10px;
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    margin-bottom: 15px;

    .inputGroup {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        padding: 5px;

        input {
            border: 0.1px solid $red;
            width: 80%;
        }

        textarea {
            border: 0.1px solid $red;
            width: 80%;
        }
    }

    .save {
        color: white;
        background-color: $red;
        width: 30%;
        text-align: center;
        padding: 3px;
        margin-left: 36%;
        margin-top: 15px;
        margin-bottom: 15px;
    }
}

// Tablet

@media only screen and (min-width : 768px) and (max-width : 1023px) {

    #participantWelcome {
        h2 {
            font-size: 30px;
            margin-top: 25px;
            margin-left: 10px;
        }
    }

    #participantDashboard {
        .inputGroup {

            label {
                font-size: 20px;
            }
        }

        .save {
            font-size: 20px;
        }
    }
}

// Desktop v1 

@media (min-width: 1200px) and (max-width: 1399px) {

#participantWelcome {
    gap: 30%;
    margin-top: 10px;

    h2 {
        font-size: 25px;
        margin-top: 30px;
    }

    img {
        width: 25%;
        margin-left: 25px;
    }
}

#participantDashboard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .inputGroup {
        .name, .surname {
            width: 300px;
            margin-left: 20px;
        }

        .dni {
            width: 350px;
            margin-left: 30px;
        }

        .direction {
            width: 750px;
            margin-left: 15px;
        }

        .cp {
            width: 250px;
            margin-left: 10px;
        }

        .locality, .municipality {
            width: 300px;
            margin-left: 15px;
        }

        .municipality {
            margin-right: 20px;
        }

        .birth {
            width: 350px;
            margin-left: 15px;
        }

        .email {
            width: 450px;
            margin-left: 15px;
        }

        .allergies {
            width: 500px;
            margin-left: 60px;
        }

        .observations {
            width: 1020px;
            margin-left: 15px;
        }
    }

    .save {
        width: 8%;
        margin-left: 500px;
    }
}
}

// Desktop large

@media only screen and (min-width : 1400px) {

    #participantWelcome {

        gap: 40%;
        margin-top: 10px;

        h2 {
            font-size: 30px;
            margin-top: 40px;
        }

        img {
            width: 20%;
            margin-left: 35px;
        }
    }

    #participantDashboard {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 90%;
        margin-bottom: 50px;
        margin-top: 20px;

        .inputGroup {
            display: flex;
            flex-direction: column;

            .name, .surname {
                width: 400px;
                margin-left: 20px;
            }

            .dni {
                width: 300px;
                margin-right: 25px;
            }

            .direction {
                width: 840px;
                margin-left: 20px;
            }

            .cp {
                width: 300px;
                margin-right: 30px;
            }

            .locality {
                width: 400px;
                margin-left: 20px;
            }

            .municipality {
                width: 400px;
            }

            .birth {
                width: 300px;
                margin-right: 30px;
                
            }

            .email {
                width: 500px;
                margin-left: 20px;
            }

            .allergies {
                width: 650px;
                margin-right: 30px;
            }

            .observations {
                width: 1200px;
                margin-left: 20px;
            }

            textarea {
                height: 80px;
            }
        }

        .save {
            width: 10%;
            align-items: center;
            margin-left: 550px;
        }
        }
}

// Desktop extra grande
@media (min-width: 1600px) {

#participantWelcome {
    gap: 45%;
    margin-top: 10px;

    h2 {
        font-size: 35px;
        margin-top: 50px;
    }

    img {
        width: 15%;
        margin-left: 30px;
    }
}

#participantDashboard {

    .inputGroup {
        .name {
            width: 400px;
            margin-left: 25px;
        }

        .surname {
            width: 500px;
        }

        .dni {
            width: 400px;
            margin-right: 30px;
        }

        .direction {
            width: 950px;
            margin-left: 25px;
        }

        .cp {
            width: 350px;
            margin-right: 30px;
        }

        .locality {
            width: 400px;
            margin-left: 25px;
        }

        .municipality {
            width: 500px;
            margin-left: 30px;
        }

        .birth {
            width: 400px;
            margin-left: 25px;
        }

        .email {
            width: 550px;
            margin-left: 25px;
        }

        .allergies {
            width: 800px;
            margin-right: 30px;
        }

        .observations {
            width: 1400px;
            margin-left: 30px;
        }
    }

    .save {
        width: 12%;
        align-items: center;
        margin-left: 650px;
    }
}
}

// Mi desktop

@media (min-width: 1800px){
    #participantDashboard {

.inputGroup {
    .name {
        width: 500px;
        margin-left: 30px;
    }

    .surname {
        width: 500px;
    }

    .dni {
        width: 400px;
        margin-right: 55px;
    }

    .direction {
        width: 600px;
        margin-left: 30px;
    }

    .cp {
        width: 150px;
    }

    .locality {
        width: 300px;
    }

    .municipality {
        width: 300px;
        margin-right: 55px;
    }

    .birth {
        width: 400px;
        margin-left: 30px;
        
    }

    .email {
        width: 500px;
        margin-right: 40px;
    }

    .allergies {
        width: 600px;
        margin-right: 55px;
    
    }

    .observations {
        width: 1620px;
        margin-left: 30px;
    }
}

.save {
    width: 12%;
    align-items: center;
    margin-left: 750px;
    border: $red;
}
}
}

</style>