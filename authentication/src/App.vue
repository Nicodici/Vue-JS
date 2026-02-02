<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary d-flex justify-content-between">
    <div class="container-fluid">
      <div class="container-fluid d-flex">
        <ul class="d-flex align-content-center">
          <li class="d-flex">
            <a class="navbar-brand"><router-link :to="{ name: 'home' }">Home</router-link></a>
          </li>
          <li class="d-flex">
            <a class="navbar-brand"
              ><router-link :to="{ name: 'auth' }">Backend Auth</router-link></a
            >
          </li>
          <li class="d-flex">
            <a class="navbar-brand"
              ><router-link :to="{ name: 'firebase' }">Firebase Auth</router-link></a
            >
          </li>
        </ul>
      </div>
      <!-- <div class="d-flex" id="navbarSupportedContent">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div> -->
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
ul {
  padding: 0;
  display: flex;
  margin: 0;
}
li {
  margin-right: 15px;
  list-style: none;
  cursor: pointer;
}
li:hover {
  text-decoration: underline;
  color:white;
}
a {
  text-decoration: none;
  color: rgb(230, 230, 230);
}
a:hover {
  color: rgb(255, 255, 255);
}
</style>
