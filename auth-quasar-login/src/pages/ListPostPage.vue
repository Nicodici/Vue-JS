<template>
  <q-page>
  <div class="text-h3">Listado de Posts</div>
    <div v-if="loading" class="loading">Cargando posts...</div>
    <div v-else-if="posts.length === 0" class="no-posts">No hay posts disponibles.</div>
    <div v-else class="posts-list">
      <div v-for="post in posts" :key="post.id" class="post-item">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <small>Publicado el: {{ formatDate(post.createdAt) }}</small>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from 'src/stores/authStore'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'

const authStore = useAuthStore()
const db = getFirestore()

const posts = ref([])
const loading = ref(true)

const fetchUserPosts = async () => {
  loading.value = true
  try {
    const userId = authStore.uidUser
    if (!userId) {
      console.error('No hay usuario logueado.')
      loading.value = false
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
  } finally {
    loading.value = false
  }
}

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleDateString()
}

onMounted(() => {
  fetchUserPosts()
})
</script>

<style scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-item {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.loading {
  font-size: 1.2rem;
  color: #666;
}

.no-posts {
  font-size: 1.2rem;
  color: #999;
}
</style>
