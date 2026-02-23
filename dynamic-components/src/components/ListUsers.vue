<template>
  <div class="list">
    <span>{{ props.content.name }}</span>
    <span>{{ props.content.age }}</span>
    <span>{{ props.content.position }}</span>
    <span>{{ props.content.email }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.list {
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
  
}
.list:hover{
  background: rgb(54, 54, 54);
}
</style>
