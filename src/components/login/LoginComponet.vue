<script setup>


</script>

<template>

    <div class="container">
        <img src="../../assets/imageLogin/11x12.png" alt="" style="display: block; margin: 0 auto; width: 40%;">
        <div class="card-header text-center no-border-bottom">
                <h2 class="text-white">Iniciar Sesión</h2>
            </div>

<div class="row justify-content-center">
    <div class="col-md-6">
        <div class="card">


            <div class="card-body">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="username" v-model="username"
                            placeholder="Usuario">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="password" v-model="password"
                            placeholder="Contraseña">
                    </div>
                    <div class="d-flex justify-content-center"><button type="submit" class="btn btn-primary">ENTRAR</button></div>
                    
                </form>
                <div class="mt-3">
                    <p class="text-white">¿No estás registrado? <a href="#" @click="register" class="text-white">Regístrate aquí</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</template>

<style scoped>
.card {
    background-color: transparent;
    border: none;


    .text-white {
        color:white;
        font-family: Arial, Helvetica, sans-serif;
    }


    a {
        text-decoration: none;
    }

}
</style>