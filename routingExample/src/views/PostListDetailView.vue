<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Botón de regreso -->
        <button @click="$router.push({ name: 'Post' })" class="btn btn-secondary mb-4">
          <i class="bi bi-arrow-left"></i> Volver a Posts
        </button>

        <!-- Loader -->
        <div v-if="!post" class="text-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
          <p class="mt-3 text-muted">Cargando post...</p>
        </div>

        <!-- Contenido del Post -->
        <div v-else class="card shadow-sm"> 
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Post #{{ post.id }}</h5>
          </div>
          <div class="card-body">
            <h2 class="card-title text-capitalize mb-4">{{ post.title }}</h2>
            <p class="card-text lead">{{ post.body }}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import PostService from "../services/services.js";

const route = useRoute();
const post = ref(null);
const service = new PostService();

onMounted(async () => {
  // Primero cargamos los posts si no están cargados
  console.log("ID del post:", route.params.id);
  
  // Si los posts no están cargados, los cargamos primero
//   if (service.posts.value.length === 0) {
//     await service.fetchPosts();
//   }
  
  // Ahora buscamos el post por ID
//   post.value = service.getPostById(route.params.id);
//   console.log("Post encontrado:", post.value);

    const response = await service.fetchPostById(route.params.id);
    post.value = response;
    console.log("Post encontrado:", post.value);


});
</script>

<style scoped lang="scss">
@use "sass:color";

</style>
