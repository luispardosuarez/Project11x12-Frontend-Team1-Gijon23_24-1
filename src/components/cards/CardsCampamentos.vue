<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  campamento: Object
});

</script>

<template>

  <div class="card">
    <div class="color"></div>
    <img :src="'/img/' + campamento.image" alt="Imagen de {{ campamento.name }}" />
    <div class="date_clase">
      <h6>{{ campamento.name }}</h6>
      <p class="text"><strong>Fecha de inicio/fin:</strong>
      <p>{{ campamento['start date'] }} - {{ campamento['end date'] }}</p>
      </p>
    </div>
    <p class="infor">{{ campamento.description }}</p>
    <div class="main_event">
      <p><img class="flag" src="../../assets/icons/flag.svg" alt=""> {{ campamento['date flag'] }} </p>
      <p><img class="flag" src="../../assets/icons/people.svg" alt=""> {{ campamento['date user'] }}</p>
      <p>{{ campamento['date diner'] }}</p>
      <button type="button" id="btn_clase">INSCRIBIRME</button>
    </div>
  </div>

</template>

<style scoped lang="scss">
.card {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 0 5px 5px 0;
  padding: 10px;
  margin: 10px;

  .color {
    position: absolute;
    top: 0;
    left: 0;
    width: 15%;
    height: 68%;
    background-color: rgb(110, 142, 188);
    z-index: 1;
    border-radius: 0 0 8px 0;
  }

  img {
    width: 103%;
    height: 200px;
    position: relative;
    z-index: 2;
  }

  .date_clase {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-left: 30px;
    padding-top: 10px;
    font-size: x-small;

    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }

.main_event {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(110, 142, 188);
  padding: 7px;
  height: 33px;

  p {
    font-size: x-small;
    font-weight: 620;
    color: white;
  }

  #btn_clase {
    border: none;
    background-color: rgb(61, 107, 173);
    color: white;
    border-radius: 8px;
    width: 75px;
    height: 15px;
    font-size: xx-small;
  }

  .flag {
    width: 15px;
    height: auto;
  }
}
}

</style>
