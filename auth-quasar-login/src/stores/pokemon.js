import api from 'src/services/servicePokemon.js'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemons = ref([])
  const loading = ref(false)
  const errorMessage = ref('')

  const fetchPokemons = async () => {
    loading.value = true
    errorMessage.value = ''

    try {
      const response = await api.get('/pokemon?limit=151')
      const basicList = response.data.results

      // Mapear la lista para obtener el detalle de cada uno
      // Usamos Promise.all para que las peticiones se hagan en paralelo y sea rápido
      const detailedPokemons = await Promise.all(
        basicList.map(async (p) => {
          const detail = await api.get(p.url) // Usamos la URL que ya viene en el resultado
          console.log("Pokemons obtenidos")
          return {
            id: detail.data.id,
            name: detail.data.name,
            // Extraemos la imagen de alta calidad
            image: detail.data.sprites.other['official-artwork'].front_default,
            // Mapeamos los tipos para que sea un array de strings simple: ['grass', 'poison']
            types: detail.data.types.map((t) => t.type.name),
            // Guardamos las stats por si las necesitas luego
            stats: detail.data.stats,
          }
        }),
      )

      pokemons.value = detailedPokemons
    } catch (error) {
      errorMessage.value = error.response
        ? `Error ${error.response.status}: No se pudo obtener el detalle.`
        : 'Error de red o de servidor.'
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

  return { pokemons, loading, errorMessage, fetchPokemons, searchPokemon, filteredPokemons }
})
