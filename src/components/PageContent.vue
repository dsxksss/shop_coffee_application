<script setup>
import Home from "../pages/Home.vue"
import Product from '../pages/Product.vue';
import {inject} from "vue"

const pages = [
    Home,
    Product,
];

</script>

<template>
    <KeepAlive>
        <component :is="pages[inject('nowPage').value]" />
    </KeepAlive>
</template>