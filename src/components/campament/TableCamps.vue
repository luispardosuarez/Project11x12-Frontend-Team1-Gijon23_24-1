<script setup>
import { useCampStore } from '@/stores/campStore';
import { onMounted, ref, watch } from 'vue';
import PopUpEditCamp from './PopUpEditCamp.vue';
const store = useCampStore();
const campsList = ref([]);


const selectedCamp = ref(null); const editCamp = (camp) => {
 console.log('Intentando editar campamento:', camp);
 selectedCamp.value = camp; 
 showPopup.value = true; 
};


watch(
 () => store.campsList,
 (newCampsList) => {
    console.log('store.campsList actualizado:', newCampsList); 
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
          <img src="../../assets/icons/edit.svg" alt="editar" @click="editCamp(camp)">
        </td>
      </tr>
      <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
    </table>
    <div v-if="showPopup" class="popup">
    <PopUpEditCamp :camp="selectedCamp" :showModal="showPopup" v-if="showPopup" />
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
