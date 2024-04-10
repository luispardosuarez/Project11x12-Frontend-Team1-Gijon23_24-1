<script setup>


</script>
<template>
    <div class="btnPasos">
        <button id="paso1">Seleccionar semana</button>
        <button id="paso2">Seleccionar colegio</button>
        <button id="paso3">Seleccionar participante</button>
        <button id="paso4">Confirmar compra</button>
        <button id="paso5">Pago</button>
        <button id="paso6">Finalizar</button>
    </div>
  
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';
.btnPasos {
    display: flex;
    flex-direction: column;
    font-family: Arial;
    margin-top: 0px;
    
    button {
        background-color: $gray;
        color: white;
        margin: 2%;
        border: none;
        padding: 2%;

    }

    // #paso1 {
    //         background-color: $red;
    //     }
}
</style>