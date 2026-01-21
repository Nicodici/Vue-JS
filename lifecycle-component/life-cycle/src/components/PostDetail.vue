<template>
  <!-- Ahora necesitamos recibir las props "title" y "content" para mostrar los datos dinámicamente -->
  <!-- Recordar que esta información es de solo lectura -->
  <!-- Esta es la comunicación vertical descendente, el componente padre pasa datos al componente hijo -->
  <div class="post">
    <h1>{{ props.title }}</h1>
    <p>{{ props.content }}</p>
    <input type="text" v-model="message" />
    <button @click="handleClick">Ingresar</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
// Definimos el componente con composition API
//En el caso de Options API, usamos data() para definir el estado interno del componente, y llamamos a las props directamente con this.propName
export default defineComponent({
  name: "PostDetail",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  //Emits se usa para la comunicación vertical ascendente, es un array con los nombres de los eventos que el componente hijo puede emitir al componente padre
  emits: ["sayHi"],
  setup(props, { emit }) {
    let message = ref("");
    const handleClick = () => {
      emit("sayHi", message.value);
      message.value="";
    };
    return {
      props,
      handleClick,
      message,
    };
  },
});
</script>

<style scoped>
.post {
  width: 500px;
  border-radius: 10px;
  height: 200px;
  background-color: blanchedalmond;
  color: black;
}
</style>
