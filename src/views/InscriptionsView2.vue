<script setup>
import BotonAtras from "@/components/inscriptions/BotonAtras.vue";
import BotonesLaterales from "@/components/inscriptions/BotonesLaterales.vue";
import BotonSiguiente from "@/components/inscriptions/BotonSiguiente.vue";
import ComboColes from "@/components/inscriptions/ComboColes.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { provide } from "vue";
import selectedCampStore from "@/stores/selectedCampStore";
import { useCampWeeksStore } from "@/stores/campWeeksStore";

const router = useRouter();

const goStep1 = () => {
  router.push('/inscription');
}
const goStep3 = () => {
  router.push('/inscriptionPaso3');
}
const authStore = useAuthStore();

const selectedCamp = selectedCampStore.state.selectedCamp;

const campWeeksDateStore = useCampWeeksStore();
const selectedDateRange = campWeeksDateStore.selectedDateRange;

const pasoActual = ref(2);
provide('pasoActual', pasoActual);

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
            <h2>Campamento {{selectedCamp}}</h2>
            <h4 v-if="selectedDateRange">{{selectedDateRange.start }} - {{ selectedDateRange.end }} { schedule }</h4>
          </div>
          <div class="colegio">
            
            <h3>Seleccionar Colegio:</h3>
            <div class="cmbColes">
             <ComboColes/>   <h4>Plazas disponibles:{places_num}</h4>
            </div>
          </div>

          <div class="AtrasSiguiente">
            <div class="Siguiente">
              <BotonSiguiente @goToNextStep="goStep3" />
            </div>
            <div class="Atras">
              <!-- <BotonAtras @goToPreviusStep="goStep1"/> -->
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
 h3 {
  padding-left: 2.5%;
 }
 h4 {
  font-size: small;
 }

.campamento{
  font-family: Arial;
}

.colegio {
  display: flex;
  flex-direction: column;
}
.cmbColes {
  display: flex;
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
  margin: 1%;
  gap: 1%;
  margin-top: 3%;
}
.Siguiente {
  text-align: right;
  margin-right: 2%;
}

@media only screen and (max-width: 768px) {
  .barraLateral {
    display: none;
  }
  .AtrasSiguiente {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  margin: 2%;
  gap: 1%;
}
}


</style>
