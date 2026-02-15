<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <RouterLink :to="{ name: 'home' }" class="text-white q-ml-md q-mr-xl las la-home no-underline"
          >Home</RouterLink
        >
        <RouterLink
          :to="{ name: 'login' }"
          class="text-white q-mr-xl las la-sign-in-alt no-underline"
          >Login</RouterLink
        >
        <RouterLink :to="{ name: 'post' }" class="text-white q-mr-xl las la-list no-underline"
          >Posts</RouterLink
        >
        <RouterLink :to="{ name: 'register' }" class="text-white q-mr-xl las la-user-plus no-underline "
          >Register</RouterLink
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
