<template>
      <tr>
        <td>{{ props.content.name }}</td>
        <td>{{ props.content.age }}</td>
        <td>{{ props.content.position }}</td>
        <td>{{ props.content.email }}</td>
      </tr>
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
td {
  padding: 12px 16px;
  color: #111827;
}

td:nth-child(2) {
  text-align: center;
  font-weight: 600;
}
</style>
