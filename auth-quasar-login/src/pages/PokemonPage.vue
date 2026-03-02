<template>
  <div class="containerSearch bg-shadow shadow-1">
    <q-input
      v-model="pokemonStore.searchPokemon"
      label="Ingresa el nombre del pokemon"
      clearable
      clear-icon="las la-times-circle"
      class="inputSearch"
    />
  </div>
  <div class="containerPokemons">
    <CardComponent
      v-for="(pokemon, index) in pokemonStore.filteredPokemons"
      :key="index"
      :pokemon="pokemon"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import CardComponent from 'src/components/CardComponent.vue'
import { usePokemonStore } from 'src/stores/pokemon.js'

const pokemonStore = usePokemonStore()

onMounted(async () => {
  await pokemonStore.fetchPokemons()
})
</script>

<style scoped>
.containerPokemons {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
.inputSearch {
  padding: 1px;
}
</style>
