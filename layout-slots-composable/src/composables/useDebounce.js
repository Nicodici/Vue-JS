import { ref, watch, onUnmounted } from 'vue'

export function useDebounce(initialValue = '', delay = 400) {
    
  const source = ref(initialValue)
  const debounced = ref(initialValue)
  const isDebouncing = ref(false)
  let timeoutId = null

  watch(source, (newValue) => {
    isDebouncing.value = true

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      debounced.value = newValue
      isDebouncing.value = false
    }, delay)
  })

  onUnmounted(() => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  })

  return {
    source,
    debounced,
    isDebouncing,
  }
}
