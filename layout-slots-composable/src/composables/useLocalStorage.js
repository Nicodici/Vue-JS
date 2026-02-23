import { ref, watch } from 'vue'

export function useLocalStorage(key, initialValue) {
  const storedValue = ref(initialValue)

  if (typeof window !== 'undefined') {
    const raw = window.localStorage.getItem(key)

    if (raw !== null) {
      try {
        storedValue.value = JSON.parse(raw)
      } catch {
        storedValue.value = raw
      }
    }
  }

  watch(
    storedValue,
    (newValue) => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(newValue))
      }
    },
    { deep: true },
  )

  return storedValue
}