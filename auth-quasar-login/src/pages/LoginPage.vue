<template>
  <q-page class="login-page">
    <div class="login-container">
      <q-form @submit.prevent="authUser" @reset="onReset" class="login-form shadow-2">
        <div class="text-h5 text-weight-medium text-center q-mb-sm titleColor">Ingresar</div>
        <div class="text-caption text-grey-7 text-center q-mb-md">
          Accede con tu usuario y contraseña
        </div>
        <q-separator class="q-mb-lg" />
        <q-input class="q-mb-md" outlined bg-color="white" v-model="nameUser" label="Usuario">
          <template v-slot:prepend>
            <q-icon name="las la-user" />
          </template>
        </q-input>
        <q-input
          class="q-mb-lg"
          outlined
          bg-color="white"
          v-model="passwUser"
          label="Contraseña"
          :type="showPassword ? 'text' : 'password'"
        >
          <template v-slot:prepend>
            <q-icon name="las la-lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'las la-eye-slash' : 'las la-eye'"
              @click="togglePasswordVisibility"
            />
          </template>
        </q-input>
        <q-separator class="q-mb-lg" />
        <div class="row q-col-gutter-sm q-mb-md">
          <div class="col-6">
            <q-btn
              label="Enviar"
              type="submit"
              color="secondary"
              :disable="btnSend"
              class="full-width"
              unelevated
            />
          </div>
          <div class="col-6">
            <q-btn
              label="Limpiar"
              type="reset"
              color="primary"
              :disable="btnReset"
              class="full-width"
              flat
            />
          </div>
        </div>
        <q-separator class="q-mb-sm" />
        <div class="flex flex-center">
          <q-btn color="info" flat no-caps>¿Olvidaste tu contraseña?</q-btn>
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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthStore } from 'src/stores/authStore'
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const useAuth = useAuthStore()
const $q = useQuasar()
const router = useRouter()
let nameUser = ref('')
let passwUser = ref('')

const btnSend = computed(() => !nameUser.value.trim() || !passwUser.value.trim())
const btnReset = computed(() => !nameUser.value.trim() && !passwUser.value.trim())

const authUser = async () => {
  const auth = getAuth()
  try {
    const cred = await signInWithEmailAndPassword(auth, nameUser.value, passwUser.value)
    console.log('Usuario autenticado correctamente')
    useAuth.user = nameUser.value
    useAuth.uidUser = cred.user.uid
    useAuth.isAuthenticated = true
    $q.notify({
      type: 'positive',
      message: 'Usuario autenticado correctamente',
      icon: 'las la-check-circle',
      position: 'top',
    })
    router.push({ name: 'post' })
  } catch (error) {
    console.log('Error al autenticar al usuario:', error)
    $q.notify({
      type: 'negative',
      message: 'Error al autenticar al usuario, por favor verifica tus credenciales',
      icon: 'las la-times-circle',
    })
  }
}

const onReset = () => {
  nameUser.value = ''
  passwUser.value = ''
  $q.notify({
    type: 'info',
    message: 'Formulario limpiado',
    icon: 'las la-info-circle',
  })
}
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
.login-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/backgroundLogin.webp');
  background-size: cover;
  background-position: center;
  filter: brightness(1) contrast(1) saturate(0.8);
}

.login-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  width: min(92vw, 420px);
  border-radius: 12px;
  padding: 28px 22px;
  background: rgba(255, 255, 255, 0.799);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.titleColor {
  color: var(--q-dark);
}
</style>
