import AddCampService from '@/components/services/AddCampService';
import { defineStore } from 'pinia';

export const useAddCampStore = defineStore({
 id: 'image',
 state: () => ({
    images: [],
    selectedImage: null,
    // Otros estados y mutaciones relacionados con image
 }),
 actions: {
    async uploadImage(campId, formData) {
      try {
        await AddCampService.uploadImage(campId, formData); // Asegúrate de que el método exista en AddCampService
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al subir las imágenes:", error);
      }
    },
    async updateImage(campId, imageId, formData) {
      try {
        await AddCampService.updateImage(campId, imageId, formData);
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al actualizar la imagen:", error);
      }
    },
    async getImage(campId, imageId) {
      try {
        const image = await AddCampService.getImage(campId, imageId);
        // Manejar la imagen si es necesario
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
      }
    },
    async deleteImage(campId, imageId) {
      try {
        await AddCampService.deleteImage(campId, imageId);
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al borrar la imagen:", error);
      }
    },
    // Otras acciones relacionadas con image
  }
});