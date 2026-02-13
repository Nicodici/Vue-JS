<template>
  <div>
    <input v-model="authStore.user" placeholder="Username" />
    <input v-model="authStore.password" placeholder="Password" type="password" />
    <button @click="authStore.login">Enviar</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
</script>

<style scoped></style>
