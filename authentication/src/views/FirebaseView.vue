<template>
  <div class="container d-flex flex-column align-items-center mt-5">
    <h1>Firebase Authentication View</h1>
    <h3>Login</h3>
    <div class="container-fluid w-50 p-3 border bg-light mt-5">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
          <div id="emailHelp" class="form-text">
            Nunca debes compartir tu correo electrónico con nadie más.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Recuérdame</label>
        </div>
        <button @click.prevent="authUser" type="submit" class="btn btn-primary">Enviar</button>
      </form>
      <!-- Verificación de las variables reactivas -->
      <!-- <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p> -->
    </div>
    <div v-if="loginOk" class="logged">El usuario se loguió correctamente</div>
    <div v-if="loginOk == false" class="notLogged">Credenciales invalidas</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//Importamos las funciones necesarias de Firebase para la autenticación
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
let email = ref('')
let password = ref('')
let loginOk = ref(null)
//Creamos una funcion para autenticar al usuario con Firebase, utilizando las variables reactivas email y password que se actualizan con el v-model de los inputs del formulario. Esta función se ejecutará al hacer click en el botón de enviar, y evitará el comportamiento por defecto del formulario con @click.prevent.
const authUser = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('Usuario autenticado correctamente')
      loginOk.value = true
    })
    .catch((error) => {
      console.log('Error al autenticar al usuario:', error)
      loginOk.value = false
    })
}
</script>

<style scoped>
.notLogged {
  color: red;
}
.logged {
  color: green;
}
</style>
