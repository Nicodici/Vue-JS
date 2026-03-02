import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref(null)
    const password = ref(null)
    const router = useRouter()

    function login() {
      console.log('User: ', user.value)
      console.log('Password: ', password.value)
      router.push({ name: 'home' })
    }
    return {
      user,
      password,
      login,
    }
  },
  //Si queremos que el store sea persistente, es decir, que mantenga su estado incluso después de recargar la página, podemos agregar la opción `persist: true` en la configuración del store. Esto hará que el estado del store se guarde en el almacenamiento local del navegador (localStorage) y se recupere automáticamente cuando se vuelva a cargar la página.
  // {
  //   persist: true,
  // },
)
