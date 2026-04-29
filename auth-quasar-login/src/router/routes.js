import HomePage from 'src/pages/HomePage.vue'
import MainLayout from 'src/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: HomePage, meta: { requireAuth: false } },
      {
        path: '/post',
        name: 'post',
        component: () => import('src/pages/ListPostPage.vue'),
        meta: { requireAuth: true },
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('src/pages/LoginPage.vue'),
        meta: { requireAuth: false },
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('src/pages/RegisterPage.vue'),
        meta: { requireAuth: false },
      },
      {
        path: '/newPost',
        name: 'newPost',
        component: () => import('src/pages/NewPostPage.vue'),
        meta: { requireAuth: true },
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('src/pages/ProfileUserPage.vue'),
        meta: { requireAuth: true },
      },

      //La diferencia entre component por nombre y component por funcion es que el segundo hace que el componente se cargue solo cuando se accede a esa ruta, lo que mejora el rendimiento inicial de la aplicación al no cargar componentes innecesarios desde el principio.
      {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import('src/pages/PokemonPage.vue'),
        meta: { requireAuth: true },
      },
    ],
  },
  // Error 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
