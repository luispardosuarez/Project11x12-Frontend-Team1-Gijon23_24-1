<script setup>
import { ref } from 'vue';
import { useProjectStore } from '../../stores/dataHomeStore';

  const projectStore = useProjectStore(); 
const modalOpen = ref(false);

const toggleModal = () => {
 modalOpen.value = !modalOpen.value;
};
</script>
<template>

 <b-modal v-model="showPopup" title="Proyecto 11X12. Campamentos Urbanos 2024">

    <div class="form d-flex flex-column modal-camp">
      
      <label><h1>Proyecto 11X12. Campamentos Urbanos 2024</h1> </label>
      <SelectDate />
      <label>
        <p> <strong>Plazo de inscripción:</strong>
      <p>{{ projectStore.details.inscriptionPeriod }}</p> <strong>Precios:</strong>
      <p>{{ projectStore.details.prices.daily }}</p>
      <table>
        <tr v-for="service in projectStore.details.prices.services" :key="service.name">
          <td>{{ service.name }}</td>
          <td>{{ service.price }}</td>
        </tr>
      </table> <strong>Horarios:</strong>
      <p>{{ projectStore.details.schedules }}</p> <strong>Becas comedor:</strong>
      <p>{{ projectStore.details.foodGrants }}</p>
      </p>
      </label>
 
    </div>
  </b-modal>

</template>


  
<style scoped lang="scss">
</style>