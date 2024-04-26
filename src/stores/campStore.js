import AddCampService from "@/components/services/AddCampService";
import { defineStore } from 'pinia';
import { ref } from "vue";

export const useCampStore = defineStore('campsList', () => {
 const campsList = ref([]);

 const fetchCamps = async () => {
    const data = await AddCampService.getCamp(); 
    campsList.value = data;
 };


const deleteCamp = async (id) => {
   try {
     
      await AddCampService.deleteCamp(id);
      // Actualiza el estado global
      campsList.value = campsList.value.filter(camp => camp.id !== id);
      console.log('Campamento borrado con éxito');
   } catch (error) {
      console.error("Error al borrar el campamento:", error);
      throw error;
   }
  };



const editCamp = async (campId, data) => {
   try {
      const response = await AddCampService.editCamp(campId, data);
      // Manejar la respuesta
   } catch (error) {
      console.error("Error al editar el campamento:", error);
      throw error;
   }
  };
 return { campsList, fetchCamps, deleteCamp, editCamp };
});
