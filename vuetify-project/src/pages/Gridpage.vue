<template>
  <v-container fluid height="100vh">
    <h1>Grid View</h1>
    <v-row justify="center" align-content="center">
      <v-col cols="4" class="bg-primary">1 - 1</v-col>
      <v-col cols="4" class="bg-secondary">1 - 2</v-col>
      <v-col cols="4" class="bg-grey">1 - 3</v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="bg-primary">2 - 1</v-col>
      <v-col cols="4" class="bg-secondary">2 - 2</v-col>
      <v-col cols="4" class="bg-grey">2 - 3</v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="bg-primary">3 - 1</v-col>
      <v-col cols="4" class="bg-secondary">3 - 2</v-col>
      <v-col cols="4" class="bg-grey">3 - 2</v-col>
      <v-spacer>
        <!-- No importa la cantidad de columnas, el v-spacer ocupa el espacio restante -->
        <v-col cols="1" class="bg-red">3 - 3</v-col>
      </v-spacer>

      <v-col cols="4" class="bg-grey">4 - 3</v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped>
.v-container {
  border: 1px solid red;
  margin: 10px;
}
.v-row {
  border: 1px solid blue;
  margin: auto;
  gap: 6px;
}
.v-col {
  border: 1px solid green;
  height: 100px;
  margin: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
