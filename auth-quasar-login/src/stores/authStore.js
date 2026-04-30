import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const router = useRouter()
    const q = useQuasar()
    const auth = getAuth()
    const uidUser = ref(null)
    const user = ref(null)
    const isAuthenticated = ref(false)

    // Función para obtener el usuario logueado desde Firebase
    const fetchLoggedInUser = () => {
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          user.value = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
          }
          uidUser.value = firebaseUser.uid
          isAuthenticated.value = true
        } else {
          user.value = null
          uidUser.value = null
          isAuthenticated.value = false
        }
      })
    }

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

    return { user, isAuthenticated, uidUser, logout, fetchLoggedInUser }
  },
  {
    persist: {
      key: 'auth',
      storage: localStorage,
      pick: ['uidUser', 'isAuthenticated'],
    },
  },
)

if (import.meta.hot) {
  acceptHMRUpdate(useAuthStore, import.meta.hot)
}