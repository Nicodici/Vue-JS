<script setup>
import { useCounterStore } from '../stores/counter'
import { useAuthStore } from '../stores/auth'
const itemsStore = useCounterStore()
const authStore = useAuthStore()

const resetAll = () => {
  itemsStore.count = 0
  authStore.user = ''
  authStore.password = ''
}
//En caso de persistencia local, inicializamos el store para cargar los datos guardados en localStorage
itemsStore.init()
</script>

<template>
  <div>
    <h1>Bienvenido</h1>
    <p>Count: {{ itemsStore.count }}</p>

    <p>El doble (computed) es: {{ itemsStore.doubleCount }}</p>
    <button @click="itemsStore.increment">Incrementar</button>

    <p>Usuario: {{ authStore.user }}</p>
    <p>Contraseña: {{ authStore.password }}</p>
  </div>

  <div>
    <button @click="resetAll">Resetear estados</button>
  </div>
</template>
