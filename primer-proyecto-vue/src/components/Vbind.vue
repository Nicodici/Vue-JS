<script setup>
import { ref } from 'vue';

// V-bind es una directiva que nos permite entrelazar atributos HTML con variables dinamicas
// Entrelazando una variable con v-bind
const myId = "idH1Vbind";
const myValue = ref("Hola Mundo");
</script>

<template>
  <div>
    <h1 :id="myId">V-bind</h1>
    <input  :value="myValue"></input>
    <p>El valor del input es: {{ myValue }}</p>
  </div>    
</template>
