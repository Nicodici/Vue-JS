import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Archivo encargado de inicializar la aplicación Vue y montar el enrutador
createApp(App).use(router).mount('#app')
