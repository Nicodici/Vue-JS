<template>
<div>
<h1>Login</h1>

<form @submit.prevent="login">
    <div>
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username" required v-model="username" />
    </div>
    <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required v-model="password" />
    </div>
    <button type="submit">Login</button>
</form>
</div>

</template>


<script setup>
import {ref} from 'vue'

const username = ref('')
const password = ref('')

function login() {
  alert('Logging in with ' + username.value + ' and ' + password.value)
}
</script>


<style scoped>

</style>