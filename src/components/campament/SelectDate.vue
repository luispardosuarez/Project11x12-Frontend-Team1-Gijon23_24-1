<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref, watch } from 'vue';
import InputWeek from './InputWeek.vue';

const startDate = ref(null);
const endDate = ref(null);
const weeks = ref([]);

function weeksBetween(startDate, endDate) {
 const start = new Date(startDate);
 const end = new Date(endDate);

 // Adjust start to be the first Monday
 while (start.getDay() !== 1) {
    start.setDate(start.getDate() + 1);
 }

 // Adjust end to be the last Friday
 while (end.getDay() !== 5) {
    end.setDate(end.getDate() - 1);
 }

 // Calculate the number of weeks between the first Monday and the last Friday
 const diffInDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
 const numberOfWeeks = Math.floor(diffInDays / 7); // Divide by 7 to count only full weeks

 return numberOfWeeks;
}

watch([startDate, endDate], ([newStart, newEnd]) => {
 if (newStart && newEnd) {
    const numberOfWeeks = weeksBetween(newStart, newEnd);
    weeks.value = Array.from({ length: numberOfWeeks }, (_, i) => {
      const startWeek = new Date(newStart.getTime() + (i * 7 * 24 * 60 * 60 * 1000)); // Multiply by 7 to count only full weeks
      const endWeek = new Date(startWeek.getTime() + (4 * 24 * 60 * 60 * 1000)); // Add 4 days to get the Friday of that week
      return {
        start: startWeek,
        end: endWeek,
        selected: false // Initialize each week as not selected
      };
    });
 }
});
</script>

<template>
 <div class="date-pickers-container">
    <label>Fecha inicial:
      <VueDatePicker class="w-75" v-model="startDate"></VueDatePicker>
    </label>
    <label>Fecha final:
      <VueDatePicker class="w-75" v-model="endDate"></VueDatePicker>
    </label>
    <InputWeek :weeks="weeks" />
 </div>
</template>