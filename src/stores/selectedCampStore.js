import { defineStore } from "pinia";

export const useSelectedCampStore = defineStore({
  id: 'selectedCampStore',
  state: () => ({
    selectedCampId: null,
    campDetails: null,
    fetchError: null, // 
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
    async fetchCampDetails() {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_CAMPS}/${selectedCampId}`);
          if (response.status === 200) {
            const campData = response.data;
            if (campData.length > 0) {
              
              this.campDetails = campData[0];
            } else {
              console.warn('No camp found with the given ID');
            }
          } else {
          
          }
        } catch (error) {
          this.fetchError = error;
          console.error('Error al obtener detalles del campamento:', error);
        }
      }
  },
});

// import { defineStore } from "pinia";
// import axios from "axios";

// export const useSelectedCampsStore = defineStore("camps", {
//   state: () => ({
//     camps: [],
//   }),
//   actions: {
//     saveCampId(id) {
//       this.selectedCampId = id;
//     },
//     async fetchCamps(campId) {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_ENDPOINT_CAMPS}/${campId}`
//         );
//         this.camps = response.data;
//       } catch (error) {
//         console.error("Error fetching camps:", error);
//       }
//     },
//   },
// });
