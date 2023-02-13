<script setup>
import menuItems from "../data/menuItems"
import { ref, inject } from "vue";
let items = ref(menuItems);
const nowPage = inject('nowPage')

function changePage(pageIndex) {
    items.value.forEach(item => item.isActive = item.index === pageIndex);
    nowPage.value = pageIndex;
}

</script>

<template>
    <ul class="menu rounded-box p-2 space-y-2">
        <li v-for="item in items" :key="item.index">
            <a :class="item.isActive ? 'active' : null" @click="changePage(item.index)">
                <component :is="item.component" :class="`w-6 h-6 ${item.iconColor}`"></component>
            </a>
        </li>
    </ul>
</template>