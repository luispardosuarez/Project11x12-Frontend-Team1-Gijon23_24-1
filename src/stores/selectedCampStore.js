import { reactive } from "vue";

const state = reactive({
    selectedCamp: ''
});

const mutations = {
    setSelectedCamp(campamentoName){
        state.selectedCamp = campamentoName;
    }
};

export default {
    state,
    mutations
};