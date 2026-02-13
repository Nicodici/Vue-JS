<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <RouterLink :to="{ name: 'home' }" class="text-white q-mr-md las la-home no-underline"
          >Home</RouterLink
        >
        <RouterLink
          :to="{ name: 'login' }"
          class="text-white q-mr-md las la-sign-in-alt no-underline"
          >Login</RouterLink
        >
        <RouterLink :to="{ name: 'post' }" class="text-white las la-list no-underline"
          >Posts</RouterLink
        >
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
