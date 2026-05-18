<template>
  <q-page class="new-post-page">
    <div class="post-shell">
      <section class="intro-panel">
        <div>
          <div class="eyebrow">Panel editorial</div>
          <h1 class="page-title">Crea una publicación</h1>
          <p class="page-copy">
            Escribe el título, ajusta el cuerpo del mensaje y revisa cómo se percibe antes de
            publicarlo.
          </p>
        </div>
        <div class="metrics-grid">
          <div class="metric-card">
            <span class="metric-label">Autor</span>
            <strong class="metric-value">{{ authorLabel }}</strong>
          </div>
          <div class="metric-card">
            <span class="metric-label">Caracteres</span>
            <strong class="metric-value">{{ contentLength }}</strong>
          </div>
          <div class="metric-card">
            <span class="metric-label">Lectura</span>
            <strong class="metric-value">{{ estimatedReadMinutes }} min</strong>
          </div>
        </div>

        <div class="preview-card">
          <div class="preview-header">
            <span class="preview-kicker">Vista previa</span>
            <q-chip color="white" text-color="primary" dense square>
              {{ title.value ? 'Borrador activo' : 'Esperando contenido' }}
            </q-chip>
          </div>

          <h2 class="preview-title">{{ previewTitle }}</h2>
          <p class="preview-body">{{ previewExcerpt }}</p>

          <div class="preview-meta">
            <q-chip color="primary" text-color="white" icon="las la-user" dense>
              {{ authorLabel }}
            </q-chip>
            <q-chip color="amber-8" text-color="black" icon="las la-clock" dense>
              {{ estimatedReadMinutes }} min
            </q-chip>
          </div>
        </div>
      </section>

      <section class="composer-panel">
        <div class="composer-card">
          <div class="composer-header">
            <div>
              <span class="composer-kicker">Nuevo post</span>
              <h2 class="composer-title">Escribe el contenido</h2>
            </div>
            <q-badge color="deep-orange" rounded class="composer-badge">Publicacion manual</q-badge>
          </div>

          <q-form @submit.prevent="createPost" class="composer-form">
            <q-input
              v-model="title"
              label="Titulo"
              standout="bg-white text-dark"
              required
              maxlength="90"
              counter
              class="field-block"
            >
              <template #prepend>
                <q-icon name="las la-heading" />
              </template>
            </q-input>

            <q-input
              v-model="content"
              label="Contenido"
              standout="bg-white text-dark"
              type="textarea"
              autogrow
              required
              maxlength="1800"
              counter
              class="field-block custom-textarea"
            >
              <template #prepend>
                <q-icon name="las la-edit" />
              </template>
            </q-input>

            <div class="guidance-strip">
              <div>
                <span class="guidance-title">Sugerencia</span>
                <p class="guidance-copy">
                  Un buen post suele funcionar mejor con un titulo breve y un cierre claro.
                </p>
              </div>
              <q-linear-progress
                rounded
                size="10px"
                color="primary"
                track-color="blue-1"
                :value="Math.min(contentLength / 800, 1)"
                class="guidance-progress"
              />
            </div>

            <div class="actions-row">
              <q-btn
                label="Postear"
                color="primary"
                type="submit"
                unelevated
                no-caps
                class="action-btn"
                :loading="isSubmitting"
                :disable="isSubmitting"
              />
              <q-btn
                label="Limpiar"
                color="grey-8"
                text-color="white"
                outline
                no-caps
                class="action-btn secondary-btn"
                :loading="isSubmitting"
                @click="cleanForm"
              />
            </div>
          </q-form>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
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

const authorLabel = computed(() => userAuth.user?.email ?? 'Autor pendiente')
const contentLength = computed(() => content.value.trim().length)
const estimatedReadMinutes = computed(() => {
  const totalWords = content.value.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(totalWords / 180))
})
const previewTitle = computed(() => title.value.trim() || 'Tu titulo aparecera aqui')
const previewExcerpt = computed(() => {
  if (!content.value.trim()) {
    return 'Comienza a escribir para ver una previsualizacion del tono y la estructura del post.'
  }

  return content.value.trim()
})

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
      author: userAuth.user.email,
      userId: userAuth.uidUser,
      createAt: serverTimestamp(),
    }
    console.log(newPost)
    // Guardar el post en la colección de Firebase
    await addDoc(collection(db, 'posts'), {
      title: title.value,
      content: content.value,
      author: userAuth.user,
      userId: userAuth.user.uid,
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
  min-height: 100vh;
  padding: 32px 20px 48px;
  background:
    radial-gradient(circle at top left, rgba(255, 205, 132, 0.95), transparent 28%),
    radial-gradient(circle at bottom right, rgba(87, 188, 255, 0.55), transparent 30%),
    linear-gradient(135deg, #f6efe4 0%, #fcfbf7 45%, #eef6ff 100%);
}

.post-shell {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 24px;
  align-items: stretch;
}

.intro-panel,
.composer-card {
  border-radius: 28px;
  overflow: hidden;
}

.intro-panel {
  position: relative;
  padding: 36px;
  background: linear-gradient(150deg, #133a5e 0%, #1c5a7f 52%, #2d7c86 100%);
  color: #f7fbff;
  box-shadow: 0 24px 60px rgba(16, 45, 67, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.eyebrow,
.composer-kicker,
.preview-kicker,
.guidance-title,
.metric-label {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
}

.page-title {
  margin: 14px 0 12px;
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 0.95;
}

.page-copy {
  max-width: 540px;
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(247, 251, 255, 0.84);
}

.metrics-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.metric-card {
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8px);
}

.metric-value {
  display: block;
  margin-top: 8px;
  font-size: 1.05rem;
}

.preview-card {
  margin-top: 26px;
  padding: 24px;
  border-radius: 24px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.96), rgba(229, 244, 255, 0.92));
  color: #17314d;
}

.preview-header,
.composer-header,
.actions-row,
.preview-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.preview-title {
  margin: 18px 0 12px;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1;
}

.preview-body {
  margin: 0;
  line-height: 1.8;
  color: #42627f;
  white-space: pre-line;
}

.preview-meta {
  margin-top: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.composer-panel {
  display: flex;
}

.composer-card {
  width: 100%;
  padding: 32px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 26px 60px rgba(68, 84, 120, 0.18);
  backdrop-filter: blur(14px);
}

.composer-title {
  margin: 8px 0 0;
  font-size: 2rem;
  color: #12263f;
}

.composer-badge {
  padding: 8px 12px;
  font-weight: 700;
}

.composer-form {
  margin-top: 26px;
}

.field-block {
  margin-bottom: 18px;
}

.custom-textarea :deep(.q-field__control) {
  min-height: 220px;
  border-radius: 18px;
}

.guidance-strip {
  margin-top: 6px;
  padding: 18px;
  border-radius: 20px;
  background: linear-gradient(135deg, #fff6e8 0%, #eef7ff 100%);
  border: 1px solid rgba(219, 229, 240, 0.9);
}

.guidance-copy {
  margin: 8px 0 14px;
  color: #53687e;
  line-height: 1.6;
}

.guidance-progress {
  max-width: 220px;
}

.actions-row {
  margin-top: 24px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.action-btn {
  min-width: 150px;
  padding-inline: 18px;
  border-radius: 14px;
}

.secondary-btn {
  border-color: rgba(39, 57, 78, 0.5);
}

@media (max-width: 960px) {
  .post-shell {
    grid-template-columns: 1fr;
  }

  .intro-panel,
  .composer-card {
    padding: 24px;
  }
}

@media (max-width: 600px) {
  .new-post-page {
    padding-inline: 14px;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .preview-header,
  .composer-header {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
