<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "CounterComposition",
  setup() {
    //Dentro de setup podemos usar la Composition API
    //Aqui definimos las variables reactivas y las funciones que modifican dichas variables.

    //Definimos una variable reactiva "counter" inicializada en 0.
    let counter = ref(0);

    //Definimos una funcion "increment" que incrementa el valor de "counter".
    function increment() {
      counter.value += 1;
      console.log(counter.value);
    }

    //Retornamos las variables y funciones que queremos usar en el template.
    return {
      counter,
      increment,
    };
  },
});
</script>

<!-- Lo que hace SETUP es permitir que no tengamos que importar y definir la funcion defineComponent, asimismo tampoco necesitamos retornar las variables y funciones que queremos usar en el template. 
  El script quedaria de esta forma:
  <script>
    
            let counter = ref(0);

            //Definimos una funcion "increment" que incrementa el valor de "counter".
            function increment(){
                counter.value += 1;
                console.log(counter.value);
            }

</script>
  -->

<template>
  <div>
    <h1>Componente Contador usando Composition API</h1>
    <h3>{{ counter }}</h3>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<style></style>
