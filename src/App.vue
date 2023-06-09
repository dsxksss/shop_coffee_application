<script setup>
import "./index.css";
import Menu from "./components/Menu.vue";
import NavBar from './components/NavBar.vue';
import PageContent from "./components/PageContent.vue"
import { ref, provide } from "vue";

const nowPage = ref(0);
provide("nowPage", nowPage);


</script>


<template>
  <main class="h-screen overflow-hidden">
    <!-- 导航栏 -->
    <NavBar data-tauri-drag-region></NavBar>
    <!-- 菜单栏 -->
    <Menu></Menu>
    <!-- 页面容器 -->
    <PageContent></PageContent>
  </main>
</template>