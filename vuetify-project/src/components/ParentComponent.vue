<template>
  <h1>Componente Padre</h1>

  <!-- Referenciamos el ChildComponent  -->
  <ChildComponent ref="percentageComponent" />
  <button @click="banco">Añadir cuenta</button>
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";
import { ref } from "vue";

const percentageComponent = ref(null);

//Funcion que conecta al servicio y sube la información del banco, y luego llama a la función del hijo para que se actualice el porcentaje
const banco = () => {
  console.log("Cuenta añadida");

  //De esta forma, desde el componente padre, llamamos a la funcion del componente hijo. Esto es posible gracias a la referencia que hemos creado al componente hijo con el ref="percentageComponent" y luego accediendo a la función recalculatePercentage() a través de esa referencia.
  percentageComponent.value.recalculatePercentage();
};
</script>

<style scoped></style>
