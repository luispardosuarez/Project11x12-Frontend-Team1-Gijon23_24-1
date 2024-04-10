<script setup>

import axios from 'axios';
import { ref } from 'vue';


const allSchools = ref<schools>([]);

const fetchSchools = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/schools");
    allSchools.value = response.data;
    console.log(response.data);
}

fetchSchools();

</script>
<template>
    <div class="combColes">
    <label for="coles" id="coles">Selecciona colegio</label>
    <select v-model="fetchColes" id="comboColes">
      <option value="null">Seleccione colegios</option>
      <option v-for="schools in allSchools" v-bind:value="schools.school_name" :key="schools.id_schools" selected>
        {{ schools.school_name }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';

</style>