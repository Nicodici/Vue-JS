<template>
  <div>
    <h1>Ejemplo de datos computados</h1>
    <input type="text" v-model="inputNumber" /> Ingrese un numero
    <h2>IVA (21%): {{ calculatedIVA }}</h2>
    <h3>El valor total es {{ calculatedTotal }}</h3>
  </div>
  <div>
    <h1>Reverseando un string</h1>
    <input type="text" v-model="reverseString" /> Ingrese un texto
    <h2>El texto inverto es {{ reverseText }}</h2>
  </div>
</template>

<script setup>
// import { defineComponent, ref, computed } from "vue";

// export default defineComponent({
// name: "ComputedExample",
// data() {
//   return {
//     inputNumber: "",
//     iva: 0,
//     reverseString: "",
//   };
// },
// computed: {
//   calculatedIVA() {
//     if (this.inputNumber == "") {
//       return "";
//     }
//     if (this.inputNumber == null || isNaN(this.inputNumber)) {
//       return "";
//     }
//     return (this.inputNumber * 0.21).toFixed(2);
//   },
//   calculatedTotal() {
//     if (this.inputNumber == "") {
//       return "";
//     }
//     if (this.inputNumber == null || isNaN(this.inputNumber)) {
//       return "No es un número válido";
//     }
//     return (this.inputNumber * 1.21).toFixed(2);
//   },
//   reverseText(){
//       return this.reverseString.split('').reverse().join('');
//   }
// },
// });

// Con Composition API
// export default defineComponent({
//   name: "ComputedExample",
//   //Aca se declaran las variables reactivas, despues las funciones computadas y por ultimo se retornan todos los valores.
//   setup() {
//     const inputNumber = ref("");
//     const iva = ref(0);
//     const reverseString = ref("");

//     const calculatedIVA = computed(() => {
//       if (inputNumber.value == "") {
//         return "";
//       }
//       if (inputNumber.value == null || isNaN(inputNumber.value)) {
//         return "";
//       }
//       return (inputNumber.value * 0.21).toFixed(2);
//     });
//     const calculatedTotal = computed(() => {
//       if (inputNumber.value == "") {
//         return "";
//       }
//       if (inputNumber.value == null || isNaN(inputNumber.value)) {
//         return "No es un número válido";
//       }
//       return (inputNumber.value * 1.21).toFixed(2);
//     });
//     const reverseText = computed(() => {
//       return reverseString.value.split("").reverse().join("");
//     });
//     return {
//       inputNumber,
//       iva,
//       reverseString,
//       calculatedIVA,
//       calculatedTotal,
//       reverseText,
//     };
//   },
// });

// con Setup en el script
import { ref, computed } from "vue";
const inputNumber = ref("");
const iva = 0.21;
const reverseString = ref("");
const calculatedIVA = computed(() => {
  if (inputNumber.value == "") {
    return "";
  }
  if (inputNumber.value == null || isNaN(inputNumber.value)) {
    return "";
  }
  return (inputNumber.value * iva).toFixed(2);
});
const calculatedTotal = computed(() => {
  if (inputNumber.value == "") {
    return "";
  }
  if (inputNumber.value == null || isNaN(inputNumber.value)) {
    return "No es un número válido";
  }
  return (inputNumber.value * (1 + iva)).toFixed(2);
});
const reverseText = computed(() => {
  return reverseString.value.split("").reverse().join("");
});
</script>

<style scoped></style>
