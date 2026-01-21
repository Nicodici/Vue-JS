<template>
  <div>
    <!-- h1 sin la directiva -->
    <h1>Texto sin directivas</h1>

    <!--  directiva personalizada v-font-size-and-color (declarada en main.js) -->
    <h1 v-fontSizeAndColor>Esto es una prueba de la directiva personalizada</h1>
    
    <!-- directiva pasando un valor especifico, se declara mediante ="" -->
    <h1 v-specific-size="70" v-custom-bgColor.orange>directiva personalizada pasando un valor</h1>
    
    <!-- directiva utilizando el binding utilizando argumentos se declara mediante (:)-->
    <h1 v-custom-size:sm v-custom-bgColor.grey>Esta directiva usa binding con argumentos</h1>

  <!-- directiva con modificadores. El modificador se declara como si fuera una propiedad, osea con "." -->
    <h1 v-custom-color.green>Este texto tiene que estar en verde por su modificador</h1> 

    <!-- directiva con mas de un modificador -->

    <h1 v-custom-fontSize-color.xxl.pink>Directiva con dos modificadores</h1>
</div>
</template>

<script setup></script>
    
<style scoped></style>
