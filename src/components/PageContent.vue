<script setup>
import Home from "../pages/Home.vue"
import My from "../pages/my.vue";
import Product from '../pages/Product.vue';
import Setting from "../pages/setting.vue";
import {inject} from "vue"

const pages = [
    Home,
    Product,
    My,
    Setting
];

</script>

<template>
    <KeepAlive>
        <component :is="pages[inject('nowPage').value]" />
    </KeepAlive>
</template>