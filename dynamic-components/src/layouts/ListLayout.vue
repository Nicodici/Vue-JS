<template>
  <h5>Listado de usuarios</h5>
  <div class="listThead">
  <span>Nombre</span>
  <span>Edad</span>
  <span>Posición</span>
  <span>Email</span>
  </div>
  <ListUsers
    v-for="(item, index) in props.content"
    :key="index"
    :content="item"
  />
</template>

<script setup>
import ListUsers from "../components/ListUsers.vue";
const props = defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.listThead{
  width: 100%;
  border: 1px solid rgb(199, 199, 199);
  border-radius: 5px;
  margin: 5px;
  height: 30px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  padding:0 8px;
  box-sizing: border-box;
  color:black;
  background-color: aliceblue;
}
</style>
