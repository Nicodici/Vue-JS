<template>
  <q-page class="list-post-page">
    <div class="post-shell">
      <section class="intro-panel">
        <div class="eyebrow">Panel editorial</div>
        <h1 class="page-title">Tu historial de publicaciones</h1>
        <p class="page-copy">
          Revisa tus posts recientes, valida fechas de publicación y mantén una visión clara de tu
          actividad.
        </p>

        <div class="preview-card">
          <div class="preview-header">
            <span class="preview-kicker">Resumen</span>
            <q-chip color="white" text-color="primary" dense square>
              {{ loading ? 'Sincronizando' : 'Actualizado' }}
            </q-chip>
          </div>
          <h2 class="preview-title">{{ summaryTitle }}</h2>
          <p class="preview-body">{{ summaryBody }}</p>

          <div class="preview-meta">
            <q-chip color="primary" text-color="white" icon="las la-user" dense>
              {{ authorLabel }}
            </q-chip>
            <q-chip color="amber-8" text-color="black" icon="las la-layer-group" dense>
              {{ posts.length }} posts
            </q-chip>
          </div>
        </div>
      </section>

      <section class="feed-panel">
        <div class="feed-card">
          <div class="feed-header">
            <div>
              <span class="feed-kicker">Listado</span>
              <h2 class="feed-title">Posts publicados</h2>
            </div>
            <q-btn
              color="primary"
              icon="las la-sync"
              label="Recargar"
              no-caps
              unelevated
              :loading="loading"
              @click="fetchUserPosts"
            />
          </div>

          <div v-if="loading" class="status-box">
            <q-spinner color="primary" size="30px" />
            <span>Cargando publicaciones...</span>
          </div>

          <div v-else-if="errorMessage" class="status-box error-box">
            <q-icon name="las la-exclamation-triangle" size="26px" />
            <span>{{ errorMessage }}</span>
          </div>

          <div v-else-if="posts.length === 0" class="status-box empty-box">
            <q-icon name="las la-feather" size="26px" />
            <span>Aun no tienes posts publicados.</span>
          </div>

          <div v-else class="posts-list">
            <article v-for="post in posts" :key="post.id" class="post-item">
              <div class="post-head">
                <h3 class="post-title">{{ post.title }}</h3>
                <q-chip color="blue-1" text-color="primary" icon="las la-calendar" dense square>
                  {{ formatDate(post.createdAt) }}
                </q-chip>
              </div>
              <p class="post-content">{{ post.content }}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from 'src/stores/authStore'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'

const authStore = useAuthStore()
const db = getFirestore()

const posts = ref([])
const loading = ref(true)
const errorMessage = ref('')

const authorLabel = computed(() => authStore.user?.email ?? 'Autor pendiente')
const summaryTitle = computed(() => {
  if (loading.value) return 'Sincronizando publicaciones'
  if (posts.value.length === 0) return 'Todavia no hay contenido publicado'

  return `Tienes ${posts.value.length} publicaciones disponibles`
})
const summaryBody = computed(() => {
  if (loading.value) {
    return 'Estamos consultando la base de datos para traer la version mas reciente de tus posts.'
  }

  if (posts.value.length === 0) {
    return 'Cuando publiques un post, aparecera aqui con su fecha y contenido para una gestion rapida.'
  }

  return 'Puedes revisar el detalle de cada post en el panel derecho y mantener una linea editorial constante.'
})

const fetchUserPosts = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    const userId = authStore.uidUser
    if (!userId) {
      errorMessage.value = 'No hay usuario logueado para consultar posts.'
      return
    }

    const postsQuery = query(collection(db, 'posts'), where('userId', '==', userId))
    const querySnapshot = await getDocs(postsQuery)
    posts.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error('Error al cargar los posts:', error)
    errorMessage.value = 'No se pudieron cargar los posts. Intenta nuevamente.'
  } finally {
    loading.value = false
  }
}

const formatDate = (timestamp) => {
  if (!timestamp) return 'Fecha no disponible'

  if (typeof timestamp?.toDate === 'function') {
    return timestamp.toDate().toLocaleDateString('es-AR')
  }

  const date = new Date(timestamp)
  if (Number.isNaN(date.getTime())) return 'Fecha no disponible'

  return date.toLocaleDateString('es-AR')
}

onMounted(() => {
  fetchUserPosts()
})
</script>

<style scoped>
.list-post-page {
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
.feed-card {
  border-radius: 28px;
  overflow: hidden;
}

.intro-panel {
  position: relative;
  padding: 36px;
  background: linear-gradient(150deg, #133a5e 0%, #1c5a7f 52%, #2d7c86 100%);
  color: #f7fbff;
  box-shadow: 0 24px 60px rgba(16, 45, 67, 0.24);
}

.eyebrow,
.feed-kicker,
.preview-kicker,
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
.preview-meta,
.feed-header,
.post-head {
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
}

.preview-meta {
  margin-top: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.feed-panel {
  display: flex;
}

.feed-card {
  width: 100%;
  padding: 32px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 26px 60px rgba(68, 84, 120, 0.18);
  backdrop-filter: blur(14px);
}

.feed-title {
  margin: 8px 0 0;
  font-size: 2rem;
  color: #12263f;
}

.status-box {
  margin-top: 26px;
  min-height: 140px;
  border-radius: 20px;
  border: 1px dashed rgba(21, 72, 109, 0.26);
  background: rgba(239, 247, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #1a4a70;
  font-weight: 600;
  padding: 16px;
  text-align: center;
}

.error-box {
  background: rgba(255, 236, 236, 0.9);
  border-color: rgba(166, 44, 44, 0.28);
  color: #8e2222;
}

.empty-box {
  background: rgba(248, 251, 255, 0.95);
  border-color: rgba(112, 141, 170, 0.28);
  color: #3f5e7d;
}

.posts-list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.post-item {
  padding: 18px;
  border-radius: 20px;
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.98), rgba(239, 247, 255, 0.95));
  border: 1px solid rgba(185, 206, 228, 0.65);
}

.post-head {
  align-items: flex-start;
}

.post-title {
  margin: 0;
  color: #17314d;
  font-size: 1.25rem;
}

.post-content {
  margin: 12px 0 0;
  color: #4a6783;
  line-height: 1.7;
  white-space: pre-line;
}

@media (max-width: 960px) {
  .post-shell {
    grid-template-columns: 1fr;
  }

  .intro-panel,
  .feed-card {
    padding: 24px;
  }
}

@media (max-width: 600px) {
  .list-post-page {
    padding-inline: 14px;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .preview-header,
  .feed-header,
  .post-head {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
