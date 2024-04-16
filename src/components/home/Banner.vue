<script setup>
</script>
<template>
    <div class="banner"> <img src="../../assets/img/kaleidoscopeBanner.jpg" alt="imagen de un kaleidoscopio" />
        <h1 class="title">Campamentos 11x12</h1>
    </div>
</template>
<style scoped
    lang="scss">
    .banner {
        position: relative;

        img {
            width: 100%;
            height: auto;
            max-width: 100%;
            max-height: 25rem;
            z-index: -1;
        }

        .title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            font-size: 3rem;
            z-index: 1;
        }
    }
</style>