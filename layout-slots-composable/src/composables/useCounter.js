import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  function increment(step = 1) {
    count.value += step
  }

  function decrement(step = 1) {
    count.value -= step
  }

  function reset() {
    count.value = initialValue
  }

  function set(value) {
    count.value = value
  }

  return {
    count,
    increment,
    decrement,
    reset,
    set,
  }
}