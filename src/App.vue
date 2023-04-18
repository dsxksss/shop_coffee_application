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
  <main class="w-screen overflow-hidden rounded-box">
    <!-- 导航栏 -->
    <NavBar data-tauri-drag-region class="z-10 fixed px-5 border-b-slate-700 border-b-[1px]"></NavBar>
    <!-- 菜单栏 -->
    <Menu class="fixed h-screen flex justify-center flex-col pl-6"></Menu>
    <!-- 页面容器 -->
    <PageContent class="ml-24 mt-20 overflow-scroll"></PageContent>
  </main>
</template>