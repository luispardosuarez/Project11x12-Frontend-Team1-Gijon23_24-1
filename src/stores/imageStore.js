
import { defineStore } from 'pinia';

export const useImageStore = defineStore({
 id: 'imageStore',
 state: () => ({
    images: [], 
 }),
 actions: {
    addImage(base64Image) {
      this.images.push(base64Image);
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    clearImages() {
      this.images = [];
    },
 },
});