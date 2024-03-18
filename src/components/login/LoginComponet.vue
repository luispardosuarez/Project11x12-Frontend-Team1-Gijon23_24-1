<script setup>




const goToRegister = () => {
  console.log('clicked');
  router.push('/')
}



</script>


<template>
    <div class="container">
        <div class="image"><img src="../../assets/imageLogin/11x12.png" alt=""></div>

        <h2>INICIAR SESIÓN</h2>

        <form @submit.prevent="handleLogin">
            <div class="inputs">
        
                <input type="text" id="username" placeholder="Usuario" >
            </div>
            <div class="inputs">
            
                <input type="password" id="password" placeholder="Contraseña" required>
            </div>
            
        </form>

        <p class="paragraph">¿No tienes cuenta? <a href="#" @click.prevent="goToRegister">Regístrate</a></p>

        <button type="submit"><a href="#" class="mi-clase" @click="enviar" >Entrar</a></button>
    </div>
</template>

<style scoped>

img{
    width: 30%;
    height: 40%;
    justify-content: center;
    margin-left: 35%;

}

h2{
        color: white;
        margin-left: 41%;
        margin-bottom: 3%;
    }

.inputs{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    
    
}

input{
    width: 30%;
    height: 6vh;
}

p{
    color: white;
    margin-left: 35%;
}

a{
    
    text-decoration: none; 
    color: white;
}

button{
    margin-left: 41%;
    width: 20%;
    height: 6vh;
    margin-top: 10px;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #009eb393;
}

.mi-clase{
    color:black;
    
}

@media (max-width: 768px) {
    img{
        width: 50%;
        height: auto;
        margin-left: 25%;
    }

    h2{
        margin-left: 25%;
    }

    .inputs{
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 80%;
    }

    p{
        margin-left: 25%;
    }

    button{
        width: 60%;
        margin-left: 20%;
    }
}




</style>