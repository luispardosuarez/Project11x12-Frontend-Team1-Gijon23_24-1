import { defineStore } from "pinia";

export const useSelectedParticipant = defineStore({
    id: 'participant',
    state:() => ({
        selectedParticipant: null,
    }),

    actions: {
        setSelectedParticipant(participant) {
            this.selectedParticipant = participant;
        },
    },
});