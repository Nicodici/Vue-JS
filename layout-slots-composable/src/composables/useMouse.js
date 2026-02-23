import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function updateMouse(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', updateMouse)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMouse)
  })
  return {
    x,
    y,
  }
}

// un composable es una función que puede ser reutilizada en cualquier componente, y que puede contener lógica de estado, efectos secundarios, etc. En este caso, el composable useMouse() devuelve un objeto con las coordenadas x e y del ratón, y se encarga de actualizar estas coordenadas cada vez que el ratón se mueve.