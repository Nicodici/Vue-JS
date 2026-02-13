import HomePage from 'src/pages/HomePage.vue'
import ListPostPage from 'src/pages/ListPostPage.vue'
import LoginPage from 'src/pages/LoginPage.vue'
import MainLayout from 'src/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: HomePage, meta: { requireAuth: false } },
      { path: '/post', name: 'post', component: ListPostPage, meta: { requireAuth: false } },
      { path: '/login', name: 'login', component: LoginPage,  meta: { requireAuth: false },
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
