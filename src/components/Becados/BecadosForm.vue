<script setup>
import {ref} from 'vue';
import axios from 'axios';

const scholarshipForm = ref(null);

const resetForm = () => {
  if (scholarshipForm.value){
    scholarshipForm.value.reset();
  }
};

let dni = ref('');
const isSubmitting = ref(false);

const submitForm = async() => {
  if(isSubmitting.value) return;
  isSubmitting.value= true;

  axios.post(import.meta.env.VITE_API_ENDPOINT_SCHOLARSHIP, {
    dni: dni.value
  }) 
  .then(() => {
    resetForm();
    isSubmitting.value = false;
    
    
 })
 .catch((error) => {
    isSubmitting.value = false;
    
    console.error(error);
  });
}


</script>
<template>
  <div class="scholarshipContainer">
    <form class="scholarshipForm" @submit.prevent="submitForm" ref="scholarshipForm">
      <h4 class="titleForm">Añadir Becado</h4>
      <div class="formGroupDni">
        <div class="labelInputContainer">
          <label for="formGroupScholarship">DNI Becado:</label>
          <input
            type="text"
            class="dni-input"
            placeholder="Introduzca DNI sin espacios"
            id="formGroupScholarship"
            v-model="dni"
          />
        </div>
        <button type="submit" class="btnAddDni" @click.prevent="submitForm">Añadir Becado</button>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import "../../assets/scss/variables.scss";

.scholarshipForm {
  font-family: Arial;
  display: flex;
  flex-direction: column;
  background-color: $gray-form;
  padding: 1%;

  .titleForm {
    font-weight: bold;
    font-size: 1rem;
  }

  .formGroupDni {
    display: flex;
    column-gap: 0.7%;
    align-items: center;
    justify-content: space-between;

    .labelInputContainer {
        display: flex;
    }

    .dni-input {
      border: 1px solid $red;
      font-size: 0.9rem;
    }

    .btnAddDni {
        color: white;
        background-color: $red;
        border: none;
    }
  }
}
</style>
