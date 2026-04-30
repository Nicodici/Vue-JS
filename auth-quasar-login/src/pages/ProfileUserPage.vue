<template>
  <Vueform
    v-model="profile"
    class="profile-form bg-blue-1 shadow-1"
    size="md"
    :display-errors="true"
    :endpoint="false"
  >
    <StaticElement name="personal_title" content="Información personal" tag="h2" />
    <StaticElement name="divider" tag="hr" />
    <TextElement
      name="first_name"
      label="Nombre"
      :placeholder="profile.first_name"
      :columns="{
        label: 12,
        wrapper: 12,
      }"
    />
    <TextElement
      name="last_name"
      label="Apellido"
      :rules="['required', 'max:255']"
      :placeholder="profile.last_name"
    />
    <DateElement
      name="birthday"
      label="Fecha de nacimiento"
      :rules="['required']"
      :placeholder="profile?.birthday"
    />
    <StaticElement name="contact_title" content="Información de contacto" tag="h2" top="2" />
    <StaticElement name="divider_1" tag="hr" />
    <TextElement
      name="email"
      input-type="email"
      :rules="['required', 'max:255', 'email']"
      :placeholder="profile.email"
      label="Email"
      :columns="{
        container: 6,
      }"
    />
    <TextElement
      name="email_1"
      input-type="email"
      :rules="['required', 'max:255', 'email']"
      :placeholder="profile.telefono"
      label="Telefono"
      :columns="{
        container: 6,
      }"
    />
    <StaticElement name="divider_2" tag="hr" />
    <StaticElement name="security_title" content="Seguridad" tag="h2" top="2" />
    <StaticElement name="divider_3" tag="hr" />
    <ButtonElement
      name="reset_password"
      button-label="Enviar enlace de restablecimiento"
      button-type="anchor"
      label="Password"
      description="Seleccionar el botón enviará un correo para resetear tu password."
    />
    <ButtonElement
      name="close_sessions"
      button-label="Cerrar sesión actual"
      button-type="anchor"
      label="Conexión"
      description="Se cerrará tu sesión actual en este dispositivo, pero permanecerá activa en otros dispositivos donde hayas iniciado sesión."
    />
    <ButtonElement
      name="delete_account"
      button-label="Eliminar cuenta"
      button-type="anchor"
      description="Se borrará permanentemente tu cuenta."

    />
    <StaticElement name="divider_4" tag="hr" />
  </Vueform>
</template>

<!--
<template>
  <q-page>
    <div class="profile-container bg-light-blue-1 shadow-md">
      <div class="text-h4 text-center q-mb-lg q-pt-lg">Perfil de Usuario</div>
      <div class="profile-info q-mb-lg">
        <p><strong>Nombre:</strong> {{ profile.first_name || '-' }}</p>
        <p><strong>Apellido:</strong> {{ profile.last_name || '-' }}</p>
        <p><strong>Teléfono:</strong> {{ profile.telefono || '-' }}</p>
        <p><strong>Email:</strong> {{ profile.email || '-' }}</p>
        <p><strong>Nacimiento:</strong> {{ profile.birthday || '-' }}</p>
        <div v-if="loading" class="text-body-1 text-center text-grey-8">Cargando perfil...</div>
      </div>
    </div>
  </q-page>
</template> -->

<script setup>
import { useAuthStore } from 'src/stores/authStore'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from 'src/boot/firebase'
import { onMounted, ref } from 'vue'

const useAuth = useAuthStore()

const profile = ref({
  first_name: '',
  last_name: '',
  email: '',
  birthday: '',
})
const loading = ref(false)
const errorMessage = ref('')

const loadProfile = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    // Obtener el UID del usuario autenticado en el store o directamente desde Firebase Auth
    const idUser = useAuth.uidUser || auth.currentUser?.uid
    console.log('UID del usuario autenticado:', idUser)

    // Obtiene los datos del perfil desde Firestore usando el UID
    const userDataProfile = await getDoc(doc(db, 'users', idUser))
    console.log('Datos del usuario', userDataProfile.data())
    //Asigna los datos obtenidos al objeto `profile` para mostrarlos en la interfaz
    profile.value = {
      first_name: userDataProfile.data()?.nombre,
      last_name: userDataProfile.data()?.apellido,
      email: userDataProfile.data()?.email,
      birthday: userDataProfile.data()?.birthday,
      telefono: userDataProfile.data()?.telefono,
    }
  } catch (error) {
    console.error('Error al cargar perfil:', error)
  } finally {
    loading.value = false
  }
}

onMounted(loadProfile)

</script>

<style scoped>
.profile-form {
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
}
.profile-form :deep(input::placeholder),
.profile-form :deep(textarea::placeholder) {
  color: #000000;
  opacity: 1;
}
</style>
