<script setup>
import { ref } from 'vue';

import SelectDate from './SelectDate.vue';

const modalOpen = ref(false);

const submitForm = () => {
  // Lógica para enviar el formulario
};

const closeModal = () => {
  modalOpen.value = false;
  emit("close");
};
</script>
<template>

  <b-modal v-model="modalOpen" title="Formulario">

    <img src="../../assets/img/11x12-horizontal.jpg" alt="imagen 11x12 horizontal" class="mb-5">
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

.modal-camp {
  
  background-color:$gray-form;
font-family: Arial, Helvetica, sans-serif;
  .form {
    height: 100%;
    width: 100%;
    
 
  }
}
</style>
