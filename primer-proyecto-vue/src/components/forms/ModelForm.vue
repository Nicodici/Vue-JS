<template>
  <h1>Bindeo bidireccional con v-model</h1>
  <form>
    <input type="text" v-model="inputText" />
    <input type="checkbox" v-model="termsAccepted" /> Acepto los términos y
    condiciones
    <h2 class="textResult">{{ inputText }}</h2>

    <!-- // Mostrar mensaje dependiendo si se aceptaron o no los términos -->
    <!-- bindeamos la clase -->
    <h2 :class="{ h2TermsAccepted: termsAccepted }" v-if="termsAccepted">Términos aceptados</h2>
    <h2 :class="{ h2notAccepted: !termsAccepted }"  v-else="!termsAccepted">Términos no aceptados</h2>

    <select name="" id="" v-model="selectedCountry">
      <!-- En Vue, en caso de no tener value, se utiliza el contenido del option -->
      <option value="Argentina">Argentina</option>
      <option value="Francia">Francia</option>
      <option value="España">España</option>
    </select>

    <h2>País seleccionado: {{ selectedCountry }}</h2>
  </form>
</template>

<script setup>

import { ref } from "vue";

    let termsAccepted = ref(false);
    let inputText = ref("");
    let selectedCountry = ref("");
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
h1 {
  width: 100%;
  text-align: center;
}
.textResult{
  color: grey;
}
.h2notAccepted {
  color: rgb(255, 55, 55);
  text-align: center;
}
.h2TermsAccepted {
  color: green;
}
</style>
