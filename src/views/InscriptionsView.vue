<script setup>
import BarraLateral from "@/components/inscriptions/BarraLateral.vue";
</script>
<template>
  <main>
    <div>
      <div class="saludo">
        <h2>¡Hola {user}!</h2>
      </div>
      <div class="bajoSaludo">
        <aside>
        <BarraLateral />
        <img class="logo11x12" src="../assets/img/11x12.jpg" alt="imagen 11x12 rosa con letras blancas">
      </aside>
      </div>
      
    </div>
  </main>
</template>

<style scoped lang="scss">
aside {
  width: 20%;
  align-items: center;
}

.logo11x12 {
  width: 100%;
  margin: 1%;
}

@media only screen and (max-width: 768px){
  .bajoSaludo  {
    display: none;
  }
}

</style>
