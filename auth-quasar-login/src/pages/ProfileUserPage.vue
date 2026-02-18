<template>
  <Vueform v-model="profile" class="profile-form bg-white shadow-2" size="md" :display-errors="true" :endpoint="false">
    <StaticElement
      name="personal_title"
      content="Información personal"
      tag="h2"
    />
    <StaticElement
      name="divider"
      tag="hr"
    />
    <TextElement
      name="first_name"
      label="Nombre"
      :rules="[
        'required',
        'max:255',
      ]"
      :columns="{
        label: 12,
        wrapper: 12,
      }"
    />
    <TextElement
      name="last_name"
      label="Apellido"
      :rules="[
        'required',
        'max:255',
      ]"
    />
    <DateElement
      name="birthday"
      label="Fecha de nacimiento"
      :rules="['required']"
    />
    <StaticElement
      name="contact_title"
      content="Información de contacto"
      tag="h2"
      top="2"
    />
    <StaticElement
      name="divider_1"
      tag="hr"
    />
    <TextElement
      name="email"
      input-type="email"
      :rules="[
        'required',
        'max:255',
        'email',
      ]"
      label="Email"
      :columns="{
        container: 6,
      }"
    />
    <TextElement
      name="email_1"
      input-type="email"
      :rules="[
        'required',
        'max:255',
        'email',
      ]"
      label="Telefono"
      :columns="{
        container: 6,
      }"
    />
    <StaticElement
      name="divider_2"
      tag="hr"
    />
    <StaticElement
      name="security_title"
      content="Seguridad"
      tag="h2"
      top="2"
    />
    <StaticElement
      name="divider_3"
      tag="hr"
    />
    <ButtonElement
      name="reset_password"
      button-label="Send email to reset password"
      button-type="anchor"
      label="Password"
      description="To change your password, we need to send a reset link to your email address."
    />
    <ButtonElement
      name="close_sessions"
      button-label="Sign out"
      button-type="anchor"
      label="Active sessions"
      description="Selecting \&#34;Sign out\&#34; will sign you out from all devices except this one. This can take up to 10 minutes."
    />
    <ButtonElement
      name="delete_account"
      button-label="Sign out"
      button-type="anchor"
      description="Permanently delete your mydomain.com account."
      label="Delete account"
    />
    <StaticElement
      name="divider_4"
      tag="hr"
    />
  </Vueform>
</template>



<!-- 
<template>
  <q-page>
    <div class="profile-container bg-light-blue-1 shadow-md">
      <div class="text-h4 text-center q-mb-lg q-pt-lg">Perfil de Usuario</div>
      <div class="profile-info q-mb-lg">
        <p><strong>Nombre:</strong> {{ profile.nombre || '-' }}</p>
        <p><strong>Apellido:</strong> {{ profile.apellido || '-' }}</p>
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

    // Obtiene los datos del perfil desde Firestore usando el UID
    const userDataProfile = await getDoc(doc(db, 'users', idUser))
    console.log(userDataProfile.data())
    //Asigna los datos obtenidos al objeto `profile` para mostrarlos en la interfaz
    profile.value = {
      first_name: userDataProfile.data()?.first_name || '',
      last_name: userDataProfile.data()?.last_name || '',
      email: userDataProfile.data()?.email || '',
      birthday: userDataProfile.data()?.birthday || '',
    }

  } catch (error) {

    console.error('Error al cargar perfil:', error)
  } finally {
    loading.value = false
  }
}

onMounted(loadProfile)
</script>

<style scoped></style>
