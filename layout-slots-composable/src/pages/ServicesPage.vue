<template>
  <div class="text-h1">Puntero Page</div>
  <div class="text-body-1">Posición del raton con composable: {{ x }} , {{ y }}</div>
</template>

<script setup>
import {useMouse} from '../composables/useMouse'
const { x, y } = useMouse()
</script>

<style scoped></style>
