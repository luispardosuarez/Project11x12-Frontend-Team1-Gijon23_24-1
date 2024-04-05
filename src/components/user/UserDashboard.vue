<script setup>


</script>

<template>

<div class="userWelcome">

    <h3>¡Hola, Menganito Fulanito de Tal!</h3>
    <img src="../../assets/img/11x12-horizontal.jpg">

</div>

<div id="bottomContainer">

<div class="userDashboard">

    <div class="inputGroup">

    <label input="Nombre y apellidos">Nombre y apellidos</label>
    <input type="Nombre y apellidos" placeholder="Nombre y apellidos">
    <img src="../../assets/icons/edit.svg">

    </div>

    <div class="inputGroup">

    <label input="DNI">DNI del usuario</label>
    <input type="DNI" placeholder="DNI del usuario">
    <img src="../../assets/icons/edit.svg">

    </div>

    <div class="inputGroup">

    <label input="Teléfonos">Teléfonos de contacto</label>
    <input class="telephone1" type="Teléfonos" placeholder="Teléfono 1"> <input type="Teléfonos" placeholder="Teléfono 2">
    <img src="../../assets/icons/edit.svg">

    </div>

    <div class="inputGroup">

    <label input="Correo">Correo electrónico</label>
    <input type="Correo" placeholder="Correo">
    <img src="../../assets/icons/edit.svg">

    </div>

</div>

    <div class="buttonContainer">
        <button class="saveButton">Guardar</button>
    </div>


    <div id="participantsContainer">

        <div class="participants">
            <h6>Participantes registrados</h6>
            <button class="addParticipant">Añadir participante</button>
        </div>

        <div id="registeredParticipant">

            <p>Pepa López Navarro</p>

            <div class="participantIcons">
                <img src="../../assets/icons/see.svg">
                <img src="../../assets/icons/edit.svg">
                <img src="../../assets/icons/delete.svg">
            </div>

        </div>


    </div>

    <div id="campsContainer">

        <div class="camps">
            <h6>Campamentos registrados</h6>
            <button class="addCamp">Inscribirse</button>
        </div>

        <div class="registeredCamp">

            <p>Campamento de verano - 22/07/2024</p>

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
    border: 1px solid $red;
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
    margin-top: 30px;
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


// Tablet 

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .userWelcome {
        h3 {
            font-size: 50px;
        }
        img {
            width: 100%;
        }
    }

    .userDashboard {
        .inputGroup {
            input {
                width: calc(50% - 20px);
            }
        }
    }
}

</style>