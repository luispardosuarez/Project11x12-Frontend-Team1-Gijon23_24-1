<script setup>
import { useProjectStore } from '../../stores/dataHomeStore';
import ContainerModal from "./ContainerModal.vue";
const projectStore = useProjectStore();
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
</script>

<template>
  <div class="description">
    <div class="description-card">
      <h1>Descripción</h1>
      <div class="content-wrapper">
        <p>{{ projectStore.description }}</p>
        <img src="../../assets/img/11x12.jpg" alt="imagen logo 11x12" class="logoHome" />
      </div>
<<<<<<< Updated upstream
      <img src="../../assets/img/11x12.jpg" alt="imagen logo 11x12" class=" logoHome" />
    </div>
   <ContainerModal/>
=======
    </div>
    <ContainerModal/>
>>>>>>> Stashed changes
  </div>
</template>

<style lang="scss" scoped>
.description {
  display: flex;
  flex-direction: column;
  align-items: center;
<<<<<<< Updated upstream
 
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
      width: 35%;
    }
   
=======
}

.description-card {
  position: relative; 
  background-color: #fff;
  margin-bottom: 5rem;
  padding: 3rem;
  border: none;
  text-align: justify;
  font-size: 1.3rem;

  h1 {
    color: $red;
    margin-left: 52%;
    @media (max-width: 750px) {
      margin-left: 40%;
        
      }
      @media (max-width: 360px) {
      margin-left: 30%;
        
      }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      padding: 2rem;
    }

    .logoHome {
      width: 15%;

      @media (max-width: 1050px) {
        width: 25%;
      }

      @media (max-width: 980px) {
        width: 35%;
      }

      @media (max-width: 750px) {
        width: 55%;
        
      }
    }
>>>>>>> Stashed changes
  }
}
</style>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
