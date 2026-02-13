import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useDataAuthStore = defineStore('auth', () =>{
    const user = ref(null)
    const password = ref(null)
    return {
        user,
        password
    }
})