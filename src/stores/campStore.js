import AddCampService from "@/components/services/AddCampService";
import { defineStore } from 'pinia';
import { ref } from "vue";

export const useCampStore = defineStore('campsList', () => {
 const campsList = ref([]);

 const fetchCamps = async () => {
    const data = await AddCampService.getCamp(); // Asegúrate de que el método exista en AddCampService
    campsList.value = data;
 };

 const deleteCamp = async (campId) => {
    await AddCampService.deleteCamp(campId);
    campsList.value = camps.value.filter(camp => camp.id !== campId);
 };

 const editCamp = async (camp) => {
    const updatedCamp = await AddCampService.editCamp(camp);
    const index = campsList.value.findIndex(c => c.id === camp.id);
    if (index !== -1) {
      campsList.value[index] = updatedCamp;
    }
 };

 return { campsList, fetchCamps, deleteCamp, editCamp };
});
