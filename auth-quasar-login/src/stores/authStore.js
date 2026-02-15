import { defineStore, acceptHMRUpdate } from 'pinia'
import {ref} from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)
  
  return { user, isAuthenticated }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
