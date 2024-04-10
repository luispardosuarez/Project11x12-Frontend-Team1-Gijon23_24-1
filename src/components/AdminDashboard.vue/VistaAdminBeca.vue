<script setup>
import { ref } from 'vue';

const dnis = ref(['12345678', '87654321', '23456789']);

const verDni = (index) => {
 console.log(`Ver DNI: ${dnis.value[index]}`);
};

const editarDni = (index) => {
 console.log(`Editar DNI: ${dnis.value[index]}`);
};

const borrarDni = (index) => {
 console.log(`Borrar DNI: ${dnis.value[index]}`);
};
</script>

<template>
    <div class="container">
       <div class="row justify-content-center">
         <div class="col-md-6">
          <table class="table" >
             <thead>
               <tr>
                 <th>Becados</th>
                
               </tr>
             </thead>
             <tbody>
               <tr v-for="(dni, index) in dnis" :key="index">
                 <td>{{ dni }}</td>
                 <td class="action-buttons">
                 
                   <button class="btn btn-primary" @click="verDni(index)">
                   
                    <img src="../../assets/icons/see.svg" alt="Ver" />
                   </button>
                   <button class="btn btn-warning" @click="editarDni(index)">
                    
                    <img src="../../assets/icons/edit.svg" alt="Editar" />
                   </button>
                   <button class="btn btn-danger" @click="borrarDni(index)">
                    
                    <img src="../../assets/icons/delete.svg" alt="Borrar" />
                   </button>
                 
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>
    </div>

 
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
   </template>


   <style scoped>

.container {
 margin-top: 20px;

}

.table {
border-collapse: collapse;
 width: 100%;

}

.action-buttons {
 display: flex;
 justify-content: flex-end;
 gap: 10px;
 border: none;
}

.table tbody tr {
 border: 2px solid red;
  
}

.btn {
 padding: 5px 10px;
 background-color: transparent;
 border: none; 
}
.btn-primary {
 background-color: transparent;
 padding: 5px 5px; 
}

.btn-warning {
 background-color: transparent;
 padding: 5px 5px; 
}

.btn-danger {
 background-color: transparent;
 padding: 5px 5px; 
}


.btn img {
 width: 20px;
 height: 20px;
}

.pagination {
 display: flex;
 padding-left: 0;
 margin: 20px 0;
 border-radius: 4px;
justify-content: center!important; 
}

.pagination > li {
 display: inline-flex;
}

.pagination > li > a,
.pagination > li > span {
 position: relative;
 float: left;
 padding: 6px 12px;
 margin-left: -1px;
 line-height: 1.42857143;
 color: #252525;
 text-decoration: none;
 background-color: #fff;
 border: 1px solid #ddd;
}

.pagination > li.active > a,
.pagination > li.active > span {
 background-color: #337ab7;
 border-color: #337ab7;
 color: #fff;
}

tr{

  margin-bottom: 15%;
}


</style>


   