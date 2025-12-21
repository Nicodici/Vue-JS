<script setup>
import { ref } from 'vue';

// Ahora nuestra variable pasa a ser una variable Reactiva, la cual permite mutar su valor. Para poder mostrar el valor de la variable "number" aplicamos el incremento a "number.value".
// Ref(valor_inicial) es la funcion para crear una variable reactiva en Vue.
let number = ref(0);
  
const addOne = () =>{
    number.value += 1;
}

const deleteOne = () =>{
    number.value -=1;
}
// setInterval(addOne, 1000);

const resetValue = ()=>{
    number.value = 0;
}

</script>

<!-- Si bien nosotros llamamos a la variable y se muestra por pantalla, esta variable no es reactiva, es decir que si se modifica, no se actualizara su valor en la renderización -->
 <!-- Para modificar esto, debemos usar "ref" de Vue, que nos permite crear variables reactivas.
 En este caso, cada vez que se modifique el valor de "number", se actualizará en la vista. -->
<template>
  <h1>Esto es un componente con variable</h1>

    <!-- Usamos el evento click para ejecutar la función addOne cada vez que se haga click en el h3, por ultimo referenciamos la funcion a la cual queremos llamar. -->
  <h3 @click="addOne">{{ number }}</h3>
  <button @click="addOne">Incrementar valor </button>
  <button @click="deleteOne">Decrementar valor </button>
  
  <!-- evento que resetea el valor al parar el mouse encima   -->
  <button @mouseenter="resetValue">Resetear valor </button>
</template>

<style>
    button{
        margin: 5px;
        padding: 10px;
        font-size: 16px;
    }
</style>
 