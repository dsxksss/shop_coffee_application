<script setup>
import "./index.css";
import Menu from "./components/Menu.vue";
import NavBar from './components/NavBar.vue';
import PageContent from "./components/PageContent.vue"
import { ref, provide } from "vue";

const theme = ref("dark");
provide("theme", theme);


</script>


<template>
  <main :data-theme="theme" class="h-screen overflow-hidden">
    <!-- 导航栏 -->
    <NavBar data-tauri-drag-region></NavBar>
    <!-- 菜单栏 -->
    <Menu></Menu>
    <!-- 页面容器 -->
    <PageContent></PageContent>
  </main>
</template>