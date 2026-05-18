import api from 'src/services/servicePokemon'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Pokemon } from 'src/services/servicePokemon'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemons = ref<Pokemon[]>([])
  const selectedPokemon = ref<string | null>(null)
  const loading = ref(false)
  const errorMessage = ref('')

  const getPokemons = async () => {
    loading.value = true
    errorMessage.value = ''

    try {
      const response = await api.fetchPokemons()
      pokemons.value = response.data
    } catch (error) {
      errorMessage.value =
        error instanceof Error
          ? error.message
          : 'No se pudieron cargar los pokemons por un error inesperado.'
    } finally {
      loading.value = false
    }
  }

  const searchPokemon = ref('')

  const filteredPokemons = computed(() => {
    if (!searchPokemon.value) return pokemons.value
    return pokemons.value.filter((p) =>
      p.name.toLowerCase().includes(searchPokemon.value.toLowerCase()),
    )
  })

  const setSelectedPokemon = (pokemonName: string) => {
    selectedPokemon.value = pokemonName
  }

  return {
    pokemons,
    selectedPokemon,
    loading,
    errorMessage,
    getPokemons,
    searchPokemon,
    filteredPokemons,
    setSelectedPokemon,
  }
})
