<script setup>
import "./index.css";
import { ref } from "vue";
import LeftContent from "./components/LeftContent.vue"
import RightContent from "./components/RightContent.vue"
const menuTarget = ref(true);

</script>

<template>
  <div class="flex flex-row h-screen">
    <LeftContent :menu="menuTarget" />
    <RightContent @changeMenu="(t) => menuTarget = !t" :menu="menuTarget" />
  </div>
</template>

<style scoped>

</style>