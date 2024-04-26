const { default: axios } = require("axios");
const { useSelectedCampStore } = require("./selectedCampStore");

const selectedCampStore = useSelectedCampStore();

const fetchCampDetails = async (campId) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_CAMPS}/${campId}`);

        if (response.status === 200) {
            selectedCampStore.saveCampDetails(response.data);
        }
    } catch (error) {
        console.error('Errror al obtener detalles del campamento:', error);
    }
};

fetchCampDetails(campId);