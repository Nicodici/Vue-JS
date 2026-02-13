<script setup>
import { useCounterStore } from '../stores/counter';
import { useAuthStore } from '../stores/auth';
const itemsStore = useCounterStore();
const authStore = useAuthStore();


</script>

<template>
  <div>
    <h1>Bienvenido</h1>
    <p>Count: {{ itemsStore.count }}</p>
    
    <p>El doble (computed) es:  {{ itemsStore.doubleCount }}</p>
    <button @click="itemsStore.increment">Incrementar</button>

    <p>Usuario: {{ authStore.user }}</p>
    <p>Contraseña: {{ authStore.password }}</p>
  </div>
</template>
