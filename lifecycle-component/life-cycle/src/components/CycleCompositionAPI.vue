<template>
  <div>
    <h1>Ciclo de vida del componente</h1>
    <p>{{ number }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script>

    // A diferencia de OptionAPI, en CompositionAPI debemos importar los hooks del ciclo de vida desde 'vue',
    // Estos mismos llevan el prefijo 'on' seguido del nombre del hook con la primera letra en mayuscula.
import {
  defineComponent,
  ref,
  onMounted,
  onUpdated,
  onActivated,
  onBeforeUnmount,
} from "vue";
export default defineComponent({
  name: "CycleCompositionAPI",
  setup() {
    let number = ref(0);

    function increment() {
      this.number++;
    }

    onActivated(() => {
      console.log("Component Activated");
    });
    onMounted(() => {
      console.log("Component mounted");
    });
    onBeforeUnmount(() => {
      console.log("Component Unmounted");
    });
    onUpdated(() => {
      console.log("Component updated");
    });

    return { number, increment, onActivated, onMounted, onBeforeUnmount, onUpdated };
  },
});
</script>

<style scoped></style>
