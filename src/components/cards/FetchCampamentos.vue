<script setup>

import { ref } from 'vue';
import CardsCampamentos from "./CardsCampamentos.vue";

const campamentos = ref([]);

const fetchCampamentos = async () => {
  try {
    const response = await fetch("/campamentos.json");
    const data = await response.json();

    campamentos.value = data.campamentos;

  } catch (error) {
    console.error('Error al cargar el archivo JSON de campamentos:', error);
  }
};

fetchCampamentos();

</script>

<template>

  <div class="contenedorCards">
    <div v-if="campamentos.length === 0">Cargando...</div>
    <div v-else class="cardsContainer">
      <CardsCampamentos v-for="(campamento, index) in campamentos" :key="index" :campamento="campamento" />
    </div>
  </div>

</template>

<style scoped lang="scss">
.contenedorCards {
  .cardsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 50px;
    padding: 20px;
  }
}
</style>
