const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'prueba', name: 'prueba', component: () => import('pages/PruebaTemplate.vue') },
      { path: 'newpage', name: 'newpage', component: () => import('pages/NewPage.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
