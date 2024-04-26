<script setup>
import BotonesLaterales from "@/components/inscriptions/BotonesLaterales.vue";
import BotonSiguiente from "@/components/inscriptions/BotonSiguiente.vue";
import InscripcionPaso1 from "@/components/inscriptions/InscripcionPaso1.vue";
import { useAuthStore } from "@/stores/auth";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { provide } from "vue";
import { useSelectedCampStore } from "@/stores/selectedCampStore";
import axios from "axios";

const router = useRouter();

const goStep2 = () => {
  router.push("/inscriptionPaso2");
};
const authStore = useAuthStore();

const route = useRoute();

const selectedCampStore = useSelectedCampStore();

const pasoActual = ref(1);
provide("pasoActual", pasoActual);

// const fetchCampDetails = async () => {
//   try {
//     console.log('campId:', campId);
//     if (!campId) return;

//     const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_CAMPS}/${campId}`);
//     console.log('datos a guardar', response.data);
//     if (response.status === 200) {
//       selectedCampStore.saveCampDetails(response.data);
//     }

//   } catch (error) {
//     console.error('Error al obtener detalles del campamento:', error);
//   }
// };

onMounted(async () => {
  
  console.log(selectedCampStore.campDetails)
});

// watch(() => selectedCampStore.selectedCampId, (newValue, oldValue)=> {
//   if (newValue && newValue !== oldValue) {
//     fetchCampDetails();
//   }
// })
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
            <!-- <h2>Campamento {{ selectedCampStore.campDetails.id }}</h2> -->
            <h2>{{ selectedCampStore.campDetails.camp_name}}</h2>
      

            <div v-if="fetchError">
              <p class="error-message">Error: {{ fetchError.message }}</p>
            </div>
          </div>
          <InscripcionPaso1 />
          <div class="Siguiente">
            <!-- <button>Atras</button> -->
            <BotonSiguiente @goToNextStep="goStep2" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

#paso1 {
  background-color: $red;
}

h2 {
  padding-left: 2%;
  padding-top: 2%;
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
