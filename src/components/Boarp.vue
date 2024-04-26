<template>
    <div class="container_admin">
        <div class="container_btn">
            <router-link class="btn" to="/admin">Becados</router-link>
            <router-link class="btn" to="/camp">Campamentos</router-link>
            <!-- <router-link class="btn" to="/camp">Inscriptos</router-link> -->
            <!-- <div class="btn">Inscritos</div> -->
        </div>
        <div class="image"><img src="../assets/img/11x12.jpg" alt="11x12"></div>
    </div>
</template>
<style scoped lang="scss">
h1 {
    text-align: left;
    font-size: 25px;
    padding: 25px 50px 0;
}

.container_admin {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: $gray-form;
    overflow: hidden;        

        .container_btn {
            display: flex;
            flex-direction: column;
            gap: 2em;
            padding: 30% 5%;
        }

        .btn {
            background-color: #D0003E;
            color: white;
            padding: 4px;
            cursor: pointer;
            text-align: center;
            border-radius: 0;
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
