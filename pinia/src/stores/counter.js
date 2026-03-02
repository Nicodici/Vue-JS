import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    //persistencia sin pinia, usando localStorage
    function init() {
      const storeCount = localStorage.getItem('count')
      if (storeCount) {
        count.value = parseInt(storeCount)
        console.log('Valor del count en el store:', count.value)
      }
    }

    function increment() {
      count.value++

      //Para evitar que cada vez que se actualice el valor de count, se guarde en localStorage, podemos usar un watcher para observar los cambios en count y guardar su valor en localStorage cada vez que cambie.
      localStorage.setItem('count', count.value.toString())
    }

    return { count, doubleCount, increment, init }
  },
  {
    // persist: true,
    // La forma mas simple de configurar la persistencia es 'persit:true', pero también se pueden configurar opciones adicionales, como el nombre de la clave en el almacenamiento local, el tipo de almacenamiento (localStorage o sessionStorage), entre otras. Por ejemplo:
    // persist: {
    //   key: 'my-counter-store',
    //   storage: localStorage // o sessionStorage,
    // },
    //Tambien debemos indicar los paths, lo cual es un array con la lista de propiedades del store que queremos persistir. Por ejemplo:
    // persist: {
    //   key: 'my-counter-store',
    //   storage: localStorage,
    //   paths: ['count'], // Solo se persistirá la propiedad 'count'
    // },
    // persist: {
    //   storage: localStorage,
    //   paths: ['count'],
    // },
  },
)
