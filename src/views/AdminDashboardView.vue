<script setup>
import VistaAdminBeca from '@/components/AdminDashboard/VistaAdminBeca.vue';
import BecadosForm from '@/components/Becados/BecadosForm.vue';
import Boarp from '@/components/Boarp.vue';
import Table_seeker from '@/components/Table_seeker.vue';

// import Table_Admi from '@/components/Table_Admi.vue';

</script>

<template>

  <main>
    <div class="admin_cont">

      <div class="admin_init">
        <h1>¡Hola, Admin!</h1>
        <Table_seeker />
      </div>

      <div class="cont_global">
        <div class="bar_lateral">
          <Boarp />
        </div>

        <div class="table_cont_body">
            <!-- <Table_Admi /> -->
          <VistaAdminBeca /> 
            <BecadosForm />
  

        </div>

      </div>
    </div>

    <!-- admin@gijon11x12.com // AdminGijon11x12 -->

  </main>

</template>

<style lang="scss" scoped>
.admin_cont {
  padding: 2% 3%;

  .admin_init {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
  }

  .cont_global {
    display: flex;
    justify-content: space-between;

    .bar_lateral {
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
