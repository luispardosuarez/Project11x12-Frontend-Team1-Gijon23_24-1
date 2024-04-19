
import { defineStore } from 'pinia';
import ImageService from '../components/services/ImageService';

export const useImageStore = defineStore({
  id: 'image',
  state: () => ({
    images: [],
    selectedImage: null,
    // Otros estados y mutaciones relacionados con image
  }),
  actions: {
    async uploadImage(campId, formData) {
      try {
        await ImageService.uploadImage(campId, formData);
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al subir las imágenes:", error);
      }
    },
    async updateImage(campId, imageId, formData) {
      try {
        await ImageService.updateImage(campId, imageId, formData);
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al actualizar la imagen:", error);
      }
    },
    async getImage(campId, imageId) {
      try {
        const image = await ImageService.getImage(campId, imageId);
        // Manejar la imagen si es necesario
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
      }
    },
    async deleteImage(campId, imageId) {
      try {
        await ImageService.deleteImage(campId, imageId);
        // Manejar la respuesta si es necesario
      } catch (error) {
        console.error("Error al borrar la imagen:", error);
      }
    },
    // Otras acciones relacionadas con image
  }
});