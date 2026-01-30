//Clase para manejar la autenticación de usuarios
import { ref } from 'vue'

class AuthService {
  //El servicio se inicializa con un JWT vacío
  constructor() {
    //Propiedad reactiva para almacenar el token JWT
    this.jwt = ref('')

    //Propiedad para almacenar errores de autenticación
    this.error = ref('');
  }

  //Método para obtener el JWT actual
  getJwt() {
    return this.jwt.value
  }

  //metodo asincrono para establecer la conexion con el servidor de autenticación, enviando el email y la contraseña del usuario

  async login(email, password) {
    try {
      //se realiza una petición POST al servidor de autenticación
      const response = await fetch('https://reqres.in/api/login', {
        //Se especifica el metodo HTTP
        method: 'POST',
        //se establecen los headers de la petición, 'aplication/json' indica que el cuerpo de la petición está en formato JSON
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        //el cuerpo de la petición contiene el email y la contraseña en formato JSON
        body: JSON.stringify({ email, password }),
      })
      //Una vez que se recibe la respuesta, se convierte a formato JSON
      const data = await response.json()
      //Se almacena el token JWT recibido en la propiedad jwt, tener en cuenta que data.token es donde el servidor devuelve el token, el nombre de la propiedad puede variar según la implementación del servidor
      this.jwt.value = data.token
      
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
}
export default AuthService
