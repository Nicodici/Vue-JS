<template>
  <h5>Componente de tarjetas</h5>
  <div class="container">
    <Card v-for="(item, index) in props.content" :key="index" :content="item" />
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
const props = defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.container {
  width: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
