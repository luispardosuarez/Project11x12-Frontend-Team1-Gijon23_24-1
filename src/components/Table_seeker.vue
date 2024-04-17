<script setup>

</script>

<template>

    <div class="contain">
        <div class="center">
            <div class="temp_box">
                <input type="text" id="dni_pas" placeholder="Buscar DNI">
                <label>🔍</label>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.contain {
    .center {
        display: grid;

        .temp_box {
            display: flex;
            align-items: center;
            position: relative;
           
        }

        .temp_box label {
            position: absolute;
            left: 200px;
            filter: grayscale(1);
        }

        input {
            width: 230px;
            padding: 5px 5px;
            outline: none;
            border: none;
            color: $black;
            border: .6px $red solid;
        }
    }
}
</style>