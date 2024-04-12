<script setup>


</script>
<template>
    <div class="checksComida">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    <h6>Desayuno</h6> <h7>(2,50€/dia)</h7>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    <h6>Merienda</h6> <h7>(1,50€/dia)</h7>
  </label>
</div>
<div class="alergias">
    <div class="lblAlergias">
        <label for="alergias">Alergias:</label>
    </div>
    <div class="areaAlergias">
        <textarea name="alergias" id="txtAlergias" cols="30" rows="2"></textarea>
    </div>
    
</div>
<div class="observaciones">
    <div class="lblObservaciones">
        <label for="alergias">Observaciones:</label>
    </div>
    <div class="areaObservaciones">
        <textarea name="observaciones" id="txtObservaciones" cols="40" rows="3"></textarea>
    </div> 
</div>
</div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';
.checksComida {
    display: flex;
    gap: 2%;
}

#txtAlergias, #txtObservaciones {
    border-color: $red;
}

@media only screen and (max-width: 768px) {
    .checksComida{
        margin-left: 2%;
        display: flex;
        flex-direction: column;
    }
    
}
</style>