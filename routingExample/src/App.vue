<template>
  <div class="container-fluid">
    <div
      class="d-flex container-fluid flex-row divNavbar justify-content-space-around align-items-center justify-content-around"
    >
      <h1 class="text-center my-4 justify-content-center d-flex">
        Vue Router Example
      </h1>
      <nav class="navbar navbar-light h3 d-flex justify-content-center">
        <ul>
          <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'About' }">About</router-link></li>
          <li><router-link :to="{ name: 'Post' }">Posts</router-link></li>
        </ul>
      </nav>
    </div>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.divNavbar {
  background-color: #000000;
  h1 {
    color: white;
  }
  ul{
    width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    
  }
  li {
    display: flex;
    flex-direction: row;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
