<template>
  <q-page class="flex flex-center" style="height: 90vh; overflow: hidden">
    <div class="login-container">
      <div class="text-h5 text-center q-mb-xs">Ingresar</div>
      <q-form @submit.prevent="onSubmit" @reset="onReset" class="login-form">
        <q-input class="q-mb-md" filled v-model="nameUser" label="Usuario">
          <template v-slot:prepend>
            <q-icon name="las la-user" />
          </template>
        </q-input>
        <q-input class="q-mb-md" filled v-model="passwUser" label="Contraseña" :type="showPassword ? 'text' : 'password'">
          <template v-slot:prepend>
            <q-icon name="las la-lock" />
          </template>
          <template v-slot:append>
            <q-icon :name="showPassword ? 'las la-eye-slash' : 'las la-eye'" @click="togglePasswordVisibility" />
          </template>
        </q-input>
        <div class="flex flex-row items-center justify-center q-mt-md q-gutter-md">
          <q-btn label="Enviar" type="submit" color="primary" />
          <q-btn label="Limpiar" type="reset" color="secondary" />
        </div>
        <div class="flex flex-center q-mt-md">
          <q-btn color="info">¿Olvidaste tu contraseña?</q-btn>
        </div>
      </q-form>
    </div>
  </q-page>

  <!-- <div>
    Verificación de las variables reactivas
    <p>Usuario: {{ nameUser }}</p> 
    <p>Contraseña: {{ passwUser }}</p>
  </div> -->
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
const $q = useQuasar()
let nameUser = ref('')
let passwUser = ref('')

const onReset = () => {
  nameUser.value = ''
  passwUser.value = ''
  $q.notify({
    type: 'info',
    message: 'Formulario limpiado',
    icon: 'las la-info-circle',
  })
}

const onSubmit = () => {
  alert(`Usuario: ${nameUser.value} - Contraseña: ${passwUser.value}`)
}

const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
.login-container {
  width: 80%;
  max-width: 450px;
}

.login-form {
  border: 1px solid rgb(209, 209, 209);
  border-radius: 10px;
  padding: 30px 20px;
}
</style>
