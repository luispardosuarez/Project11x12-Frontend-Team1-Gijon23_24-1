import { defineStore } from "pinia";

export const useInscriptionStore = defineStore({
    id:'user',
    state: () => ({
        user: {},
        campamentoName: ''
    }),

    actions: {
        setUser(user) {
            this.user = user;
        },

        setCampamentoName(campamentoName){
            this.campamentoName = campamentoName;
        }
    }
});