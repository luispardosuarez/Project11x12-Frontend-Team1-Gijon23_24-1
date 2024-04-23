<script setup>
import { useProjectStore } from '../../stores/dataHomeStore';
import ContainerModal from "./ContainerModal.vue";
const projectStore = useProjectStore();
</script>

<template>
  <div class="description">
    <div class="description-card">
      <h1>Descripción</h1>
      <div class="content-wrapper">
        <p>{{ projectStore.description }}</p>
        <img src="../../assets/img/11x12.jpg" alt="imagen logo 11x12" class="logoHome" />
      </div>
    </div>
    <ContainerModal/>
  </div>
</template>

<style lang="scss" scoped>
.description {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
}
</style>
