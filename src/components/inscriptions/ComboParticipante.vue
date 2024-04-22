<script setup>

import axios from 'axios';
import { ref } from 'vue';


const allParticipants = ref([]);
const fetchParticipant = ref(null);

const fetchParticipants = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/participants");
    allSchools.value = response.data;
    console.log(response.data);
}

fetchParticipants();

</script>
<template>
    <div class="combParticipants">
    <!-- <label for="coles" id="coles">Selecciona colegio</label> -->
    <select v-model="fetchParticipant" id="comboParticipants">
      <option value="null">Seleccione participante</option>
      <option v-for="participant in allPariticipants" v-bind:value="participant.participant_name" :key="participant.id_participant" selected>
        {{ participant.participant_name }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';

</style>