import axios from 'axios'


//Creamos una instancia de axios con la configuración base para la API de Pokémon
//Esto nos permite reutilizar esta configuración en todas las solicitudes que hagamos a la API, y también facilita el manejo de errores y la personalización de las solicitudes si es necesario.

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
