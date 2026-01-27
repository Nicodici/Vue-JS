<template>
  <div class="postContainer">
    <h1>Posts List</h1>
    <ul>
      <li v-for="post in posts" :key="post.id" @click="$router.push(`/post/${post.id}`)">
        <h3>{{ post.id }}</h3>
        <p>{{ post.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
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
  border: 1px solid rgb(48, 48, 48);
  //Con el uso de SCSS podemos anidar estilos. Ahora todos los li dentro de ul van a tener estos estilos.
  li {
    margin: 5px;
    border: 1px solid #868686;
    border-radius: 5px;
    min-width: 300px;
    max-width: 300px;
    color: $blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(224, 224, 224);
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
h1 {
  color: $dark-gray;
}
h3 {
  color: $orange;
  text-align: center;
}
</style>
