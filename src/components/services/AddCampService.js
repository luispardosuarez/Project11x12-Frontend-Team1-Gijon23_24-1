import axios from 'axios';

const API_URL = import.meta.env.VITE_API_ENDPOINT_CAMPS; 

const addCamp = async (campData) => {
 try {
    const response = await axios.post(API_URL, campData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
 } catch (error) {
    console.error('Error adding camp:', error);
    throw error;
 }
};

export default {
 addCamp,
};