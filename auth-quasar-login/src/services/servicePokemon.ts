import axios, { AxiosError, type AxiosInstance } from 'axios'

export interface Pokemon {
  id: number
  name: string
  image: string
  types: string[]
  stats: string[]
}

interface PokemonListResponse {
  results: Array<{
    name: string
    url: string
  }>
}

interface PokemonDetailResponse {
  id: number
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string | null
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
  stats: Array<{
    stat: {
      name: string
    }
    base_stat: number
  }>
}

export interface PokemonListItems {
  data: Pokemon[]
}

// Creamos una instancia de axios con la configuración base para la API de Pokémon.
// Esto nos permite reutilizar esta configuración en todas las solicitudes.
const api: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchPokemons = async (): Promise<PokemonListItems> => {
  try {
    const response = await api.get<PokemonListResponse>('/pokemon?limit=151')
    const basicList = response.data.results

    const detailedPokemons = await Promise.all(
      basicList.map(async (pokemon): Promise<Pokemon> => {
        const detailsResponse = await api.get<PokemonDetailResponse>(pokemon.url)
        const details = detailsResponse.data

        return {
          id: details.id,
          name: details.name,
          image: details.sprites.other['official-artwork'].front_default ?? '',
          types: details.types.map((typeInfo) => typeInfo.type.name),
          stats: details.stats.map((statInfo) => `${statInfo.stat.name}: ${statInfo.base_stat}`),
        }
      }),
    )

    return { data: detailedPokemons }
  } catch (error) {
    if (error instanceof AxiosError && error.code === 'ECONNABORTED') {
      throw new Error('Timeout al consultar PokeAPI. Intenta nuevamente en unos segundos.')
    }

    if (error instanceof AxiosError && error.response) {
      throw new Error(`Error ${error.response.status} al obtener pokemons desde PokeAPI.`)
    }

    throw new Error('No se pudieron obtener los pokemons por un error de red o servidor.')
  }
}
export default { fetchPokemons }
