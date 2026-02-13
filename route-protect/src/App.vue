<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        <RouterLink :to="{ name: 'dashboard' }">Dashboard</RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
li {
  display: flex;
  gap: 1rem;
}
</style>
