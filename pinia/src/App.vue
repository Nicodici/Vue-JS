<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <router-link :to="{name: 'home'}">Home</router-link>
          <router-link :to="{name: 'auth'}">Auth</router-link>
        </nav>
      </div>
    </header>
  </div>
  <RouterView />
</template>

<style scoped>
</style>