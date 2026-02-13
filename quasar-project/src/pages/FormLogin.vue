<template>
  <div class="q-pa-md flex flex-center column">
    <div class="text-h5 q-mb-md">Login</div>
    
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-px-md q-py-md form-container">
      <q-input
        filled
        v-model="authStore.user"
        label="Usuario"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo requerido']"
      />

      <q-input
        filled
        type="password"
        v-model="authStore.password"
        label="Contraseña"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo requerido']"
      />
      <div>
        <q-btn label="Aceptar" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

    <q-btn class="q-mt-md" color="primary" @click="showData" :disable="!accepted">
      Mostrar Información
    </q-btn>
    
    <!-- Contenedor con altura fija para evitar el salto -->
    <div class="info-container q-mt-md">
      <div v-show="showInfoUser" class="info-content">
        <p><strong>Usuario:</strong> {{ authStore.user }}</p>
        <p><strong>Contraseña:</strong> {{ authStore.password }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { useDataAuthStore } from 'src/stores/auth'
import { ref } from 'vue'
const $q = useQuasar()
const showInfoUser = ref(false)
const authStore = useDataAuthStore()
const accepted = ref(false)
function onSubmit() {
  console.log('onSubmit ejecutado')
  console.log('Usuario:', authStore.user)
  console.log('Password:', authStore.password)
  accepted.value = true
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: `Bienvenido ${authStore.user}`,
  })
}

function onReset() {
  authStore.user = null
  authStore.password = null
  showInfoUser.value = false
  accepted.value = false
  $q.notify({
    color: 'red-4',
    textColor: 'white',
    icon: 'cloud_off',
    message: 'Formulario reseteado',
  })
}
function showData() {
  if (authStore.user == null || authStore.password == null || !accepted.value) {
    showInfoUser.value = false
    return
  }
  showInfoUser.value = !showInfoUser.value
}
</script>

<style scoped>
.form-container {
  width: 400px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
}

.info-container {
  min-height: 80px;
  width: 400px;
}

.info-content {
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
}

.info-content p {
  margin: 0.5rem 0;
}
</style>
