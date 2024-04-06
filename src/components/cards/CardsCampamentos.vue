<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  campamento: Object
});

</script>

<template>

  <div class="card">
    <div class="color"></div>
    <img :src="'/img/' + campamento.image" alt="Imagen de {{ campamento.name }}" />

    <div class="date_clase">
      <h6 class="camp">{{ campamento.name }}</h6>
      <div class="text">
        <p><strong>Fecha de inicio/fin:</strong></p>
        <div class="date">
          <p> {{ campamento['start date'] }}</p>
          <p> - </p>
          <p>{{ campamento['end date'] }}</p>
        </div>
      </div>
    </div>

    <p class="date_clase">{{ campamento['description'] }}</p>

    <div class="main_event">
      <div class="nav_event">
        <p><img class="flag" src="../../assets/icons/flag.svg" alt=""> {{ campamento['date flag'] }} </p>
        <p><img class="flag" src="../../assets/icons/people.svg" alt=""> {{ campamento['date user'] }}</p>
        <p>{{ campamento['date diner'] }}</p>
        <button type="button" id="btn_clase">INSCRIBIRME</button>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>
