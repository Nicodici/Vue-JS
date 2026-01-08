<script setup>
import Vbind from "./components/Vbind.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Variable from "./components/Variable.vue";
import PostCard from "./components/PostCard.vue";
import PostContainer from "./components/PostContainer.vue";
import CounterOptionApi from "./components/CounterOptionApi.vue";
import CounterComposition from "./components/CounterComposition.vue";
</script>
<template>
  <!-- <HeaderComponent></HeaderComponent>
   entrelazamos una variable con v-bind
  <Variable></Variable>
  <Vbind></Vbind> -->

  <div class="app-container" style="display: flex; flex-wrap: wrap; justify-content: center;">
    <CounterComposition></CounterComposition>
  </div>

</template>

<style></style>
