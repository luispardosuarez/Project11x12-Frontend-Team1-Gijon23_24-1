<script  setup>  
import { MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdb-vue-ui-kit';
import { ref } from 'vue';
import { useProjectStore } from '../../stores/dataHomeStore';

  const projectStore = useProjectStore(); 
  const modalOpen = ref(false); 
  const closeModal = () => { modalOpen.value = false; }; 
  </script>

<template>
  <MDBModal  size="lg" :show="modalOpen" @hidden="closeModal"   centered>
    <MDBModalHeader>
      <MDBModalTitle>Proyecto 11X12. Campamentos Urbanos 2024</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
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
    </MDBModalBody>
   
    <MDBModalFooter> 
      </MDBModalFooter>
  </MDBModal>
</template>
<style
  scoped>
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;

     font-size: x-large;
  }

  

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
  
    width: 80%;
   
  }

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  @media only screen and (min-width: 1280px) {
    
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 5rem;
    top: 0;
    width: 80%;
    height: 80%;
    
   
     font-size: x-large;
  }

  .modal.show {
    display: block;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
   
  }

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  }
</style>