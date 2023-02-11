<script setup>
import { BuildingStorefrontIcon } from '@heroicons/vue/24/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import { UserIcon } from '@heroicons/vue/24/solid'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'

import { ref } from "vue";
const items = ref([
    {
        index: 0,
        title: "商品",
        iconColor: '',
        component: BuildingStorefrontIcon,
    },
    {
        index: 1,
        title: "购物车",
        iconColor: '',
        component: ShoppingCartIcon,
    },
    {
        index: 2,
        title: "个人",
        iconColor: '',
        component: UserIcon,
    },
    {
        index: 3,
        title: "设置",
        iconColor: '',
        component: Cog6ToothIcon,
    },
]);

function changePage(pageIndex) {
    items.value[pageIndex].title = "选中";
}

</script>

<template>
    <div data-tauri-drag-region class="flex flex-row space-x-1 justify-center items-end py-4 h-16 mb-11">
        <div class="h-full">
            <svg class="w-16 h-16 fill-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path data-tauri-drag-region
                    d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z" />
            </svg>
        </div>
    </div>

    <ul class="menu space-y-2">
        <li v-for="item in items" :key="item.index">
            <a :class="item.index == 0 ? 'active rounded-box' : 'rounded-box'" @click="changePage(item.index)">
                <component :is="item.component" :class="`w-6 h-6 ${item.iconColor}`"></component>
                <span class="w-28 truncate text-md">{{ item.title }}</span>
            </a>
        </li>
    </ul>
</template>