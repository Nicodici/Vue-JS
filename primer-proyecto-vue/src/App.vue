<script setup>
import Vbind from "./components/Vbind.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Variable from "./components/Variable.vue";
</script>
<template>
  <HeaderComponent></HeaderComponent>
  <!-- entrelazamos una variable con v-bind -->
  <Variable></Variable>
  <Vbind></Vbind>
</template>

<style></style>
