import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Archivo encargado de inicializar la aplicación Vue y montar el enrutador
createApp(App).use(router).mount('#app')
