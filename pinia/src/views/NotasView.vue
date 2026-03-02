<template>
  <div>
    <h1>Notas</h1>
    <input type="text" placeholder="Escriba aquí..." v-model="note" />
  </div>
  <div>
    <h2>Nota guardada:</h2>
    <p>Valor anterior: {{ oldValue }}</p>
    <p>Valor actual: {{ note }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const note = ref('')
const oldValue = ref('')

watch(note, (newValue, previousValue) => {
  oldValue.value = previousValue ?? ''
  console.log('Valor antiguo', previousValue)
  console.log('Nota actualizada:', newValue)
  localStorage.setItem('note', newValue)
})
</script>

<style scoped></style>
