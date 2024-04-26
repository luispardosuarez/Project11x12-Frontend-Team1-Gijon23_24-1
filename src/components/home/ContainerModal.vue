<script setup>
import { ref } from 'vue';
import { useProjectStore } from '../../stores/dataHomeStore';

const projectStore = useProjectStore();
const showPopup = ref(false);
</script>

<template>
  <div class="admin-panel bg-light">
    <div>
      <b-button class="add-button btn" @click="showPopup = true">Más información</b-button>
    </div>
    <div v-if="showPopup" class="popup bg-light">
      <div class="container">
        <b-modal v-model="showPopup" title="Formulario">
          <div class="modal-content">
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
          <div class="button-container">
                <button type="button" class="close-modal mt-2" aria-label="Close" @click="showPopup = false">Cerrar</button>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-panel {
  background-color: #fff !important;
  width: 100%;

  .add-button {
    position: absolute;
    margin-top: -5rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: $red;
    color: #fff;
    z-index: 1;

    @media (max-width: 1025px) {
      position: static;
      margin-top: 2rem;
      transform: none;
      margin-left: 40%;
    }
   
  }

  .popup {
    background-color: #fff !important;
    position: relative;
    max-width: 100%;

    @media (max-width: 1024px) {
      padding: 2rem;
    }
  }

  .close-modal {
    position: relative;
    margin: 2rem auto;
    display: block;
    font-size: larger;
    background-color: $red;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }

  .modal-camp {
    width: 100%;
    padding: 2rem;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    border: 2px solid $gray;
    position: relative;
    text-align: justify;
  }

  .button-container {
    text-align: center;
  }
}
</style>