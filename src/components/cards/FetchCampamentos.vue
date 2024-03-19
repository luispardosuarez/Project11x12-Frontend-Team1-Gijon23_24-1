<script setup>

  import CardsCampamentos from "./CardsCampamentos.vue";

  const campamentos = [];

  const fetchCampamentos = async () => {
    try {
      const response = await fetch("campamentos.json");
      const data = await response.json();
      console.log(data.campamentos);
      campamentos.value = data.campamentos;
      console.log(campamentos.value);
    } catch (error) {
      console.error('Error al cargar el archivo JSON de campamentos:', error);
    }
  };

  fetchCampamentos();

</script>

<template>

  <div class="contenedorCards">

    <div v-if="campamentos.length === 0">Cargando...</div>
    <div v-else>
      <div v-for="(item, index) in campamentos" :key="index" class="cardsCampamentos">
        <CardsCampamentos :campamento="item" />
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">

  .contenedorCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .cardsCampamentos {
      margin-bottom: 20px;
    }
  }

</style>
