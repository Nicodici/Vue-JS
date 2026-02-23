<template>
  <q-page class="q-pa-md">
    <div class="text-center text-h4 q-mb-lg">Pagina principal</div>

    <div class="q-mb-md">Posición del ratón: {{ x }}, {{ y }}</div>

    <div class="q-mb-lg">
      <div class="text-subtitle1 q-mb-sm">useCounter</div>
      <q-btn color="primary" label="-" class="q-mr-sm" @click="decrement()" />
      <q-btn color="primary" label="+" class="q-mr-sm" @click="increment()" />
      <q-btn color="secondary" label="Reset" @click="reset()" />
      <div class="q-mt-sm">Contador: {{ count }}</div>
    </div>

    <div class="q-mb-lg">
      <div class="text-subtitle1 q-mb-sm">useToggle</div>
      <q-btn color="accent" label="Cambiar estado" @click="toggle()" />
      <div class="q-mt-sm">Estado: {{ state ? 'Activo' : 'Inactivo' }}</div>
    </div>

    <div class="q-mb-lg">
      <div class="text-subtitle1 q-mb-sm">useLocalStorage</div>
      <q-input v-model="username" label="Tu nombre" outlined dense style="max-width: 320px" />
      <div class="q-mt-sm">Guardado automáticamente: {{ username }}</div>
    </div>

    <div>
      <div class="text-subtitle1 q-mb-sm">useDebounce</div>
      <q-input v-model="source" label="Escribe algo" outlined dense style="max-width: 320px" />
      <div class="q-mt-sm">Texto inmediato: {{ source }}</div>
      <div>Texto con debounce: {{ debounced }}</div>
      <div>Debouncing: {{ isDebouncing ? 'Sí' : 'No' }}</div>
    </div>
  </q-page>
</template>

<script setup>
import { useMouse } from '../composables/useMouse'
import { useCounter } from '../composables/useCounter'
import { useToggle } from '../composables/useToggle'
import { useLocalStorage } from '../composables/useLocalStorage'
import { useDebounce } from '../composables/useDebounce'

const { x, y } = useMouse()
const { count, increment, decrement, reset } = useCounter(0)
const { state, toggle } = useToggle(false)
const username = useLocalStorage('username', '')
const { source, debounced, isDebouncing } = useDebounce('', 600)
</script>
