<template>
  <q-table
    title="Listado de Rnas"
    :rows="rows"
    :columns="columns"
    row-key="id"
    bordered
    flat
  >
  </q-table>
</template>

<script setup>
import { ref } from 'vue';

// Definición de las columnas
const columns = ref([
  {
    name: 'name',
    field: 'name',
    required: true,
    label: 'Nombre de producto',
    align: 'left',
    sortable: true,
  },
  {
    name: 'price',
    field: 'price',
    required: true,
    label: 'Precio',
    align: 'left',
    sortable: true,
  },
  {
    name: 'description',
    field: 'description',
    required: true,
    label: 'Descripción',
    align: 'left',
    sortable: true,
  },
  {
    name: 'actions',
    field: 'actions',
    required: true,
    label: 'Acciones',
    align: 'left',
    sortable: false,
  },
]);

const rows = ref([
  { id: 1, name: 'Producto 1', price: '$10', description: 'Descripción 1', actions: 'Editar' },
  { id: 2, name: 'Producto 2', price: '$20', description: 'Descripción 2', actions: 'Editar' },
  { id: 3, name: 'Producto 3', price: '$30', description: 'Descripción 3', actions: 'Editar' },
]);
</script>

<style lang="css" scoped></style>
