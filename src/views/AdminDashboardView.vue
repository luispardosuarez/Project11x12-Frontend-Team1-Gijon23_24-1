<script setup>
import BecadosForm from '@/components/Becados/BecadosForm.vue';
import Boarp from '@/components/Boarp.vue';
import Table_Admi from '@/components/Table_Admi.vue';
</script>

<template>

  <main>
    <div class="admin_cont">

      <div>
        <h1>¡Hola, Admin!</h1>
      </div>

      <div class="cont_global">
        <div class="bar_lateral">
          <Boarp />
        </div>

        <div class="table_cont_body">
            <Table_Admi />
            <BecadosForm />
        </div>
      </div>
    </div>



  </main>

</template>

<style lang="scss" scoped>
.admin_cont {
  padding: 2% 3%;
  h1 {
    margin-bottom: 2%;
  }

  .cont_global {
    display: flex;
    justify-content: space-between;

    .bar_lateral{
      width: 23%;
    }

    .table_cont_body {
      width: 75%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1em;
    }
  }


}
</style>