<template>
  <q-page class="register-page bg-light-blue-1 shadow-md">
    <div class="div_container">
      <Vueform
        class="containerForm bg-white shadow-2"
        size="md"
        :display-errors="true"
        :endpoint="false"
        @submit="registerUser"
        :sync="true"
        v-model="formData"
      >
        <StaticElement
          name="register_title"
          content="Creación de cuenta"
          tag="h2"
          add-class="text-center titleColor"
        />
        <StaticElement name="divider" tag="hr" />
        <TextElement
          name="first_name"
          placeholder="Nombre"
          :columns="{
            container: 6,
            label: 12,
            wrapper: 12,
          }"
          field-name="Nombre"
          :rules="['required', 'max:255']"
        />
        <TextElement
          name="last_name"
          placeholder="Apellido"
          :columns="{
            container: 6,
            label: 12,
            wrapper: 12,
          }"
          field-name="Apellido"
          :rules="['required', 'max:255']"
        />
        <DateElement
          name="birthday"
          placeholder="Fecha de nacimiento"
          field-name="Fecha de nacimiento"
          :rules="['required']"
          description="Tu fecha de nacimiento no será visible para otros."
          display-format="MMMM Do, YYYY"
        />
        <PhoneElement
          name="phone"
          placeholder="Teléfono"
          :rules="['required']"
          field-name="Teléfono"
          :allow-incomplete="true"
          :unmask="true"
        />
        <TextElement
          name="email"
          input-type="email"
          :rules="['required', 'max:255', 'email']"
          placeholder="Correo electrónico"
          field-name="Correo electrónico"
          description="Recibirás una carta de confirmación en este correo."
        />
        <TextElement
          name="password"
          input-type="password"
          :rules="['required', 'min:8', 'same:password_confirmation']"
          field-name="Contraseña"
          placeholder="Contraseña"
        />
        <TextElement
          name="password_confirmation"
          input-type="password"
          :rules="['required']"
          field-name="Confirmar contraseña"
          placeholder="Confirmar contraseña"
        />
        <StaticElement name="divider_1" tag="hr" />
        <ButtonElement
          name="register"
          :submits="true"
          button-label="Crear cuenta"
          :full="true"
          size="lg"
        />
      </Vueform>
    </div>
  </q-page>
</template>

<script setup>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'src/boot/firebase'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from 'src/boot/firebase'
import { useRouter } from 'vue-router'

const q = useQuasar()
const router = useRouter()
//Este objeto corresponde a los campos del formulario, y se actualiza automáticamente gracias a `v-model="formData"` en el componente Vueform. Cada propiedad debe coincidir con el `name` de los elementos del formulario para que se sincronicen correctamente.
const formData = ref({
  first_name: '',
  last_name: '',
  birthday: '',
  phone: '',
  email: '',
  password: '',
})

// Esta función se ejecuta con el submit válido de Vueform.
// `:endpoint="false"` evita el POST automático a /vueform/process.
const registerUser = async () => {
  q.loading.show({
    message: 'Registrando usuario...',
    spinner: 'dots',
  })
  try {
    // 1) Creo el usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.value.email.trim(),
      formData.value.password,
    )
    const redirectUrl = { name: 'login' }
    q.notify({
      type: 'positive',
      message: 'Usuario registrado correctamente. Redirigiendo al login...',
      icon: 'las la-thumbs-up',
    })
    setTimeout(() => {
      router.push(redirectUrl)
    }, 2000)
    console.log('Usuario registrado en Firebase Auth:', userCredential.user)
    // 2) Guardo el resto de la información en Firestore usando el mismo UID
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      nombre: formData.value.first_name,
      apellido: formData.value.last_name,
      telefono: formData.value.phone,
      email: formData.value.email,
      birthday: formData.value.birthday,
      createdAt: serverTimestamp(),
    })
  } catch (error) {
    q.notify({
      type: 'negative',
      message: 'Error al registrar al usuario: ' + error.message,
      icon: 'las la-thumbs-down',
    })
  } finally {
    q.loading.hide()
  }
}
</script>
<style scoped>
.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.div_container {
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.containerForm {
  border-radius: 10px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.799);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
.titleColor {
  color: #3e3f3f;
}
</style>
