import { defineStore } from "pinia";
import axios from "axios";

export const useCampStore = defineStore("camp", {
  state: () => ({
    camps: [],
    isLoading: false,
    selectedCamp: null,
  }),
  actions: {
    async getCamps() {
      try {
        this.isLoading = true;
        const uri = import.meta.env.VITE_API_ENDPOINT_CAMPS;
        const response = await axios.get(uri);
        this.camps = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Error loading camps:", error);
        throw new Error("Error Loading API: " + error);
      }
    },
    async getCampById(id) {
      try {
        this.isLoading = true;
        const uri = `${import.meta.env.VITE_API_ENDPOINT_CAMPS}/${id}`;
        const response = await axios.get(uri);
        this.selectedCamp = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Error loading camp:", error);
        throw new Error("Error Loading Camp: " + error);
      }
    },
  },
});