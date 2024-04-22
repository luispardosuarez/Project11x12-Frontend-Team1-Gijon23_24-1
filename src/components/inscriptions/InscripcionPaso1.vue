<script setup></script>
<template>
  <div class="contenedorPaso1">
    <div class="container">
    <div class="select">
      <select>
        <option value="null">Seleccione Fecha:</option>
        <option value="uno">01/07/2024 - 05/07/2024</option>
        <option value="dos">08/07/2024 - 12/07/2024</option>
        <option value="tres">14/07/2024 - 18/07/2024</option>
        <option value="cuatro">21/07/2024 - 25/07/2024</option>
      </select>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/scss/variables.scss";

.container {
  padding: 20px;
  

  select {
    font-family: Arial;
    appearance: none;
    outline: 0.5px $red;
    border-color: $red;
    flex: 1;
    padding: 0 1em;
    color: $black;
    background-color: $gray-checkbox;
    cursor: pointer;

    select::-ms-expand {
      display: none;
    }
  }
}

.select {
  position: relative;
  display: flex;
  width: 15em;
  height: 2em;
  overflow: hidden;
  box-shadow: 0 0.5px 1px rgb(59, 59, 59);
}

.select::after {
  content: '\25BC';
  position: absolute;
  right: 0;
  background-color: $red;
  transition: .20s all ease;
  pointer-events: none;
  color: white;
  margin: 4px 5px ;
  padding:0 5%;
  border-radius: 4px;
}


.option {
    padding: 1em;
    cursor: pointer;
    color: $black;
    background-color: $gray-checkbox;
    font-family: Arial;
    font-size: medium;
    transition: background-color 0.3s;
  }

  .option:hover {
    background-color: red;
  }

</style>