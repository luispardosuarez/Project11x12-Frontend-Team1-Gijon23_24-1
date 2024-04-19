import CampService from "@/components/services/CampService";
import { defineStore } from 'pinia';
import { ref } from "vue";

export const useCampStore = defineStore('campsList', () => {
 const campsList = ref([]);
 const service = new CampService();

 const fetchCamps = async () => {
    const data = await service.getCamps();
    campsList.value = data;
 };

 const deleteCamp = async (campId) => {
    await service.deleteCamp(campId);
    campsList.value = camps.value.filter(camp => camp.id !== campId);
 };

 const editCamp = async (camp) => {
    const updatedCamp = await service.editCamp(camp);
    const index = camps.value.findIndex(c => c.id === camp.id);
    if (index !== -1) {
      campsList.value[index] = updatedCamp;
    }
 };

 return { campsList, fetchCamps, deleteCamp, editCamp };
});
