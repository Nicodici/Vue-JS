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
  <div class="containerPokemons" @click="pokemonToDetail">
    <CardComponent
      v-for="(pokemon, index) in pokemonStore.filteredPokemons"
      :key="index"
      :pokemon="pokemon"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CardComponent from '../components/CardComponent.vue'
import { usePokemonStore } from '../stores/pokemon.ts'
import { useQuasar } from 'quasar'
const pokemonStore = usePokemonStore()
const $q = useQuasar()
onMounted(async () => {
  $q.loading.show({ message: 'Cargando pokemons...' })
  await pokemonStore.fetchPokemons()
  $q.loading.hide()
})

const pokemonToDetail = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const cardElement = target.closest('.card') as HTMLElement
  if (cardElement) {
    const pokemonName = cardElement.getAttribute('data-name')
    if (pokemonName) {
      pokemonStore.setSelectedPokemon(pokemonName)
    }
  }
}
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
