<script setup>
import { ref } from "vue";
import { useProjectStore } from '../../stores/dataHomeStore';
import ModalHome from '../home/ModalHome.vue';
const projectStore = useProjectStore();
const showPopup = ref(false);

</script>
<template>
  <div class="description ">
    <div class="description-card d-flex justify-content-between align-items-center">
      <div>
        <h1>Descripción</h1>
        <p> {{ projectStore.description }}</p>
      </div>
      <img src="../../assets/img/11x12.jpg" alt="imagen logo 11x12" class=" logoHome" />
    </div>
    <div class="admin-panel  bg-light">
      <div>
        <b-button v-b-modal.modal-center class="add-button btn btn-danger" @click="showPopup = true">Más
          información</b-button>
      </div>

      <div v-if="showPopup" class="popup bg-light">

        <ModalHome :projectStore="projectStore" />
        <button type="button" class=" btn-danger close-modal bg-danger" aria-label="Close"
          @click="showPopup = false">Cerrar</button>

      </div>
   
    </div>
  </div>


</template>
<style lang="scss" scoped>
.description-card {
  background-color: #fff;
  margin-bottom: 5rem;
  padding: 2rem;
  border: 1px solid #ccc;
  text-align: justify;
  font-size: 1.3rem;
  h1 {
    color: $red;
    text-align: center;
  }

  p {
    justify-content: center;
    padding: 2rem;
  }

}

.add-button {
  margin-left: 45%;

}

.logoHome {
  align-self: center;
  width: 15%;

}

.popup {
  background-color: #fff !important;

}

.admin-panel {
  background-color: #fff !important;
}

.close-modal {
  position: sticky;
  top: -60rem;
  left: 66rem;
  font-size: x-large;
  color: $gray-form;
  border-radius: 10px;

}
</style>