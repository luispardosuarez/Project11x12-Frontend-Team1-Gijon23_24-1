<script setup>


</script>

<template>

    <div id="participantWelcome">

        <h2>AÑADIR PARTICIPANTE</h2>
        <img src="../../assets/img/11x12-horizontal.jpg">
    </div>

    <div id="participantDashboard">

        <div class="inputGroup">

            <label class="name" for="Nombre">Nombre</label>
            <input class="name" type="Nombre">

        </div>

        <div class="inputGroup">

            <label class="surname" for="Apellidos">Apellidos</label>
            <input class="surname" type="Apellidos">

        </div>

        <div class="inputGroup">

            <label class="dni" for="DNI">DNI</label>
            <input class="dni" type="DNI">

        </div>

        <div class="inputGroup">

            <label class="direction" for="Dirección">Dirección</label>
            <input class="direction" type="Dirección">

        </div>

        <div class="inputGroup">

            <label class="cp" for="CP">CP</label>
            <input class="cp" type="CP">

        </div>

        <div class="inputGroup">

            <label class="locality" for="Localidad">Localidad</label>
            <input class="locality" type="Localidad">

        </div>

        <div class="inputGroup">

            <label class="municipality" for="Municipio">Municipio</label>
            <input class="municipality" type="Municipio">

        </div>

        <div class="inputGroup">

        <label class="birth" for="Fecha de nacimiento">Fecha de nacimiento</label>
        <input class="birth" type="Fecha de nacimiento">

        </div>

        <div class="inputGroup">

            <label class="email" for="Email">Email</label>
            <input class="email" type="Email">

        </div>

        <div class="inputGroup">

            <label class="allergies" for="Alergias">Alergias</label>
            <textarea class="allergies" type="Alergias"></textarea>

        </div>

        <div class="inputGroup">

            <label class="observations" for="Observaciones">Observaciones</label>
            <textarea class="observations" id="Observaciones"></textarea>

        </div>

        <button class="save">Guardar</button>

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

// Desktop 

@media only screen and (min-width : 1024px) {

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
                width: 550px;
                margin-left: 20px;
            }

            .dni {
                width: 400px;
                margin-right: 25px;
            }

            .direction {
                width: 840px;
                margin-left: 20px;
            }

            .cp {
                width: 150px;
            }

            .locality, .municipality {
                width: 300px;
            }

            .municipality {
                margin-right: 25px;
            }

            .birth {
                width: 300px;
                margin-left: 20px;
            }

            .email {
                width: 500px;
            }

            .allergies {
                width: 700px;
                margin-right: 25px;
            }

            .observations {
                width: 1655px;
                margin-left: 20px;
            }

            textarea {
                height: 80px;
            }
        }

        .save {
            width: 10%;
            align-items: center;
            margin-left: 750px;
        }
        }
}

</style>