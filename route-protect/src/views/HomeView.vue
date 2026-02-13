<template>
  <div class="text-h1 q-mb-md">Home</div>
  <div class="formTotal">
    <p>¡Bienvenido a la página de inicio!</p>
    <input type="text" v-model="note" />
    <button @click="sendtoServer">Enviar nota</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const note = ref('')
const sendtoServer = async () => {
  const response = await fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer --AcaIriaNuestroToken--',
    },
    body: JSON.stringify({ note: note.value }),
  })

  const responseData = await response.json()
  console.log('Respuesta del servidor:', responseData)
}
</script>
<style scoped></style>
