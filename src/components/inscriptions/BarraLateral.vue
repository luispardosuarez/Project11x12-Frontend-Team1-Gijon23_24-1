<script setup>


</script>
<template>
    <div class="btnPasos">
        <button>Seleccionar semana</button>
        <button>Seleccionar colegio</button>
        <button>Seleccionar participante</button>
        <button>Confirmar compra</button>
        <button>Pago</button>
        <button>Finalizar</button>
    </div>
  
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';
.btnPasos {
    display: flex;
    flex-direction: column;
    font-family: Arial;
    
    button {
        background-color: $red;
        color: white;
    }
}
</style>