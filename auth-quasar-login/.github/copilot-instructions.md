# Instrucciones de Copilot para Frontend en Vue.js/Quasar

## Enfoque Principal

- Este es un cliente frontend que consume backends de API; generá componentes, stores y rutas para navegación SPA.
- Usá exclusivamente la Composition API de Vue 3 con TypeScript; definí props/emits con interfaces (por ejemplo, `interface Props { apiData: ApiResponse; }`).
- Priorizá componentes del Framework Quasar (por ejemplo, QTable, QDialog, QBtn) por sobre libs externas como Element UI o Ant Design para minimizar dependencias—solo sugerí installs npm si Quasar no lo cubre (por ejemplo, ¿no hay charts? Usá QChart primero).

## Estándares de Codificación

- Modo estricto de TypeScript: Activá `strict: true` en tsconfig.json; usá genéricos para componentes reutilizables (por ejemplo, `<T>` para listas).
- Estructura de archivos: Seguí las convenciones del CLI de Quasar—páginas en `/src/pages`, componentes en `/src/components`, stores en `/src/stores`.
- Manejo de estado: Usá stores de Pinia para datos de API; sugerí composables para lógica compartida (por ejemplo, `useApiFetch`).
- Estilos: CSS con scope usando vars de Quasar (por ejemplo, `--q-primary`); evitá estilos inline salvo si son dinámicos.

## Integración con API

- Traé datos vía Axios (o `$q.api` de Quasar si está configurado); siempre incluí interfaces TypeScript para respuestas (por ejemplo, `interface User { id: number; name: string; }`).
- Manejá loading/errors con QSpinner y QBanner de Quasar; usá refs reactivas para estado.
- Autenticación: Integrá con tokens de API vía plugin localStorage de Quasar; sugerí guards de ruta para vistas protegidas.

## Mejores Prácticas

- Responsividad: Usá el sistema de grid de Quasar (QPage, QCard) por default para diseño mobile-first.
- Performance: Lazy-load de rutas con `() => import('./Page.vue')`; memoizá computed props.
- Dependencias: Audita sugerencias—por ejemplo, "Usá QSelect en vez de vue-multiselect." Flaggeá cualquier nueva lib con justificación.
- Evitá: Componentes basados en clases; hacks con jQuery o JS vanilla. Nada de server-side rendering salvo que se pida explícitamente.
- Verificá: Que no hayan errores de linting.
