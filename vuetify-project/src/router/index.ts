/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/index.vue";
import Gridpage from "@/pages/Gridpage.vue";
import Controlpage from "@/pages/Controlpage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/grid",
      name: "grid",
      component: Gridpage,
    },
    {
      path: "/control",
      name: "control",
      component: Controlpage,
    },
  ],
});

export default router;
