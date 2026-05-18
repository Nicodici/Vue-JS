import axios, { AxiosInstance, AxiosResponse } from 'axios'

// Definimos una interfaz para los datos básicos de un Pokémon

export interface Pokemon {
  id: number
  url?: string
  name: string
  image: string
  types: string[]
  stats?: string[]
}

// Definimos una interfaz para la respuesta de la API al listar Pokémon
export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

// Creamos una instancia de axios con la configuración base para la API de Pokémon
const api: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Función para obtener la lista de Pokémon con tipado
export const fetchPokemonList = async (limit = 20, offset = 0): Promise<PokemonListResponse> => {
  const response: AxiosResponse<PokemonListResponse> = await api.get(
    `/pokemon?limit=${limit}&offset=${offset}`,
  )
  return response.data
}

// Función para obtener los detalles de un Pokémon por su nombre o ID
export const fetchPokemonDetails = async (nameOrId: string | number): Promise<Pokemon> => {
  const response: AxiosResponse<Pokemon> = await api.get(`/pokemon/${nameOrId}`)
  return response.data
}

export default api
