import axios from "axios";
import { defineStore } from "pinia";

export const useSelectedCampStore = defineStore('selectedCamp',{
  
  state: () => ({
    selectedCampId: null,
    campDetails: null,
    fetchError: null, 
  }),
  actions: {
    saveCampId(id) {
      this.selectedCampId = id;
    },
    clearCampId() {
      this.selectedCampId = null;
      this.campDetails = null;
      this.fetchError = null; 
    },
    async fetchCampDetails(id) {
      console.log(id + "campamento seleccionado")
        try {
          const uri= import.meta.env.VITE_API_ENDPOINT_CAMPS
          const response = await axios.get(`${uri}/${id}`);
          if (response.status === 200) {
            const campData = await response.data;
            console.log(response)
            this.campDetails = campData;
            // if (campData.length > 0) {
              
              
            // } else {
            //   console.warn('No camp found with the given ID');
            // }
          }
        } catch (error) {
          this.fetchError = error;  
          console.error('Error al obtener detalles del campamento:', error);
        }
      }
  },
  
});

