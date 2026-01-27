// La funcion de la carpeta router es definir las rutas de la aplicación
// y exportar el enrutador para que pueda ser usado en main.js
// Aquí definimos dos rutas de ejemplo: Home y About
// Cada ruta está asociada a un componente Vue que se renderiza cuando se navega a esa ruta
// Usamos el alias '@' para referirnos a la carpeta src, facilitando las importaciones
// Finalmente, exportamos el enrutador para integrarlo en la aplicación principal

import { createRouter, createWebHistory } from "vue-router";

//Se importan los componentes que se usarán en las rutas
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import PostlistComponentsView from "@/views/PostlistComponentsView.vue";
import PostListDetailView from "@/views/PostListDetailView.vue";

// Creamos el enrutador con las rutas definidas
const routes = [
  
  // Redireccion de una URL hacia otra
  { path: '/', redirect: '/post' },

  // Primero se define la ruta, luego el nombre y el componente asociado(Debe coincidir con el nombre del archivo)
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/post", name: "Post", component: PostlistComponentsView },
  { path: "/post/:id", name: "PostDetail", component: PostListDetailView },
];

// Configuración del enrutador, es un objeto que Vue usará para manejar las rutas
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
