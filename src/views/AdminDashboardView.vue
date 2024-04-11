<script setup>
import BecadosForm from '@/components/Becados/BecadosForm.vue';
import Boarp from '@/components/Boarp.vue';
import VistaAdminBeca from '@/components/adminDashboard.vue/VistaAdminBeca.vue';
</script>

<template> 

<main>

<div class="barraLateral">
  <Boarp />
</div>

<div class="vistaBecados">  
  <VistaAdminBeca /> 
</div>

<div class="añadirBecado">
  <BecadosForm />
</div>

</main>
  <!-- <main>

    <div>
      <Boarp />
    </div>
  </main>  -->

</template>

<style scoped>

/* .vistaBecados{
display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background-color: #ECE7E7;
 margin-bottom: 10%;
} */


    </style>