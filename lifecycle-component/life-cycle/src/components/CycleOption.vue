<template>
  <div>
    <h1>Ciclo de vida del componente</h1>
    <p>{{ number }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script>
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "CycleOption",
  data() {
    let number = ref(0);
    return {
      number,
    };
  },
  methods: {
    increment() {
      this.number += 1;
    },
  },
  created() {
    //Especifico las acciones que quiero que se ejecuten cuando el componente es creado.
    console.log("Created");
  },
  mounted() {
    //Especifico las acciones que quiero que se ejecuten cuando el componente es montado en el DOM.
    console.log("Mounted");
  },
  updated() {
    //Especifico las acciones que quiero que se ejecuten cuando el componente es actualizado.
    console.log("Updated");
  },
  unmounted() {
    //Especifico las acciones que quiero que se ejecuten cuando el componente es destruido.
    console.log("Unmounted");
  },
});
</script>

<style scoped></style>
