<template>
    <div class="container_admin">
        <h1>¡Hola, Admin!</h1>
        <div class="container_global">
            <div class="container_btn">
                <div class="btn">Becados</div>
                <div class="btn">Campamentos</div>
                <div class="btn">Inscritos</div>
            </div>
            <div class="image"><img src="../assets/img/11x12.jpg" alt="11x12"></div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.container_admin {
    width: 100%;
    padding: 2em;
}

h1 {
    text-align: left;
    font-size: 25px;
    padding: 0 15px 13px;
}

.container_global {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #F0F0F0;
    background-color: $gray-form;
    width: 20vw;
    overflow: hidden;

    .container_btn {
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 50px 15px 60px 15px;
    }

    .btn {
        background-color: #D0003E;
        color: white;
        padding: 4px;
        cursor: pointer;
        text-align: center;
        border-radius: 0;
    }
}

.image {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
}

img {
    width: 100%;
}
</style>
