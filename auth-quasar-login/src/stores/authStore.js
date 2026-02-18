import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const q = useQuasar()
  const uidUser = ref(null)
  const user = ref(null)
  const isAuthenticated = ref(false)

  const logout = async () => {
    user.value = null
    isAuthenticated.value = false
    uidUser.value = null
    q.notify({
      type: 'positive',
      message: 'Sesión cerrada correctamente. Redirigiendo al login...',
      icon: 'las la-thumbs-up',
      position: 'top',
    })
    await router.push({ name: 'login' })
  }

  return { user, isAuthenticated, uidUser, logout }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
