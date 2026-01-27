<template>
  <div class="postContainer mb-3">
    <h1>Posts List</h1>
    <ul>
      <li v-for="post in posts" :key="post.id" @click="$router.push({name: 'PostDetail', params: { id: post.id }})">
        <div class="  card-header bg-primary text-white w-100 d-flex justify-content-center align-items-center">
          <h3 class="mb-0 d-flex">{{ post.id }}</h3>
        </div>
        <p class="text-center">{{ post.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script >
import PostService from "../services/services.js";
import { defineComponent, onMounted } from "vue";

//OptionAPI: data();
//CompositionAPI: setup();

export default defineComponent({
  name: "PostList",
  setup() {
    //creamos una instancia del servicio
    const service = new PostService();
    const posts = service.getPosts();

    onMounted(async () => {
      const response = await service.fetchPosts();
      console.log(response);
    });

    // Retornamos lo que necesitamos en el template
    return {
      posts,
    };
  },
});
</script>

<style scoped lang="scss">
@use "sass:color";

.postContainer {
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $red;
}
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  //Con el uso de SCSS podemos anidar estilos. Ahora todos los li dentro de ul van a tener estos estilos.
  li {
    margin: 5px;
    border: 1px solid #868686;
    border-radius: 5px;
    min-width: 300px;
    max-width: 300px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(247, 247, 247);
      p{
        padding: 10px;
      }
  }
  li:hover {
    // usar color.adjust-color para modificar colores en SCSS
    background-color: color.adjust($dark-gray, $lightness: 50%);
    cursor: pointer;
  }
}
</style>
