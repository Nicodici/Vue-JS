<template>
  <div>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Post' }">Posts</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss"></style>
