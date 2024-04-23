<script setup>


import { useSelectedParticipantStore } from '@/stores/selectedParticipantStore';
import axios from 'axios';
import { ref } from 'vue';


const allParticipants = ref([]);
const selectedParticipantStore = useSelectedParticipantStore();


const fetchParticipants = async () => {
    const response = await axios.get(import.meta.env.VITE_API_ENDPOINT_PARTICIPANTS);
    allParticipants.value = response.data;
    console.log(response.data);
}

fetchParticipants();

const addSelectedParticipant = () => {
  const participant = selectedParticipant.value;
  selectedParticipantStore.addSelectedParticipant(participant);
}

const selectedParticipant = ref(null);

</script>
<template>
    <div class="container">
      <div class="select">
        <select v-model="selectedParticipant" id="comboParticipants" @change="addSelectedParticipant">
      <option value="null">Seleccione participante</option>
      <option v-for="participant in allParticipants" v-bind:value="participant" :key="participant.id_participant">
        {{ participant.participantName }}  {{ participant.participantSurname }}
      </option>
    </select>
  </div>
  
</div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';
.container {
  padding: 10px;

  select {
    font-family: Arial;
    appearance: none;
    outline: 0.5px $red;
    border-color: $red;
    flex: 1;
    padding: 0 1em;
    color: $black;
    background-color: $gray-checkbox;
    cursor: pointer;

    select::-ms-expand {
      display: none;
    }
  }
}

.select {
  position: relative;
  display: flex;
  width: 15em;
  height: 2em;
  overflow: hidden;
  box-shadow: 0 0.5px 1px rgb(59, 59, 59);
}

.select::after {
  content: "\25BC";
  position: absolute;
  right: 0;
  background-color: $red;
  transition: 0.2s all ease;
  pointer-events: none;
  color: white;
  margin: 4px 5px;
  padding: 0 5%;
  border-radius: 4px;
}

.option {
  padding: 1em;
  cursor: pointer;
  color: $black;
  background-color: $gray-checkbox;
  font-family: Arial;
  font-size: medium;
  transition: background-color 0.3s;
  text-align: left;
}

.option:hover {
  background-color: red;
}
</style>