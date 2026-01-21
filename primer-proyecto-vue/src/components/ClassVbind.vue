<template>
    <!-- En ese caso vindeamos la clase, si isError es true, se aplica la clase danger, si es false, se aplica la clase succes -->
    <!-- <p :class="{ danger: isError, succes: !isError }">Mensaje de prueba</p> -->
     <p :style="{ backgroundColor: '#ccc', color: c }">Mensaje de prueba</p>
     <!-- v-on: la podemos utilizar cuando se produce un evento -->
     <button @click="handleClick">Cambiar de color</button>
</template>

<script setup>
    import { ref } from "vue";
 let c = ref('#f00');
 const handleClick = ()=>{
    c.value = c.value === '#f00' ? '#0f0' : '#f00';
 }
</script>

<style>
    /* .danger{
        color:red;
    }
    .succes{
        color:green
    } */
</style>