
<template>
  <div class="container d-flex flex-column align-items-center mt-5">
    <h1>Authentication View</h1>
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
        <button @click="FormData" type="submit" class="btn btn-primary">Enviar</button>
      </form>
      <!-- Verificación de las variables reactivas -->
      <!-- <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p> -->
    </div>
  </div>
</template>

<script setup>
import AuthService from '../services/AuthService.js'
import { ref } from 'vue'
let email = ref('')
let password = ref('')

//Funcion que maneja el submit del formulario, mostrando una alerta con los datos ingresados
function userLogin(e) {
  e.preventDefault()
}
</script>

<style scoped></style>
