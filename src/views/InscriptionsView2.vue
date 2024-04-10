<script setup>
import BotonAtras from "@/components/inscriptions/BotonAtras.vue";
import BotonesLaterales from "@/components/inscriptions/BotonesLaterales.vue";
import BotonSiguiente from "@/components/inscriptions/BotonSiguiente.vue";
import ComboColes from "@/components/inscriptions/ComboColes.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>
<template>
  <main>
    <div>
      <div class="saludo">
        <h2>¡Hola {{ authStore.user.username }}!</h2>
      </div>
      <div class="bajoSaludo">
        <aside class="barraLateral">
          <BotonesLaterales />
          <img
            class="logo11x12"
            src="../assets/img/11x12.jpg"
            alt="imagen 11x12 rosa con letras blancas"
          />
        </aside>
        <div class="cuerpoInscripcion">
          <div class="campamento">
            <h3>{campamento}</h3>
            <h4>{fecha } { schedule }</h4>
          </div>
          <div class="colegio">
            <h3>Seleccionar Colegio:</h3>
            <!-- <ComboColes/>   <h4>Plazas disponibles {places_num}</h4> -->
          </div>

          <div class="AtrasSiguiente">
            <div class="Atras">
              <BotonAtras />
            </div>
            <div class="Siguiente">
              <BotonSiguiente />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

h2 {
  padding-left: 2%;
  padding-top: 2%;
}

.campamento{
  font-family: Arial;
}

.bajoSaludo {
  display: flex;
  align-items: center;
  margin-top: 0px;
}

aside {
  width: 20%;
  align-items: center;
  margin: 1%;
}

.logo11x12 {
  width: 100%;
  margin-top: 2%;
}

.cuerpoInscripcion {
  background-color: $gray-form;
  width: 100%;
  height: 550px;
  margin-right: 1%;
}

.AtrasSiguiente {
  display: flex;
  flex-direction: row-reverse;
}
.Siguiente {
  text-align: right;
  margin-right: 2%;
}

@media only screen and (max-width: 768px) {
  .barraLateral {
    display: none;
  }
}
</style>
