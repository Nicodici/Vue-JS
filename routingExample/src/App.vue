<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
nav {
  padding: 12px;
  background: #f5f5f5;
}
nav a {
  margin-right: 8px;
}
main {
  padding: 12px;
}
</style>
