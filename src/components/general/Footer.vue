<script setup>

</script>

<template>
    <div id="footerContainer">
        <img class="gijonLogo" src="../../assets/icons/gijon.png">
        <div class="footerIcons">
            <img src="../../assets/icons/instagram-1-svgrepo-com.svg">
            <img src="../../assets/icons/youtube-color-svgrepo-com.svg">
            <img src="../../assets/icons/apple-color-svgrepo-com.svg">
            <img src="../../assets/icons/android-color-svgrepo-com.svg">
            <img src="../../assets/icons/mail-filled-svgrepo-com.svg">
        </div>
    </div>
</template>

<style lang="scss">

// Mobile
#footerContainer {
    background-color: $black;
    padding: 1em;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; 

    .gijonLogo {
        width: 5em; 
        margin-right: 2em; 
        padding: 0.5em;
    }

    .footerIcons {
        margin-left: 3em; 
        display: flex; 
        justify-content: space-around; 

        img {
            width: 2em; 
            padding: 0.5em;
        }
    }
}

// Tablet
@media only screen and (min-width: 768px) {
    #footerContainer {
        .gijonLogo {
            width: 5em;
        }

        .footerIcons {
            width: 20em;
            margin-left: 4em;
        }
    }
}

// Desktop
@media only screen and (min-width : 992px) {
    #footerContainer {
        .gijonLogo {
            width: 6em;
        }

        .footerIcons {
            width: 15em;
            margin-left: 10em;
        }
    }
}
</style>