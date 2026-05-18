<template>
  <div class="containerDetail bg-shadow shadow-1">
    <div class="containerImg">
      <img :src="pokemon.sprites.front_default" alt="Pokemon Image" />
    </div>
    <div class="containerInfo">
      <h2>{{ pokemon.name }}</h2>
      <p><strong>Height:</strong> {{ pokemon.height }}</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
      <p><strong>Types:</strong> {{ pokemon.types.join(', ') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const pokemon = ref({
  name: '',
  height: 0,
  weight: 0,
  types: [],
  sprites: {
    front_default: '',
  },
})
</script>

<style></style>
