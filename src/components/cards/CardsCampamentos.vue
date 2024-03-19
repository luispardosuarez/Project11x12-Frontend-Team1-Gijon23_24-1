<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  campamento: Object
});

</script>

<template>

  <div class="card">
    <img :src="'/img/' + campamento.image" alt="Imagen de {{ campamento.name }}" />
    <h2>{{ campamento.name }}</h2>
    <p><strong>Fecha de inicio:</strong> {{ campamento['start date'] }}</p>
    <p><strong>Fecha de fin:</strong> {{ campamento['end date'] }}</p>
    <p>{{ campamento.description }}</p>
  </div>

</template>

<style scoped lang="scss">

  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }

</style>
