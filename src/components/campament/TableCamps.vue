<script setup>
import { useCampStore } from '@/stores/campStore';
import { onMounted, ref, watch } from 'vue';

const store = useCampStore();
const campsList = ref([]);

// Observa los cambios en store.campsList y actualiza campsList.value en consecuencia
watch(
 () => store.campsList,
 (newCampsList) => {
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

const editCamp = (camp) => {
 console.log('Intentando editar campamento:', camp);
 store.editCamp(camp);
};
</script>

<template>
 <div class="table_camps">
    <h4>Campamentos</h4>
    <table>
      <tr v-for="camp in campsList" :key="camp.id">
        <td>
          {{ camp.camp_name }}
          <button @click="deleteCamp(camp.id)">Borrar</button>
          <button @click="editCamp(camp)">Editar</button>
        </td>
      </tr>
    </table>
 </div>
</template>


<style scoped lang="scss">
.table_camps {
  height: auto;
  background-color: $gray-form;
  padding: 2% 2%;

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
</style>










<!-- 
<script setup>
import { useCampStore } from "@/stores/campStore";
import { onMounted, ref } from "vue";
import PopUpEditCamp from "./PopUpEditCamp.vue";

const campStore = useCampStore();
const showEditCampPopup = ref(false);
const campToEdit = ref(null);
const campList =ref([]);

onMounted(() => {
  campStore.fetchCamps();
});

const fetchCamps = () => {
  campStore.fetchCamps();
};

const deleteCamp = (id) => {
  campStore.deleteCamp(id);
};

const editCamp = (camp) => {
  campToEdit.value = camp;
  showEditCampPopup.value = true;
};

const updateCamp = (camp) => {
  campStore.updateCamp(camp);
  showEditCampPopup.value = false;
};
</script>
<template>
  <div>
    <h4>Camps</h4>
    <table>
      <tr>
        <th>Camp Name</th>
        <th>Actions</th>
      </tr>
      <tr v-for="camp in campsList" :key="camp.id">
        <td>
          {{ camp.camp_name }}
          <img
            src="../../assets/icons/delete.svg"
            alt="delete icon"
            @click="deleteCamp(camp.id)"
          />
          <img
            src="../../assets/icons/edit.svg"
            alt="edit icon"
            @click="editCamp(camp)"
          />
        </td>
      </tr>
    </table>
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
    <PopUpEditCamp
      v-if="showEditCampPopup"
      :camp="campToEdit"
      @updateCamp="updateCamp"
      @close="showEditCampPopup = false"
    />
  </div>
</template>


<style scoped>
.table_camps {
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
  padding: 2% 2%;

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
        border: 1px solid #d9534f;
        background-color: white;
        padding: 20px;
      }
    }
  }


    .pagination {
 display: flex;
 /* padding-left: 0; */
/*  margin: 20px 0; */
 border-radius: 4px;
 padding-top: 15px;
justify-content: center!important;
}
.pagination > li {
 display: inline-flex;
}
.pagination > li > a,
.pagination > li > span {
 position: relative;
/*  float: left; */
 padding: 6px 12px;
 /* margin-left: -1px; */
 line-height: 1.42857143;
 color: #252525;
 text-decoration: none;
 background-color: #fff;
 border: 1px solid #ddd;
}
.pagination > li.active > a,
.pagination > li.active > span {
 background-color: red;
 border-color: red;
 color: #fff;
}
}
</style> -->