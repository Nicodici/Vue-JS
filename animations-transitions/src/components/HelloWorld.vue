<template>
  <div class="presentation">
    <h1>Hola Mundo jeje</h1>
    <div class="containerAnimation">
      <Transition>
        <h2 class="ejemplo" v-show="showh2">
          Este es un componente de ejemplo para mostrar animaciones y
          transiciones en Vue
        </h2>
      </Transition>
    </div>
    <p>Estas son transisiones simples</p>
    <button @click="showh2 = !showh2">Magia</button>
  </div>

  <div class="transitionGroup">
    <h1>Transiciones grupales</h1>
    <TransitionGroup name="listNotes" tag="ul">
      <li v-for="(note, index) in notes" :key="index">
        <OhVueIcon
          name="bi-balloon-fill"
          hover="true"
          animation="float"
          title="aca se muestra una descripcion"
        />{{ note }}
      </li>
    </TransitionGroup>
    <input type="text" placeholder="Escribe algo..." v-model="noteText" />
    <button @click="addNote">Añadir</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showh2 = ref(false);
const notes = ref([]);
const noteText = ref("");

const addNote = () => {
  if (noteText.value.trim() !== "") {
    notes.value.push(noteText.value);
    noteText.value = "";
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
}
.containerAnimation {
  min-height: 50px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.listNotes-enter-active,
.listNotes-leave-active {
  transition: all 0.5s ease;
}

.listNotes-enter-from,
.listNotes-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
