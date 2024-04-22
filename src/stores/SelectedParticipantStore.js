import { defineStore } from "pinia";

export const useSelectedParticipantStore = defineStore({
    id: 'participant',
    state:() => ({
        selectedParticipants: [],
    }),

    actions: {
        addSelectedParticipant(participant) {
          this.selectedParticipants.push(participant);
        },
        clearSelectedParticipants() {
          this.selectedParticipants = [];
        }
     }
    });