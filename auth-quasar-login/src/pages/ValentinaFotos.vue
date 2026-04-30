<template>
  <q-img
    v-for="value in arr"
    :key="value"
    :src="`https://imetf.s3.amazonaws.com/Imagenes/8113/35988/Catalogos/39262/DSC0${value}.JPG`"
  ></q-img>
  <!-- 2278 hasta el 2499 -->
</template>

<script setup>
const start = 2278

const end = 2499
// Crear un array con los números del 2278 al 2499
const arr = Array.from({ length: end - start + 1 }, (_, i) => start + i)
</script>

<style scoped></style>
