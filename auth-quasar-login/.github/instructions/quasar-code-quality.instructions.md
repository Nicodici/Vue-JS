---
applyTo: "**"
---

# Estándares y Reglas de Calidad de Código para Proyecto Vue.js + Quasar (Obligatorias)

Estas reglas **DEBEN** cumplirse en **TODAS** las generaciones de código, refactorizaciones, sugerencias o decisiones de arquitectura.

Priorizar la calidad a largo plazo, mantenibilidad, extensibilidad, seguridad y profesionalismo por sobre soluciones rápidas o temporales.

## 1. Arquitectura y Separación de Responsabilidades (Clean Architecture)

- La separación estricta de responsabilidades es **obligatoria**.
- La estructura del proyecto debe seguir la organización del diseño existente.
- Nunca mezclar capas:
  - Las capas Domain y Application **NO DEBEN** importar nada de Vue, Quasar, Pinia ni Infrastructure.
  - Infrastructure no debe depender de Presentation ni de frameworks de UI.
  - La capa Presentation puede importar de Application e Infrastructure.

## 2. Calidad de Código, Estilo y Buenas Prácticas

- Generar código **profesional, limpio, elegante, legible y autodocumentado**.
- Seguir las mejores prácticas oficiales de Vue 3 + Composition API.
- Usar **TypeScript** en modo estricto (`"strict": true` en tsconfig.json).
- Nombres de variables, funciones y componentes **solo en inglés**.
- Nombres de comentarios **solo en español**.
- Formato estricto: ejecutar siempre ESLint + Prettier (configurado con los defaults de Quasar + `@vue/eslint-config-typescript`).
- Declarar tipos en todas partes posibles (props, emits, composables, stores).
- Los componentes deben ser pequeños, enfocados y reutilizables cuando sea posible (Single Responsibility).
- Preferir Composition API con `<script setup>` en todos los componentes.
- Longitud de línea: **máximo 100 caracteres** (configurado en ESLint/Prettier).
- No usar el tipo `any` salvo que sea absolutamente inevitable (y justificar con un comentario).
- Usar `defineProps`, `defineEmits` y `defineExpose` siempre con tipos correctos.

## 3. Gestión de Estado (State Management)

- Usar **Pinia** para el estado global.
- La lógica de Domain y Application **NO DEBE** depender de stores de Pinia.
- Los stores deben ser livianos: solo llaman a casos de uso de aplicación y mantienen estado de UI.
- Preferir composables en lugar de stores cuando el estado es local a una funcionalidad o página.

## 4. Logging y Manejo de Errores

- Registrar acciones importantes mediante un logger centralizado (inyectado o a través de un composable).
- Usar niveles claros: `info`, `warn`, `error`, `debug`.
- Incluir siempre contexto relevante y detalles del error.
- Implementar un manejador global de errores en `src/boot/error-handler.ts` (o similar).
- Nunca usar `console.log` en código de producción (excepto para depuración temporal).

## 5. Seguridad y Robustez

- Validar **TODOS** los inputs (formularios, parámetros de ruta, respuestas de API) usando Zod o validadores personalizados en la capa Infrastructure.
- Nunca confiar en datos del lado del cliente.
- Utilizar las funcionalidades de seguridad de Quasar cuando estén disponibles (CSP, etc.).
- Sanitizar cualquier contenido generado por el usuario antes de renderizarlo.
- Evitar prácticas peligrosas: `v-html`, manejadores de eventos inline con strings, etc.

## 6. Testing

- **Enfoque principal:** Tests unitarios para toda la lógica (Vitest + Vue Test Utils + @pinia/testing).
- Priorizar tests de composables, stores y casos de uso.
- **Objetivo:** Alta cobertura en la lógica de Domain y Application.
- **Estrictamente prohibido:**
  - Tests que dependan de servicios backend reales (usar mocks o MSW).
  - Tests que manipulen Git o el sistema de archivos fuera del alcance del test.

## 7. Reglas Específicas de Quasar

- Preferir componentes y utilidades de Quasar en lugar de HTML/CSS plano siempre que sea posible.
- Seguir las convenciones de Quasar para layouts, iconos y estilos.
- Usar `useQuasar()` **solo** en la capa Presentation.
- Preferir los comandos CLI de Quasar:
  - `quasar dev` → desarrollo
  - `quasar build` → build de producción
  - `quasar test` → ejecutar tests
- Mantener `quasar.config.ts` limpio y bien documentado.
- Todos los estilos personalizados deben ir en `src/css/` o en estilos scoped dentro del componente.

## 8. Plataforma y Herramientas

- **Desarrollo local:** Todos los comandos se ejecutan en **Windows 11 PowerShell**.
- **CI/CD y Producción:** Los scripts deben ser compatibles entre plataformas (Linux/Unix/Shell).
- Comandos comunes:
  - `quasar dev` → entorno de desarrollo
  - `quasar build` → build de producción
  - `quasar test` → ejecutar tests
- Al usar herramientas que modifiquen archivos (`edit_file`, `replace_in_file`, etc.), **SIEMPRE** proporcionar un `file_path` válido relativo a la raíz del workspace. Nunca omitirlo ni dejarlo vacío.

## 9. Pensamiento a Largo Plazo

- Antes de escribir cualquier código, preguntarse siempre:
  - ¿Respeta la separación de capas?
  - ¿Es mantenible y extensible en 2+ años?
  - ¿Sigue las mejores prácticas de Vue 3 + Quasar + TypeScript?
  - ¿Es limpio, seguro y profesional?
- Nunca usar parches temporales, hacks o soluciones tipo “funciona por ahora”.
- Documentar composables, stores y casos de uso complejos con JSDoc claro.
- Elegir siempre la **mejor implementación a largo plazo**, no la más rápida.

**Objetivo final:** Generar código Vue.js + Quasar **profesional, limpio, elegante, performante, seguro y mantenible a largo plazo** — como lo diseñaría un arquitecto frontend senior.
