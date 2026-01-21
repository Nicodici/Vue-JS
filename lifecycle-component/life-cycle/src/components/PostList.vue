<template>
  <div class="postContainer">
    <!-- En la etiqueta puedo crear las props, en este caso se crea "Title" y "Content". Esa es la forma de pasar datos a un componente hijo -->
    <PostDetailconSetup
      v-for="elm in info"
      :key="elm.title"
      :title="elm.title"
      :content="elm.content"
      @sayHi="showAlert"
    />
  </div>
</template>

<script setup>
import PostDetail from "./PostDetail.vue";
import PostDetailconSetup from "./PostDetailconSetup.vue";
let info = [
  { title: "Post 1", content: "Contenido 1" },
  { title: "Post 2", content: "Contenido 2" },
  { title: "Post 3", content: "Contenido 3" },
  { title: "Post 4", content: "Contenido 4" },
  { title: "Post 5", content: "Contenido 5" },
];
function showAlert(msg) {
  alert(msg);
}
</script>

<style scoped>
.postContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
