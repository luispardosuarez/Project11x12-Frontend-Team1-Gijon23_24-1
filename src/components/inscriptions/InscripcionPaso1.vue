<script setup>
import { useCampWeeksStore } from '@/stores/campWeeksStore';
import { onMounted, ref } from 'vue';


const store = useCampWeeksStore();
const weeks = store.weeks;
const selectedWeek = ref(null);
onMounted(async () => {
  await store.fetchWeeks();
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES');
};

</script>
<template>
  <div class="contenedorPaso1">
    <div class="container">
    <div class="select">
      <select v-model="selectedWeek">
        <option value="null">Seleccione Fecha:</option>
        <option v-for="week in weeks" :key="week.id_week" :value="week.id_week">{{ formatDate(week.start_date) }} - {{ formatDate(week.end_date) }}</option>
        
      </select>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/scss/variables.scss";

.container {
  padding: 20px;
  

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
  content: '\25BC';
  position: absolute;
  right: 0;
  background-color: $red;
  transition: .20s all ease;
  pointer-events: none;
  color: white;
  margin: 4px 5px ;
  padding:0 5%;
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