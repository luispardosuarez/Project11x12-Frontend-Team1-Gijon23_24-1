<script setup>
import { ref } from 'vue';
import AddCampService from '../services/AddCampService';
import SelectDate from './SelectDate.vue';

const modalOpen = ref(false);

const getSelectedDateRange = () => {
 // Logic to get the selected date range
 return { start_date: new Date(), end_date: new Date() };
};

const submitForm = async () => {
 const camp_name = document.querySelector('input[name="camp_name"]').value;
 const { start_date, end_date } = getSelectedDateRange();
 const schedule = document.querySelector('input[name="schedule"]').value;
 const description = document.querySelector('textarea[name="description"]').value;
 const img = document.querySelector('input[type="file"]').files[0];
 const numdays = document.querySelector('select[name="numdays"]').value;

 const formData = new FormData();
 formData.append('camp_name', camp_name);
 formData.append('start_date', start_date);
 formData.append('end_date', end_date);
 formData.append('schedule', schedule);
 formData.append('description', description);
 formData.append('img', img);
 formData.append('numdays', numdays);

 try {
    const response = await AddCampService.addCamp(formData);
    console.log(response);
    modalOpen.value = false; // Close the modal
 } catch (error) {
    console.error(error);
 }
};

const closeModal = () => {
 modalOpen.value = false;
 emit("close");
};
</script>
<template>

  <b-modal v-model="modalOpen" title="Formulario" >

    <img src="../../assets/img/11x12-horizontal.jpg" alt="imagen 11x12 horizontal" class=" img-form mb-5">
    <div class="form d-flex flex-column modal-camp">
      <label>Nombre Campamento:
        <input type="text" class="form-control w-100 mb-3" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg">
      </label>
      <SelectDate />
      <label>Horario:
        <input type="text" class="form-control w-100 mb-3" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg">
      </label>
      <label>
        Descripción:
        <textarea class="form-control w-100" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-xlg"></textarea>
      </label>
      <div class="d-flex justify-content-between mb-3">
        <label>Tipo de Semana:
          <select class="form-select" aria-label="Default select example">
            <option value="1">Cantidad de días    </option>
            <option value="2">4 Días</option>
            <option value="3">5 Días</option>
          </select>
        </label>
        <label>Precio:
          <input type="text" class="form-control w-50" />
        </label>
      </div>
      <div class="input-group">
        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
          aria-label="Upload">
      </div>
      <div class=" clearfix">
        <div class="d-grid gap-2">
          <button class="btn btn-danger" type="button" @click="submitForm"> Añadir Campamento</button>
        </div>
      </div>
    </div>
  </b-modal>

</template>

<style scoped lang="scss">
.img-form{
  width: 100%;
}
.modal-camp {
  padding: 2rem;
  background-color:$gray-form;
font-family: Arial, Helvetica, sans-serif;
  .form {
    height: 100%;
    width: 100%;
    
 
  }
}
</style>
