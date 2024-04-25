
<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { usecampsStore } from "@/stores/campsStore";
import axios from 'axios';
import CardsCampamentos from "./CardsCampamentos.vue";
const uri = import.meta.env.VITE_API_ENDPOINT_CAMPS;
const route = useRoute()
const router = useRouter()
const store = usecampsStore()
const campamentos = ref([]);
const getcamps = async () => {
  try {
    const response = await axios.get(`${uri}`);
    const data = await response.data;
    campamentos.value = data;
    // campamentos.value = await response.data();
    console.log("revisar esto" + data);
  } catch (error) {
    throw new Error("Error Loading API: " + error);
  }
};
campamentos.value = getcamps();
</script>
<template>
  <div class="contenedorCards">
    <div v-if="campamentos.length === 0">Cargando...</div>
    <div v-else class="cardsContainer">
      <CardsCampamentos v-for="(campamento, index) in campamentos" :key="index" :campamento="campamento" />
    </div>
  </div>
</template>





<!-- <script setup>

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
</style> -->
