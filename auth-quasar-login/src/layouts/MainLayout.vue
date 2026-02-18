<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <RouterLink
          :to="{ name: 'home' }"
          class="text-white q-ml-md q-mr-xl no-underline"
          v-if="!useAuth.isAuthenticated"
          ><q-icon name="las la-home" class="q-mr-xs" size="sm" />Home</RouterLink
        >
        <RouterLink
          :to="{ name: 'login' }"
          class="text-white q-mr-xl no-underline"
          v-if="!useAuth.isAuthenticated"
          ><q-icon name="las la-sign-in-alt" class="q-mr-xs" size="sm" />Login</RouterLink
        >
        <RouterLink
          :to="{ name: 'newPost' }"
          class="text-white q-mr-xl no-underline"
          v-if="useAuth.isAuthenticated"
          ><q-icon name="las la-plus-square" class="q-mr-xs" size="sm" />Nuevo Post</RouterLink
        >
        <RouterLink
          :to="{ name: 'post' }"
          class="text-white q-mr-xl no-underline"
          v-if="useAuth.isAuthenticated"
          ><q-icon name="las la-list" class="q-mr-xs" size="sm" />Listado de Posts</RouterLink
        >
        <RouterLink
          :to="{ name: 'register' }"
          class="text-white q-mr-xl no-underline"
          v-if="!useAuth.isAuthenticated"
          ><q-icon name="las la-user-plus" class="q-mr-xs" size="sm" />Register</RouterLink
        >
        <RouterLink
          :to="{ name: 'profile' }"
          class="text-white q-mr-xl no-underline"
          v-if="useAuth.isAuthenticated"
          ><q-icon name="las la-user" class="q-mr-xs" size="sm" />Perfil</RouterLink
        >
        <q-space />
        <RouterLink
          v-if="useAuth.isAuthenticated"
          class="text-white q-mr-xl no-underline"
          @click.prevent="useAuth.logout"
          :to="{ name: 'login' }"
          ><q-icon name="las la-sign-out-alt" class="q-mr-xs" size="sm" />Cerrar Sesión</RouterLink
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
import { useAuthStore } from 'src/stores/authStore'

const useAuth = useAuthStore()
</script>
<style scoped>
a {
  text-decoration: none;
  font-size: 15px;
}
a:hover{
  text-decoration: underline;
}
</style>
