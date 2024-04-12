<script setup>
import { ref } from "vue";
import { useProjectStore } from "../../stores/dataHomeStore";
import FetchCampamentos from "../cards/FetchCampamentos.vue";
import PopUpHome from "./PopUpHome.vue";

const projectStore = useProjectStore();
const showPopup = ref(false);
</script>
<template>
  <div class="container" style="max-width: 100%; border: none">
    <h1 class="text-center p-5 me-5">Descripción</h1>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text ms-5">{{ projectStore.description }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            class="logocamp w-50 img-fluid"
            src="../../assets/img/11x12.jpg"
            alt="imagen logo 11x12"
          />
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="more-information btn btn-danger" @click="showPopup = true">
        Más información
      </button>
      <PopUpHome v-model="showPopup" />
    </div>
    <FetchCampamentos />
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: white;
  width: 100%;
  margin-top: 22rem;

  h1 {
    color: #d0003e;
  }

  .logocamp {
    margin-left: 7rem;
    margin-top:-5rem;
    border: none;
   
  }

  .card {
    width: 100%;
    border: none;

    .card-body {
      text-align: justify;
      width: 100%;
      font-size: x-large;
    }

    .text-center {
      text-align: center;
    }
  }}
  @media only screen and (min-width: 1280px) {
  .container {
    width: 90%;
    margin: 0 auto;
  }
  .logocamp {
    margin-left: 9rem;
    margin-top: 8rem;
  }
  .card {
    width: 80%;
  }

}

@media only screen and (min-width: 820px) {
  .container {
    width: 80%;
    margin: 0 auto;
  }
  .logocamp {
    margin-left: 9rem;
    margin-top: 8rem;
  }
  .card {
    width: 80%;
  }
}
@media only screen and (min-width: 360px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .logocamp {
   margin:0;
  margin-left: 2rem;
    margin-top: 8rem;
  }
  .card {
    width: 80%;
    margin:0;
    
  }


}

</style>
