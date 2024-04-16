<script setup>
import { inject } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

// Definir el estado del paso actual
const pasoActual = inject('pasoActual');

onBeforeRouteUpdate((to, from, next) => {
   const numeroPaso = determinarNumeroPaso(to.path);
   pasoActual.value = numeroPaso;
   next();
})

function determinarNumeroPaso(ruta) {
   const match = ruta.match(/inscriptionPaso(\d+)/);
   return match ? parseInt(match[1], 10) : 1;
}

</script>

<template>
 <div class="btnPasos">
    <button :class="{ 'paso-actual': pasoActual === 1 }" @click="cambiarPaso(1)">Seleccionar semana</button>
    <button :class="{ 'paso-actual': pasoActual === 2 }" @click="cambiarPaso(2)">Seleccionar colegio</button>
    <button :class="{ 'paso-actual': pasoActual === 3 }" @click="cambiarPaso(3)">Seleccionar participante</button>
    <button :class="{ 'paso-actual': pasoActual === 4 }" @click="cambiarPaso(4)">Confirmar compra</button>
    <button :class="{ 'paso-actual': pasoActual === 5 }" @click="cambiarPaso(5)">Pago</button>
    <button :class="{ 'paso-actual': pasoActual === 6 }" @click="cambiarPaso(6)">Finalizar</button>
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

 .paso-actual {
    background-color: $red;
 }
}
</style>
