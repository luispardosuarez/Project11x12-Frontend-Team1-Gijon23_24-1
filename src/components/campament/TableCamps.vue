<script setup>
import { useCampStore } from '@/stores/campStore';
import { onMounted, ref, watch } from 'vue';
import PopUpEditCamp from './PopUpEditCamp.vue';
const store = useCampStore();
const campsList = ref([]);


// En TableCamps
const selectedCamp = ref(null); // Añade esta línea para mantener el estado del campamento seleccionado

const editCamp = (camp) => {
 console.log('Intentando editar campamento:', camp);
 selectedCamp.value = camp; // Actualiza el estado del campamento seleccionado
 showPopup.value = true; // Abre el popup
};
// Observa los cambios en store.campsList y actualiza campsList.value en consecuencia
watch(
 () => store.campsList,
 (newCampsList) => {
    console.log('store.campsList actualizado:', newCampsList); // Log para ver el nuevo estado de campsList
    campsList.value = newCampsList;
 },
 { deep: true }
);

onMounted(async () => {
 console.log('Componente montado');
 await store.fetchCamps();
 console.log('CampsList después de fetch:', store.campsList);
});

const deleteCamp = async (id) => {
 console.log('Intentando borrar campamento con id:', id);
 const confirmation = window.confirm('¿Estás seguro de querer borrar este campamento?');
 if (confirmation) {
    await store.deleteCamp(id);
    console.log('Campamento borrado con éxito');
 }
};

const showPopup = ref(false);

</script>

<template>
  <div class="table_camps">
    <h4>Campamentos</h4>
    <table>
      <tr v-for="camp in campsList" :key="camp.id">
        <td>
          {{ camp.camp_name }}
          <img src="../../assets/icons/delete.svg" alt="borrar" @click="deleteCamp(camp.id)">
         <!-- En TableCamps -->
<img src="../../assets/icons/edit.svg" alt="editar" @click="editCamp(camp)">
        </td>
      </tr>
    </table>
    <div v-if="showPopup" class="popup">
  <!-- En TableCamps -->
<PopUpEditCamp :camp="selectedCamp" v-if="showPopup" />
      <button type="button" class="btn-close " aria-label="Close" @click="showPopup = false"></button>
    </div>
  </div>
</template>


<style scoped lang="scss">
.table_camps {
  height: auto;
  background-color: $gray-form;
  padding: 2% 2%;
  width: 100%;
  z-index: 100;

  h4 {
    font-weight: 650;
    font-family: Arial, Helvetica, sans-serif;
  }

  table {
    border: none;
    height: 90%;
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    gap: 15px;

    tr {
      height: 5vh;

      td {
        width: 1%;
        border: 1px solid $red;
        background-color: white;
        padding: 5px;
      }

      img {
        width: 30px;
        padding-left: 3px;
        float: right;
        display: flex;
        margin-right: 1.5%;
      }
    }
  }

  .pagination {
    display: flex;
    border-radius: 4px;
    padding-top: 15px;
    justify-content: center !important;
  }

  .pagination>li {
    display: inline-flex;
  }

  .pagination>li>a,
  .pagination>li>span {
    position: relative;
    padding: 6px 12px;
    line-height: 1.42857143;
    color: #252525;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .pagination>li.active>a,
  .pagination>li.active>span {
    background-color: red;
    border-color: red;
    color: #fff;
  }

}

.popup {
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $gray-form;

  border: 1px solid #ccc;
  z-index: 9999;

  button {
    margin-top: 10px;
  }

  .btn-close {
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: x-large;
    color: #ECE7E7;
    z-index: 9999;
  }
}
</style>
