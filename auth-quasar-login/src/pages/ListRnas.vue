<template>
  <q-page>
    <div class="text-h3">Listado de RNAS</div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { fetchRnasList } from 'src/services/serviceRnas'

async function loadRnas() {
  try {
    const rnasList = await fetchRnasList()
    console.log('Lista de RNAs:', rnasList.data)
  } catch (error) {
    console.error('Error al cargar la lista de RNAs:', error)
  }
}

onMounted(() => {
  loadRnas();
});

</script>

<style lang="css"></style>
