import  ServicePage  from 'pages/ServicesPage.vue'
import  ContactPage  from 'pages/ContactPage.vue'
import IndexPage from 'pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: IndexPage },
      { path: '/services', name: 'Services', component: ServicePage },
      { path: '/contact', name: 'Contact', component: ContactPage },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
