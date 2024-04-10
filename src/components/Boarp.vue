<template>
    <h1>¡Hola, Admin!</h1>
    <div class="container_admin">
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
h1 {
    text-align: left;
    font-size: 25px;
    padding: 25px 50px 0;
}

.container_admin {
    display: flex;
    gap: 2em;
    width: 100%;
    padding: 1.5em;

    .container_global {
        width: 20vw;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background-color: $gray-form;
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

        object-fit: cover;
        object-position: center;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
