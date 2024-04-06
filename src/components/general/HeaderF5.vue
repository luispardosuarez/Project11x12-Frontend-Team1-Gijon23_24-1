
<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);

</script>

<template>

<header class="wrapper">
    <div id="headerContainer2"> 
        <a href="https://factoriaf5.org/" target="_blank">
            <img class="logof5" src="../../assets/icons/logof5.png" alt="factoria f5">
        </a>
        <p>Actualmente está navegando en una aplicación para un proyecto pedagógico de la escuela Factoría F5. No se trata de una página oficial, no efectuar ninguna manipulación con datos personales ni datos de pago</p>    
    </div>
</header>

</template>


<style lang="scss">

.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

#headerContainer2 {
    color: #FF4702;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    border: 2px solid #FF4702;   
    border-radius: 10px; 

        .logof5 {
        padding: 10px;
        margin-bottom: 30px; 
        }

        p {
            margin: 20px;
        }    
}

@media only screen and (min-width: 768px){
    #headerContainer2 {
        flex-direction: row;
        justify-content: space-between; 
        align-items: center; 

            p {
                margin: 20px;
            } 
            .logof5 {
                margin-right: 20px;
            }
                
    }
}

@media only screen and (min-width : 992px){        
  
}

</style>