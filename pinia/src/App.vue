<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="containerNavBar">
    <header>
      <div class="wrapper">
        <nav class="nav">
          <router-link :to="{name: 'home'}">Home</router-link>
          <router-link :to="{name: 'auth'}">Auth</router-link>
          <router-link :to="{name: 'notes'}">Notes</router-link>
        </nav>
      </div>
    </header>
  </div>
  <RouterView />
</template>

<style scoped>
  .containerNavBar{
    padding: 1rem;
    width: 100%;
    min-width: 1000px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
  }
.nav {
  display: flex;
  gap: 1rem;
}
</style>