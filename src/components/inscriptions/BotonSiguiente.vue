<script setup>

const emit = defineEmits(['goToNextStep']);

</script>
<template>
  <button class="btn_next" @click="emit('goToNextStep')">Siguiente</button>
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