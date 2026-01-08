<script setup></script>

<template>
  <button class="post-btn">Acceder</button>
</template>

<!-- scoped hace que los estilos se apliquen solamente a este componente -->
<style scoped>
.post-btn {
  color: white;
  padding: 10px;
  background-color: blue;
  border-radius: 5px;
  height: 50px;
  width: 100px;
}
.post-btn:hover{
    background-color: darkblue;
    cursor: pointer;
    border-radius: 10px;
}
</style>
