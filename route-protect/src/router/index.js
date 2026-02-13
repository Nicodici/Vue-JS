import DashboardView from '@/views/DashboardView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      //Con los meta podemos agregar informacion extra a las rutas.
      //En este caso, le decimos que esta ruta no requiere autenticacion.
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      role: 'admin', //Agregamos un campo de role para indicar que esta ruta solo puede ser accedida por usuarios con el rol de admin.
      component: DashboardView,
      //Esta ruta requiere autenticacion.
      meta: {
        requireAuth: true,
      },
    },
  ],
})

//Ejecutamos el guarda de rutas, lo que significa que antes de entrar a cualquier ruta se ejecuta esta funcion.
//To: objeto de la ruta a la que se quiere ir
//From: objeto de la ruta desde la que se viene
//Next: funcion que permite continuar a la ruta a la que se quiere ir.
router.beforeEach((to, from, next) => {
  //Comprobamos en el store (pinia) si el usuario esta autenticado.

  //Firebase Auth
  const auth = false //Aqui deberia ir la logica para comprobar si el usuario esta autenticado o no.

  //En el caso de localStorage
  /*
    const auth = localStorage.getItem('auth') === 'true'
    */

  //En el caso de firebase Auth, se podria usar un composable para obtener el estado de autenticacion del usuario, y luego usar ese estado en el guarda de rutas.
  /*
    import { useAuth } from '@/composables/useAuth'

    const { isAuthenticated } = useAuth()

    const auth = isAuthenticated.value
    */

  
  const needAuthorization = to.meta.requireAuth

  //Si la ruta a la que se quiere ir requiere autenticacion y el usuario no esta autenticado, redirigimos al login.
  if (needAuthorization && !auth) {
    next({ name: 'login' })
    console.log("Error de autenticación, redirigido al login")
  } else {
    //Si no, continuamos a la ruta.
    next()
  }

  //En el caso de sessionStorage
  /*
    const auth = sessionStorage.getItem('auth') === 'true'

    if (needAuthorization && !auth) {
      next({ name: 'login' })
    } else {
      next()
    }
    */
})

export default router
