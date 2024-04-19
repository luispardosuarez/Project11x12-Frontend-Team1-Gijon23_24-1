
import axios from 'axios';

export default class ImageService {
  uri= import.meta.env.VITE_API_ENDPOINT_IMAGES;
  async uploadImage(campId, formData) {
    try {
      await axios.post(`/api/images/${campId}`, formData, {
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
  }

  async updateImage(campId, imageId, formData) {
    try {
      await axios.put(`/api/images/${campId}/${imageId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log("Imagen actualizada exitosamente.");
    } catch (error) {
      console.error("Error al actualizar la imagen:", error);
      throw error;
    }
  }

  async getImage(campId, imageId) {
    try {
      const response = await axios.get(`/api/images/${campId}/${imageId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      throw error;
    }
  }

  async deleteImage(campId, imageId) {
    try {
      await axios.delete(`/api/images/${campId}/${imageId}`);
      console.log("Imagen borrada exitosamente.");
    } catch (error) {
      console.error("Error al borrar la imagen:", error);
      throw error;
    }
  }
};