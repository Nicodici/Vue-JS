<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-separator vertical color="grey-5" spaced />
        <q-toolbar-title> <router-link to="/">Quasar App </router-link> </q-toolbar-title>
        

        <q-separator vertical color="grey-5" spaced />
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import linksList from '../router/link-list.js'
import EssentialLink from 'components/EssentialLink.vue'

//Ahora que tenemos el array de links en un archivo aparte, podemos importarlo y usarlo para renderizar los EssentialLink dentro del q-drawer. De esta forma, si queremos agregar o modificar un link, solo tenemos que editar el archivo link-list.js sin necesidad de tocar el código del layout.
// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev',
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev',
//   },
//   {
//     title: 'Prueba',
//     caption: 'Prueba de template',
//     icon: 'thumb_up',
//     link: '/prueba',
//   },
// ]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss">
// Si quieres ser más específico solo para router-link:
.q-toolbar a {
  text-decoration: none;
  color: inherit;
}
</style>
