<script>
import { defineComponent } from "vue";
// Componente usando la Option API
// En este caso, usamos "data" para definir las variables reactivas y "methods" para definir las funciones que modifican dichas variables.

//Este componente solo puede ser accesible por mi template, por lo que no es necesario el uso de "script setup".
//entonces, entendemos que setup sirve para definir componentes que van a ser usados en el template de forma directa.
export default defineComponent({
  name: "ContadorOptionApi",
  data() {
    //data siempre retorna un objeto
    //Dentro de esta funcion, todos los valores que retornemos seran variables reactivas.

    let counter = 0;
    return { counter };
  },
  methods: {
    increment() {
      this.counter += 1;
      console.log(this.counter);
    },
    reset() {
      this.counter = 0;
      console.log("Reseteo de contador");
    },
    decrement() {
      this.counter -= 1;
      console.log(this.counter);
    },
  },
});
</script>

<template>
  <div class="container_counter">
    <h3 class="title_counter">Contador</h3>
    <p class="counter">{{ counter }}</p>
    <div class="containter_buttons">
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
      <button @click="reset">Resetear</button>
    </div>
  </div>
</template>

<style scoped>
.container_counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
