<script setup>

const emit = defineEmits(['goToPreviusStep']);

</script>
<template>
  <button class="btn_previus" @click="emit('goToPreviusStep')">Atrás</button>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';

.btn_previus {
    background-color: $red;
    color: white;
    font-family: Arial;
    width: 250px;
    border: none;
}

@media only screen and (max-width: 768px) {
  .btn_previus {
    width: 150px;
  }
}
</style>