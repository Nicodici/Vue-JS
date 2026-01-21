<template>
  <ul>
    <!-- En caso de que no se repitan los elementos, podemos hacerlo de esta forma, sino debemos usar el index -->
    <h1>Listado sin index</h1>
    <li v-for="p in paises" v-bind="p">{{ p.name }}</li>
    <!-- Listado utilizando index y objetos-->
    <h1>Listado con index</h1>
     <li v-for="(country,code) in paises" :key="country.code">{{country.name}}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const paises = ref([
  {
    code: 'es',
    name:'Español'
  },
  {
    code: 'en',
    name: 'Ingles'
  },
  {
    code: 'au',
    name: 'Australia'
  }]);
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
