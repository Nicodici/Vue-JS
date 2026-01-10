<template>
  <!-- En caso de no cumplirse la condición, la etiqueta no se carga en el DOM -->
  <h1 v-if="age >= 18">Eres mayor de edad</h1>
  <h1 v-else-if="age < 18">Eres menor de edad</h1>

  <!-- Muestra la etiqueta si el nombre de la variable name es Nicolas, sino, le aplica display:none -->
  <h1 v-show="name == 'Nicolas'">Tu nombre es Nicolas</h1>
  <h1 v-show="name != 'Nicolas'">Tu nombre no es Nicolas</h1>
</template>
<script setup>
    let age = 17;
    let name = "Nicolas";
</script>

<style scoped></style>
