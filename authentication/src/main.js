import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//Importamos las librerias de firebase
import { initializeApp } from "firebase/app";

//Objeto de Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDscf1_gyrn-4PJiHnHoXbII8HGDS7xyqs",
  authDomain: "curso-vue-a1f87.firebaseapp.com",
  projectId: "curso-vue-a1f87",
  storageBucket: "curso-vue-a1f87.firebasestorage.app",
  messagingSenderId: "578701682305",
  appId: "1:578701682305:web:4b37b05967ee174fafcf80",
  measurementId: "G-ZN8S45Y9WQ"
};

//Inicializamos Firebase con el objeto de configuración
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
