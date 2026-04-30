<template>
  <div class="q-pa-md q-gutter-md new-post-page">
    <div class="text-center text-h3">Inserte un posteo</div>
    <q-form @submit.prevent="createPost" class="q-mt-md">
      <q-input v-model="title" label="Titulo" outlined required class="q-mb-md" />
      <q-input
        v-model="content"
        label="Contenido"
        outlined
        type="textarea"
        autogrow
        required
        class="q-mb-md custom-textarea"
      />
      <div class="text-center">
        <q-btn
          label="Postear"
          color="primary"
          type="submit"
          class="q-mt-md q-mr-md"
          :loading="isSubmitting"
          :disable="isSubmitting"
        />
        <q-btn
          label="Limpiar"
          color="secondary"
          class="q-mt-md"
          :loading="isSubmitting"
          @click="cleanForm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useQuasar } from 'quasar'
import { useAuthStore } from 'src/stores/authStore'
// Referencias a Firebase
const db = getFirestore()
const router = useRouter()
const userAuth = useAuthStore()
const title = ref('')
const content = ref('')
const isSubmitting = ref(false)
const $q = useQuasar()

const createPost = async () => {
  //valida que no se este cargando un posteo, si lo está, no se ejecuta la accion
  if (isSubmitting.value) return

  try {
    if (!userAuth.isAuthenticated) {
      $q.notify({
        type: 'negative',
        message: 'El usuario no se encuentra logueado.. redirigiendo al login',
        icon: 'las la-thumbs-up',
        position: 'top',
      })
      await router.push({ name: 'login' })
    }

    const newPost = {
      title: title.value,
      content: content.value,
      author: useAuthStore.user,
      userId: useAuthStore.uidUser,
      createAt: serverTimestamp(),
    }
    console.log(newPost)
    // Guardar el post en la colección de Firebase
    await addDoc(collection(db, 'posts'), {
      title: title.value,
      content: content.value,
      author: useAuthStore.user,
      userId: useAuthStore.user.uid,
      createdAt: newPost.createAt,
    })

    // Limpiar el formulario y redirigir
    title.value = ''
    content.value = ''
    $q.notify({
      type: 'positive',
      message: 'Mensaje posteado',
      icon: 'las la-check-circle',
      position: 'top-right',
    })
    router.push('/')
  } catch (error) {
    console.error('Error creando el post:', error)
    $q.notify({
      type: 'negative',
      message: 'Error al insertar el post',
      icon: 'las la-times-circle',
      position: 'top-right',
    })
  } finally {
    isSubmitting.value = false
  }
}

const cleanForm = () => {
  title.value = ''
  content.value = ''
  $q.notify({
    type: 'positive',
    message: 'Formulario reiniciado',
    icon: 'las la-check-circle',
    position: 'bottom-right',
  })
}
</script>

<style scoped>
.new-post-page {
  max-width: 600px;
  margin: 0 auto;
}

.custom-textarea ::v-deep(.q-field__control) {
  min-height: 200px; /* Altura inicial del área de texto */
  max-height: 400px; /* Altura máxima opcional */
}

.q-mb-md {
  margin-bottom: 16px;
}
</style>
