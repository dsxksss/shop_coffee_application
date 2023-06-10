<script setup>
import Home from "../pages/Home.vue"
import My from "../pages/My.vue";
import ProductCar from '../pages/ProductCar.vue';
import Setting from "../pages/setting.vue";
import { inject } from "vue"

const pages = [
    Home,
    ProductCar,
    My,
    Setting
];

</script>

<template>
    <!-- 顶部填充物 -->
    <div class="pt-20 h-screen overflow-hidden">
        <!-- 页面实体内容 -->
        <div class="pl-24 h-full overflow-y-scroll scroll-smooth">

            <component :is="pages[inject('nowPage').value]" />
        </div>
    </div>
</template>