<template>
  <h1>usuarios</h1>
  <div>
    <button class="btns" @click="toggleComponent(ListLayout)">
      Ver en lista
    </button>
    <button class="btns" @click="toggleComponent(CardLayout)">
      Ver en Tarjetas
    </button>
    <button class="btns" @click="toggleComponent(TableLayout)">
      Ver en tabla
    </button>
    <label for="nameUser"></label>
    <input
      id="nameUser"
      type="text"
      placeholder="Buscar por nombre..."
      v-model="searchQuery"
    />
  </div>
  <h3>Modo de vista: {{ layoutName }}</h3>
  <component :is="layout" :content="filteredUsers" />
</template>

<script setup>
import { ref, shallowRef, defineAsyncComponent, computed } from "vue";

//Ahora debemos importar un componente de manera asincrona para no cargarlo hasta que el usuario lo solicite

const ListLayout = defineAsyncComponent(
  () => import("@/layouts/ListLayout.vue"),
);
const CardLayout = defineAsyncComponent(
  () => import("@/layouts/CardLayout.vue"),
);
const TableLayout = defineAsyncComponent(
  () => import("@/layouts/TableLayout.vue"),
);

//Por defecto inicia en modo Lista de usuarios
const layout = shallowRef(ListLayout);

const users = ref([
  { name: "Luis", age: 50, position: "Developer", email:"luis@example.com" },
  { name: "Agustina", age: 24, position: "Developer", email:"agustina@example.com" },
  { name: "Lucho", age: 30, position: "frontend", email:"lucho@example.com" },
  { name: "Peri", age: 11, position: "fullstack", email:"peri@example.com" },
  { name: "Valen", age: 1, position: "backend", email:"valen@example.com" },
  { name: "Pati", age: 40, position: "backend", email:"pati@example.com" },
  { name: "Belu", age: 30, position: "DevOps", email:"belu@example.com" },
  { name: "Saku", age: 4, position: "QA", email:"saku@example.com" },
  { name: "Martina", age: 27, position: "UX Designer", email:"martina@example.com" },
  { name: "Joaquin", age: 32, position: "Product Owner", email:"joaquin@example.com" },
  { name: "Camila", age: 29, position: "Data Analyst", email:"camila@example.com" },
  { name: "Tomas", age: 35, position: "Backend", email:"tomas@example.com" },
  { name: "Sofia", age: 26, position: "Frontend", email:"sofia@example.com" },
  { name: "Mateo", age: 31, position: "Scrum Master", email:"mateo@example.com" },
  { name: "Julieta", age: 28, position: "QA", email:"julieta@example.com" },
  { name: "Franco", age: 33, position: "DevOps", email:"franco@example.com" },
  { name: "Noelia", age: 25, position: "Support", email:"noelia@example.com" },
  { name: "Gonzalo", age: 38, position: "Tech Lead", email:"gonzalo@example.com" },
]);

const toggleComponent = (componentName) => (layout.value = componentName);

const layoutName = computed(() => {
  if (layout.value === ListLayout) return "Lista";
  if (layout.value === CardLayout) return "Tarjetas";
  if (layout.value === TableLayout) return "Tabla";
  return "";
});

const searchQuery = ref("");

const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value;
  return users.value.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>

<style scoped>
.btns {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
