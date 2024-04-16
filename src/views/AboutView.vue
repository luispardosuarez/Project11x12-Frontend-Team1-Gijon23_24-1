<script setup>
import BecadosForm from "@/components/Becados/BecadosForm.vue";
import Combo_About from "@/components/Combo_About.vue";

</script>
<template>
  <div class="BecadosFormContainer">
    <BecadosForm />
    <div>
      <Combo_About />
    </div>
  </div>

</template>

<style scoped lang="scss">
.BecadosFormContainer {
  width: 80%;
}
</style>
