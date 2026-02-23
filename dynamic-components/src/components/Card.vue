<template>
  <div class="card">
    <h3>{{ props.content.name }}</h3>
    <p><strong>Edad:</strong> {{ props.content.age }}</p>
    <p><strong>Posición:</strong> {{ props.content.position }}</p>
    <p><strong>Email:</strong> {{ props.content.email }}</p>
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
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 230px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
