<script setup>
import { useProjectStore } from '../../stores/dataHomeStore';
import ContainerModal from "./ContainerModal.vue";
const projectStore = useProjectStore();


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
   <ContainerModal/>
  </div>


</template>
<style lang="scss" scoped>
.description {
  display: flex;
  flex-direction: column;
  align-items: center;
 
  .description-card {
    position: relative; 
    background-color: #fff;
    margin-bottom: 5rem;
    padding: 3rem;
    border: none;
    text-align: justify;
    font-size: 1.3rem;
    margin-left: 1rem;
   
    h1 {
      color: $red;
      margin-left: 52%;
    }

    p {
      justify-content: center;
      padding: 2rem;
    }
  }

  
  

  .logoHome {
    width: 15%;
    display: flex;

    @media (max-width: 1050px) {
      margin-top: 1rem; 
      width: 25%;
      display: flex;

 
    }
    @media (max-width: 980px) {
      margin-top: 1rem; 
      width: 45%;
      margin-left: 5rem;
    }
   
  }

}
</style>
