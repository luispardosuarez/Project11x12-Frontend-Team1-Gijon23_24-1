<script setup>

</script>

<template>

    <div id="footerContainer">

        <img class="gijonLogo" src="../../assets/icons/gijon.png">

        <div class="footerIcons">

            <img src="../../assets/icons/xLogo.png">
            <img src="../../assets/icons/instagram-1-svgrepo-com.svg">
            <img src="../../assets/icons/youtube-color-svgrepo-com.svg">
            <img src="../../assets/icons/apple-color-svgrepo-com.svg">
            <img src="../../assets/icons/android-color-svgrepo-com.svg">
            <img src="../../assets/icons/mail-filled-svgrepo-com.svg">

        </div>
    </div>

</template>

<style lang="scss">

    #footerContainer {

        background-color: $black;
        padding: 10px;
        display: flex;
        justify-content: space-around;

        .gijonLogo {

            width: 16%;
            margin-right: 100px;
            padding: 5px;
            
        }

        .footerIcons {

            margin-left: 50px;

            img {
                width: 16%;
                padding: 5px;
            }
        }
    }

@media only screen and (min-width: 768px) {

    #footerContainer {

        

        .gijonLogo {
            width: 5%;
        }

        .footerIcons {
            width: 15%;
            padding: 5px;
            margin-left: 80rem;
        }
    }
}

</style>