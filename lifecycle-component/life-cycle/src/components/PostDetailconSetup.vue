<template>
  <!-- Ahora necesitamos recibir las props "title" y "content" para mostrar los datos dinámicamente -->
  <!-- Recordar que esta información es de solo lectura -->
  <!-- Esta es la comunicación vertical descendente, el componente padre pasa datos al componente hijo -->
  <div class="post">
    <h1>{{ props.title }}</h1>
    <p>{{ props.content }}</p>
    <input type="text" v-model="message"/>
    <button @click="handleClick"> Ingresar</button>
  </div>
</template>


<script setup>

import { ref} from "vue";
// Realizando la comunicacion con setup script
    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    });
    const emit = defineEmits(['sayHi']);
    let message = ref("");
    const handleClick = () => {
        emit('sayHi', message.value);
        message.value = "";
    }
</script>

<style scoped>
.post {
  width: 500px;
  border-radius: 10px;
  height: 200px;
  background-color: blanchedalmond;
  color: black;
  margin:10px;
  padding: 20px;
}
</style>
