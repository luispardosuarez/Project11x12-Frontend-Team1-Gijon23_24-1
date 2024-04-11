<script setup>

const emit = defineEmits(['goToPreviusStep']);

</script>
<template>
  <button class="btn_next" @click="emit('goToPreviusStep')">Atrás</button>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';

.btn_next {
    background-color: $red;
    color: white;
    font-family: Arial;
    width: 250px;
    border: none;
}
</style>