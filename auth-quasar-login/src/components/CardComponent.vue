<template>
  <q-card class="my-card">
    <q-img :src="props.pokemon.image" :alt="props.pokemon.name" loading="lazy">
      <div class="absolute-bottom text-h6">{{ capFirstLetter(props.pokemon.name) }}</div>
    </q-img>

    <q-card-section>
      <!-- Por cada tipo de pokemon, se crea un chip -->
      <q-chip
        :color="colorChip(type)"
        square
        v-for="(type, index) in props.pokemon.types"
        :key="index"
      >
        {{ capFirstLetter(type) }}
      </q-chip>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps } from 'vue'
import { QCard, QImg, QCardSection, QChip } from 'quasar'

const colorType = {
  normal: 'grey',
  fire: 'red',
  water: 'blue',
  electric: 'yellow',
  grass: 'green',
  ice: 'cyan',
  fighting: 'brown',
  poison: 'purple',
  ground: 'orange',
  flying: 'lightblue',
  psychic: 'pink',
  bug: 'lime',
  rock: 'darkgrey',
  ghost: 'indigo',
  dragon: 'deep-purple',
  dark: 'black',
  steel: 'blue-grey',
  fairy: 'pink',
}

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
})

const capFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const colorChip = (type) => {
  return colorType[type]
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
