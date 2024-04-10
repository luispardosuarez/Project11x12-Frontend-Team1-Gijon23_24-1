<script setup>

import { useRouter } from 'vue-router';
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

  const router = useRouter();

  const redirectToAdd = () => {
    router.push('/add');
  };

  const redirectToEdit = () => {
    router.push('/edit');
  };



</script>

<template>

<div class="userWelcome">
   
    <h3>¡Hola, {{authStore.user.username}}!</h3>
    <img src="../../assets/img/11x12-horizontal.jpg">

</div>

<div id="bottomContainer">

<div class="userDashboard">

    <div class="inputGroup">

    <label input="Nombre y apellidos">Nombre y apellidos</label>
    <input type="Nombre y apellidos" placeholder="Nombre y apellidos">
    <img class="editIcon" src="../../assets/icons/edit.svg">

    </div>

    <div class="inputGroup">

    <label input="DNI">DNI del usuario</label>
    <input type="DNI" placeholder="DNI del usuario">
    <img class="editIcon" src="../../assets/icons/edit.svg">

    </div>

    <div class="inputGroup">

    <label input="Teléfonos">Teléfonos de contacto</label>
    <input class="telephone1" type="Teléfonos" placeholder="Teléfono 1"> <input class="telephone2" type="Teléfonos" placeholder="Teléfono 2">
    <img class="editIcon" src="../../assets/icons/edit.svg">

    </div>

    <div class="inputGroup">

    <label input="Correo">Correo electrónico</label>
    <input type="Correo" placeholder="Correo">
    <img class="editIcon" src="../../assets/icons/edit.svg">

    </div>

</div>

    <div class="buttonContainer">
        <button class="saveButton">Guardar</button>
    </div>

<div class="registeredContainer">
    <div id="participantsContainer" class="container">

        <div class="participants">
            <h6>Participantes registrados</h6>
            <button @click="redirectToAdd" class="addParticipant">Añadir participante</button>
        </div>

        <div id="registeredParticipant" class="registeredItem">

            <p>Pepa López Navarro</p>

            <div class="participantIcons">
                <img src="../../assets/icons/see.svg">
                <img src="../../assets/icons/edit.svg" @click="redirectToEdit">
                <img src="../../assets/icons/delete.svg">
            </div>

        </div>


    </div>

    <div class="separator"></div>

    <div id="campsContainer" class="container">

        <div class="camps">
            <h6>Campamentos registrados</h6>
            <button class="addCamp">Inscribirse</button>
        </div>

        <div class="registeredCamp registeredItem">

            <p>Campamento de verano - 22/07/2024</p>

        </div>


    </div>

    </div>
</div>


</template>

<style lang="scss">

// Mobile 

.userWelcome {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 10px;

    h3 {
        font-size: 15px;
        margin-top: 10px;
        padding: 10px;
    }

    img {
        width: 35%;
        padding: 10px;
    }
}

.userDashboard {
    
    .inputGroup {
    margin-bottom: 10px; 
    
    label {
        margin-bottom: 5px; 
    }

    input {
        padding: 5px; 
        width: calc(100% - 30px); 
        margin-right: 10px; 
        border: 0.1px solid $red;
    }

    .telephone1 {
        margin-bottom: 10px;
    }
}
    img {
        width: 5%;
    }
}

.buttonContainer {
    display: flex;
    justify-content: center;
    width: 100%;

.saveButton {
    background-color: $red;
    color: white;
    width: 30%;
    font-size: 17px;
    border: 1px solid $red;
}
}

.participants {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 10px;

    h6 {
        font-size: 17px;
    }

    .addParticipant {
        background-color: $red;
        color: white;
        font-size: 15px;
        border: 1px solid $red;
    }
}

#registeredParticipant {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    border: 0.5px solid $red;
    margin-top: 30px;
    padding: 10px; 

    .participantIcons {
        display: flex;
        justify-content: flex-end;
        margin-right: 10px;
        
        img {
            width: 16%;
            padding: 5px;
        }
    }

    p {
        flex-grow: 1; 
        margin: 0; 
        padding: 0; 
        white-space: nowrap; 
    }
}

.camps {
    display: flex;
    justify-content: center;
    margin-top: 18px;
    gap: 10px;

    h6 {
        font-size: 17px;
    }

    .addCamp {
        background-color: $red;
        color: white;
        font-size: 15px;
        width: 30%;
        border: 1px solid $red;
    }
}

.registeredCamp {
    border: 1px solid $red;
    text-align: center;
    margin-top: 30px;

    p {
        margin-top: 15px;
    }
}

#bottomContainer {
    background-color: $gray-form;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 20px;
}

.registeredItem {
    width: 100%;
    margin-top: 30px;

    p {
        margin-top: 15px;
    }
}

// Tablet 

@media only screen and (min-width : 768px) {
    .userWelcome {
        h3 {
            font-size: 30px;
            margin-left: 20px;
            margin-top: 15px;
        }
        img {
            width: 35%;
        }
    }

    .userDashboard {
        .inputGroup {
            input {
                width: calc(100% - 80px);
                font-size: 20px;
            }

            label {
                font-size: 20px;
            }
        }
    }

    .saveButton {
        font-size: 50px;
        margin-top: 40px;
    }

    .participantIcons {
           width: 40%;
        }

    .participants {

        margin-top: 70px;

        h6 {
            font-size: 20px;
        }

        .addParticipant {
            width: 30%;
            margin-left: 10px;
        }
    }

    .camps {
        h6 {
            font-size: 20px;
        }

        .addCamp {
            width: 30%;
            margin-left: 15px;
        }
    }
}


// Desktop


@media only screen and (min-width: 992px) {
    #bottomContainer {
        width: 95%; 
        margin: 0 auto; 
        border-radius: 10px;
        margin-bottom: 86px;
    }

    .userDashboard {
        max-width: 100%; 
        width: 100%; 
        margin: 0 auto; 
        padding: 0 20px; 
    }

    .userWelcome {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        img {
            width: 20%;
            margin-right: 40px;
        }

        h3 {
            font-size: 35px;
            margin-left: 40px;
            margin-top: 10px;
        }
    }

    .userDashboard {
        .inputGroup {
            display: flex;
            align-items: center;

            label {
                width: 10%; 
                margin-right: 20px;
                font-size: 15px;
                font-weight: bold;
            }

            input {
                width: 39%; 
                font-size: 15px;
                margin-right: 10px;
            }

            .editIcon {
                width: 2%;
            }

            .telephone1,
            .telephone2 {
                width: 18.9%; 
                margin-bottom: 4px;
            }

            .telephone2 {
                margin-left: 10px;
            }
        }
    }

    .buttonContainer {
        display: flex;
        justify-content: center;

        .saveButton {
            width: 15%;
            background-color: $red;
            color: white;
            font-size: 17px;
            border: 1px solid $red;
        }
    }

    #registeredParticipant {
        margin-bottom: 50px;
    }

    .registeredContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        align-items: center; 
    }

    #participantsContainer,
    #campsContainer {
        width: 50%; 
    }

    .participants,
    .camps {
        display: flex;
        flex-direction: row; 
        align-items: center; 
    }

    .separator {
        display: block;
        width: 1px;
        height: 220px;
        background-color: black;
        margin-top: 20px;
    }

    .participantIcons {
        width: 27%;
    }
}
</style>