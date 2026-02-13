import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const password = ref(null)
  
  function login() {
    console.log('User: ', user.value)
    console.log('Password: ', password.value)
  }
  return {
    user,
    password,
    login
  }
})
