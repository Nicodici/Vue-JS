<template>
  <h1>Componente Hijo</h1>
  <div>
    <p>Porcentaje: {{ percentage }}%</p>
    <p v-if="completed">Completado</p>
  </div>
</template>

<script setup>
import { onMounted, defineExpose } from "vue";
import { ref } from "vue";

const percentage = ref(0);
const completed = ref(false);

onMounted(() => {
  percentage.value = 24;
  if (percentage.value > 100) {
    percentage.value = 100;
    completed.value = true;
  }
});

//Esta funcion de recalcular la vamos a pasar al componente padre para que se ejecute al hacer click en el boton del padre, y asi el hijo se actualice con el nuevo porcentaje - Esto se llamaria control delegado por referencia, ya que el padre controla el estado del hijo a traves de una referencia a la funcion del hijo

//Por default, esta funcion no es expuesta, entonces debemos importar el defineExpose para exponer esta funcion al componente padre, y asi poder llamarla desde el padre
const recalculatePercentage = () => {
  percentage.value += 20;
  if (percentage.value > 100) {
    percentage.value = 100;
    completed.value = true;
  }
};

// Definimos que funciones van a ser expuestas por el componente padre. Por parametro enviamos un objeto con las funciones que queremos exponer, en este caso solo la funcion recalculatePercentage.
defineExpose({
  recalculatePercentage,
});
</script>

<style scoped></style>
