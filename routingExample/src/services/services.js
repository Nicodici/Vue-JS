import { ref } from "vue";

//Creamos una clase PostService que se encargara de manejar todo lo relacionado con los posts, Dentro de ella vamos a consumir a la api externa mediante una funcion asincrona
// tambien vamos a utilizar el sistema de reactividad de Vue para almacenar los posts obtenidos de la API, para que cualquier componente que utilice este servicio pueda reaccionar a los cambios en los datos de los posts.

class PostService {
  constructor() {
    //La clase va a tener una propiedad reactiva llamada posts, que sera un array vacio inicialmente
    this.posts = ref([]);
  }

  getPosts() {
    
    return this.posts;
  }

  getPostById(id) {
    //buscamos el post en el array de posts usando el id proporcionado
    return this.posts.value.find((post) => post.id === parseInt(id));
  }

  //metodo asincrono para obtener los posts de una API externa
  async fetchPosts() {
    //Siempre que trabajemos con async/await, es recomendable usar un bloque trycatch
    try {
      //solicitamos los datos a la API externa, recibimos una promesa
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //convertimos la respuesta a formato JSON
      const data = await response.json();
      //asignamos los datos obtenidos a la propiedad reactiva posts
      this.posts.value = data;
      return data;
    } catch (error) {
      console.log("error");
    }
  }
}

export default PostService;

//otra forma de exportar
// export const postService = PostService();


// Cada forma tiene un propósito diferente:

// 1. export default PostService; (línea 37 - actualmente activa)

// Exporta la clase en sí
// Cada vez que importes, debes crear una nueva instancia con new PostService()
// Cada componente puede tener su propia instancia independiente
// Útil si quieres múltiples servicios con estados separados
// 2. export const postService = new PostService(); (línea 40 - comentada)

// Exporta una instancia única (singleton)
// Todos los componentes comparten la misma instancia y el mismo estado
// No necesitas usar new al importar
// Útil cuando quieres compartir datos entre componentes

// Ejemplo de uso:

// Con export default PostService:
// import PostService from './services.js'
// const service = new PostService()  // Necesitas crear instancia

// // Con export const postService:
// import { postService } from './services.js'
// postService.fetchPosts()  // Ya está instanciado



// Para tu caso, como posts es una variable reactiva que probablemente quieras compartir entre componentes, la segunda forma (singleton) es mejor. Así todos los componentes verán los mismos datos actualizados.