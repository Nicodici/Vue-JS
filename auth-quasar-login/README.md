# auth-quasar-login

Aplicacion construida con Quasar + Vue 3 + Pinia + Firebase.
El objetivo es practicar autenticacion, proteccion de rutas, manejo de perfil y consumo de APIs externas.

## Estado actual del proyecto

### Acciones implementadas

1. Registro de usuario
- Ruta: `/register`
- Crea usuario en Firebase Authentication (`email/password`).
- Guarda datos de perfil en Firestore (`users/{uid}`): nombre, apellido, telefono, email, birthday y createdAt.

2. Login de usuario
- Ruta: `/login`
- Autentica con Firebase Authentication.
- Guarda estado de sesion en Pinia (`uidUser`, `isAuthenticated`) con persistencia en `localStorage`.

3. Cierre de sesion
- Disponible en el header cuando hay sesion activa.
- Limpia store de autenticacion y redirige al login.

4. Proteccion de rutas
- Se usa `meta.requireAuth` en el router.
- Si no hay sesion y la ruta requiere auth, redirige a `/login`.

5. Perfil de usuario
- Ruta protegida: `/profile`
- Carga datos del usuario autenticado desde Firestore y los muestra en un formulario Vueform.

6. Modulo Pokemon
- Ruta: `/pokemon`
- Obtiene los primeros 151 Pokemons desde PokeAPI.
- Trae detalle por Pokemon (id, nombre, imagen, tipos, stats).
- Permite busqueda por nombre con filtro reactivo.

7. Landing/Home
- Ruta: `/`
- Pantalla de bienvenida con accesos a login y registro.

8. Galeria de fotos
- Ruta: `/valentina-fotos`
- Renderiza una lista de imagenes remotas con `q-img`.

9. Header dinamico por estado de sesion
- Muestra enlaces publicos o privados segun `isAuthenticated`.

### Secciones en desarrollo

1. `/post` (ListPostPage)
- Estructura base creada, sin logica funcional de listado todavia.

2. `/newPost` (NewPostPage)
- Estructura base creada, sin formulario/logica de publicacion todavia.

## Stack tecnico

- Vue 3 (Composition API)
- Quasar 2 (CLI con Vite)
- Vue Router
- Pinia + `pinia-plugin-persistedstate`
- Firebase Auth + Firestore
- Axios
- Vueform

## Variables de entorno

El proyecto espera un archivo `.env` con credenciales de Firebase:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Instalacion

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev      # quasar dev
npm run build    # quasar build
npm run lint     # eslint
npm run format   # prettier
npm run test     # placeholder (sin tests implementados)
```

## Flujo recomendado para probar

1. Crear cuenta en `/register`.
2. Iniciar sesion en `/login`.
3. Verificar navegacion protegida (`/profile`, `/pokemon`, `/post`, `/newPost`).
4. Cerrar sesion desde el header y comprobar redireccion a login.

## Referencia Quasar

Documentacion oficial de configuracion:
https://v2.quasar.dev/quasar-cli-vite/quasar-config-js
