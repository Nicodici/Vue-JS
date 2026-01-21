<template>
  <div class="postContainer">
    <h1>Posts List</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
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
.postContainer {
  width: 100%;
  margin: 10px;
  padding: 20px;
  border: 1px solid $red;
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
  width: 100%;
  justify-content: center;
  border: 1px solid rgb(48, 48, 48);
  padding: 10px;
  //Con el uso de SCSS podemos anidar estilos. Ahora todos los li dentro de ul van a tener estos estilos.
  li {
    margin: 5px;
    border: 1px solid #868686;
    border-radius: 5px;
    min-width: 300px;
    max-width: 300px;
    color: $blue;
  }
  li:hover {
    // usar color.adjust-color para modificar colores en SCSS
    background-color: color.adjust(rgb(121, 121, 121), $lightness: -40%);
  }
}
h1 {
  color: $orange;
}
h3 {
  color: $yellow;
}
</style>
