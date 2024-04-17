import axios from "axios";
const API_URL = import.meta.env.VITE_API_ENDPOINT_CAMPS; 

const CampService = {
  async createCamp(data) {
    try {
      const response = await axios.post(`${API_URL}/camps`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear el campamento:", error);
      throw error;
    }
  },

  async uploadImages(campId, formData) {
    try {
      await axios.post(`${API_URL}/images/uploadImages/${campId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log("Imágenes subidas exitosamente.");
    } catch (error) {
      console.error("Error al subir las imágenes:", error);
      throw error;
    }
  },

  async deleteCamp(campId) {
    try {
      await axios.delete(`${API_URL}/camps/${campId}`);
      console.log("Campamento borrado exitosamente.");
    } catch (error) {
      console.error("Error al borrar el campamento:", error);
      throw error;
    }
  },
};

export default CampService;
