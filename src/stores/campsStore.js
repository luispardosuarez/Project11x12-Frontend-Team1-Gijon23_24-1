
import { ref, reactive, isShallow } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usecampsStore = defineStore("camp", () => {
  const camps = reactive([]);
  const isLoading = ref(false);
  const selectedCamp = ref(null);

  const getcamps = async () => {
    const uri = import.meta.env.VITE_API_ENDPOINT_CAMPS;
    try {
      isLoading.value = true;
      const response = await axios.get(`${uri}`);
      console.log(response);
      const data = await response.data;
      isLoading.value = false;
      camps.value = data;
      return data;
    } catch (error) {
      throw new Error("Error Loading API: " + error);
    }
  };


  const getCampById = async (id) => {
    const uri = `${import.meta.env.VITE_API_ENDPOINT_CAMPS}/${id}`;
    try {
      isLoading.value= true;
      const response = await axios.get(uri);
      console.log(response);
      const data = await response.data;
      isLoading.value = false;
      selectedCamp.value = data;
      return data;
    } catch (error) {
      throw new Error("Error Loading Camp: " + error);
    }
  };

  return { camps, getcamps, selectedCamp, getCampById };
});