<script setup>
  

import { ref } from 'vue';

const popupVisible = ref(false);

const showPopup = () => {
  popupVisible.value = true;
};

const closePopup = () => {
  popupVisible.value = false;
};

</script> 

<template>

<div class="banner">
<img src="../../src/assets/img/kaleidoscope banner.jpg"  alt="" />
</div>
<div class="container">
<div class ="description">
    <h1>Descripción</h1>
<p>El proyecto 11x12 tiene como objetivo facilitar la conciliación laboral, familiar y personal de la ciudadanía de Gijón/Xixón.
    Para ello, 15 centros educativos de la ciudad permanecen abiertos, 11 horas al día, 12 meses al año, proporcionando a niños y niñas de los niveles de infantil y primaria un programa que combina entretenimiento, actividades culturales, organización del tiempo para la realización de las tareas escolares y merienda.
    Atención continuada desde que finaliza el horario del comedor escolar hasta las 6 y media de la tarde.
    Se ofrece el servicio de catering de merienda para aquellas familias que así lo demanden.
    En coordinación con el Patronato Deportivo Municipal se ofertan actividades deportivas en primaria, de manera que los niños y niñas que están inscritos e inscritas con carácter mensual al 11x12, pueden apuntarse de manera gratuita a una de estas actividades
    </p>

</div>
<div class="logoproject">
    <img src="../../src/assets/img/11x12.jpg" alt="" />
</div>
</div>
<div class="information">
<div>
    <button class="more-information" @click="showPopup">Más información</button>
    <div v-if="popupVisible" class="popup">
    <h2>Proyecto 11X12. Campamentos Urbanos 2024.</h2>
<p>
  <strong>Plazo de inscripción:</strong>
  <p>Del 11 de marzo de 2024 al 22 de marzo de 2024
El modo de inscripción podrás hacerlo vía online.Si quieres hacerlo presencial pulsa aqui . Sigue los pasos para inscribirte en el botón Inscribirme .
</p>
<strong>Precios:</strong>
El precio de cada día de campamento es de 6,10 euros por cada niño o niña.Se contemplan los habituales descuentos para las familias con varios hermanos y hermanas.
<p>
  <strong>Horarios:</strong>
El horario de las actividades de los campamentos será de 9:00 am a las 2:00 pm ofreciéndose además la posibilidad de atención temprana con desayuno desde las 7:30 am, comida y el servicio de catering de merienda para aquellas familias que así lo demanden. 
</p>
<table>
  <tr>
    <td>Servicio</td>
    <td>Precio</td>
  </tr>
  <tr>
    <td>Desayuno</td>
    <td>2,50 euros/día</td>
  </tr>
  <tr>
    <td>Comedor</td>
    <td>4,50 euros/día</td>
  </tr>
  <tr>
    <td>Merienda</td>
    <td>1,50 euros/día</td>
  </tr>
</table>
<strong>Becas comedor:</strong> 
Las familias que tienen concedida la beca de comedor al 100 por 100 del Ayuntamiento de Gijón/Xixón siguen manteniendo una ayuda equivalente a dicho porcentaje en esta actividad. 
</p>
<button @click="closePopup">Cerrar</button>
</div>
</div>

  </div>


</template>
<style scoped>

h1 {
color: #D0003E;
text-align: center;
margin-top: 25px;
font-size: 28px;
}
.description p {
  text-align: justify;
}
.banner img {
   
    width: 100%;
    height: auto;
    max-width: 100%; 
    max-height: 250px;
    display: block; 
}
   

.container {
  display: flex; 
}

.description {
  flex: 1; 
}
.logoproject img {
  width: 180px; 
  margin-top: 25px; 
  margin-right: 15px; 
  margin-left: 55px ;
  height: 210px;
}
.information h2 {
  font-size: 25px;
}

.information p {
  text-align: justify;
}
.information .more-information {
  margin-left: 550px;
  background-color: #D0003E;
  color: white;
  border-radius: 10%;
  border: 2px solid white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-align: justify;
  
}

.information .popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 2px solid white;
}

.information td {
padding: 15px;
}



  

</style>