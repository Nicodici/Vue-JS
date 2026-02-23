<template>
  <section class="table-container">
    <table class="users-table" aria-label="Tabla de usuarios">
      <colgroup>
        <col class="col-name" />
        <col class="col-age" />
        <col class="col-position" />
        <col class="col-email" />
      </colgroup>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Puesto</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <TableUsers
          v-for="(item, index) in props.content"
          :key="index"
          :content="item"
        />
      </tbody>
    </table>
  </section>
</template>

<script setup>
import TableUsers from "@/components/TableUsers.vue";

const props = defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.table-container {
  width: 100%;
  max-width: 700px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}

.table-title {
  margin: 0;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: 600;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}

.users-table {
  width: 100%;
  border-collapse: collapse;
}

.users-table .col-name {
  width: 20%;
}

.users-table .col-age {
  width: 30%;
}

.users-table .col-position {
  width: 30%;
}

.users-table th {
  padding: 12px 16px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  background: rgb(233, 233, 233);
  border-bottom: 1px solid #e5e7eb;
}

.users-table th:nth-child(2) {
  text-align: center;
}

:deep(tbody tr) {
  border-bottom: 1px solid #eef2f7;
  transition: background-color 0.15s ease;
}

:deep(tbody tr:last-child) {
  border-bottom: none;
}

:deep(tbody tr:hover) {
  background: #f9fbff;
}
</style>
