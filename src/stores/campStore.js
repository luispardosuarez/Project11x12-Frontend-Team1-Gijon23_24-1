import AddCampService from "@/components/services/AddCampService";
import { defineStore } from 'pinia';
import { ref } from "vue";

export const useCampStore = defineStore('campsList', () => {
 const campsList = ref([]);

 const fetchCamps = async () => {
    const data = await AddCampService.getCamp(); // Asegúrate de que el método exista en AddCampService
    campsList.value = data;
 };

 const deleteCamp = async (id) => {
    await AddCampService.deleteCamp(id);
    campsList.value = camp.value.filter(camp => camp.id !== campId);
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
