<!-- <script setup>
import { ref } from 'vue';
import { useProjectStore } from '../../stores/dataHomeStore';

  const projectStore = useProjectStore(); 
const modalOpen = ref(false);

const toggleModal = () => {
 modalOpen.value = !modalOpen.value;
};
</script>
<template>
  <b-modal v-model="modalOpen" title="Proyecto 11X12. Campamentos Urbanos 2024"
 class="container w-50">

    <div class="form d-flex flex-column">
      
      <label class="title"><h1>Proyecto 11X12. Campamentos Urbanos 2024</h1> </label>
    
      <label class="content">
        <p class="my-4"> <strong>Plazo de inscripción:</strong>
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
.container{
  background-color: #fff!important;
    z-index: 2;
    max-width: 50%;
    align-content: center;
    margin-left: 30%;
    margin-top: -50%;

.modal-home{
  
    background-color: #fff!important;
    z-index: 2;
}}
label{
  background-color: #fff;
  max-width: 50%;
}
</style> -->
<script setup>
import { ref } from 'vue';
import { useProjectStore } from '../../stores/dataHomeStore';

const projectStore = useProjectStore();

const modalOpen = ref(false);


const closeModal = () => {
  modalOpen.value = false;
  emit("close");
};
</script>
<template>

  <b-modal v-model="modalOpen" title="Formulario">

    <div class="form d-flex flex-column modal-camp">

      <label>
        <h1>Proyecto 11X12. Campamentos Urbanos 2024</h1>
      </label>

      <label><strong>Plazo de inscripción:</strong>
        <p>{{ projectStore.details.inscriptionPeriod }}</p>
      </label>
      <label><strong>Precios:</strong>
        <p>{{ projectStore.details.prices.daily }}</p>
      </label>

      <label>
        <table>
          <tr v-for="service in projectStore.details.prices.services" :key="service.name">
            <td>{{ service.name }}</td>
            <td>{{ service.price }}</td>
          </tr>
        </table>
      </label>
      <label><strong>Horarios:</strong>
        <p>{{ projectStore.details.schedules }}</p>
      </label>

      <label>
        <strong>Becas comedor:</strong>
        <p>{{ projectStore.details.foodGrants }}</p>
      </label>
    </div>

  </b-modal>

</template>

<style scoped lang="scss">
.modal-camp {
  width: 50%;
  padding: 2rem;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  position: relative;
  text-align: justify;
  margin-left: 30%;
  margin-top: -50%;
  text-align: center;
  z-index: 15;

  .form {
    height: 100%;
    width: 100%;
  }
}
</style>