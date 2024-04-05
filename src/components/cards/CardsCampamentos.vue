<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  campamento: Object
});

</script>

<template>

  <div class="card">
    <div class="color">{{ x }}</div>
    <img :src="'/img/' + campamento.image" alt="Imagen de {{ campamento.name }}" />

    <div class="date_clase">
      <h6 class="camp">{{ campamento.name }}</h6>
      <div class="text">
        <p><strong>Fecha de inicio/fin:</strong></p>
        <div class="date">
          <p> {{ campamento['start date'] }}</p>
          <p> - </p>
          <p>{{ campamento['end date'] }}</p>
        </div>
      </div>
    </div>
    <p class="date_clase">{{ campamento['description'] }}</p>
    <div class="main_event">
      <div class="nav_event">
        <p><img class="flag" src="../../assets/icons/flag.svg" alt=""> {{ campamento['date flag'] }} </p>
        <p><img class="flag" src="../../assets/icons/people.svg" alt=""> {{ campamento['date user'] }}</p>
        <p>{{ campamento['date diner'] }}</p>
        <button type="button" id="btn_clase">INSCRIBIRME</button>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 350px;
  border: 1.2px solid #ccc;
  border-radius: 0 5px 5px 0;
  padding: 10px;

  .color {
    position: absolute;
    top: 0;
    left: 0;
    width: 15%;
    height: 71%;
    background-color: rgb(110, 142, 188);
    border-radius: 0 0 10px 0;
  }

  img {
    width: 103%;
    height: 60%;
    z-index: 1;
  }

  .date_clase {
    display: flex;
    justify-content: space-between;
    padding: 9px 0;
    margin-left: 15%;
    z-index: 1;

    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: x-small;
     
      .date {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
      }
    }

    h6 {
      display: inline;
    }
  }

  p {
    font-size: x-small;
    margin-bottom: 0px;
    text-align: center;
  }

  .main_event {

    .nav_event {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      gap: 4px;
      background-color: rgb(110, 142, 188);
      padding: 6px;
    }

    .flag {
      width: 15px;
      height: auto;
    }

    p {
      font-size: xx-small;
      font-weight: 620;
      color: white;
    }

    #btn_clase {
      height: 15px;
      background-color: rgb(61, 107, 173);
      color: white;
      border-radius: 10px;
      border: none;
      font-size: xx-small;
      cursor: pointer;
    }
  }
}
</style>
