<script setup>
import { BuildingStorefrontIcon } from '@heroicons/vue/24/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import { UserIcon } from '@heroicons/vue/24/solid'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'

import {ref} from "vue";
const items = ref([
    {
        index:1,
        title:"商品",
        iconColor:'',
        component: BuildingStorefrontIcon,
    },
    {
        index:2,
        title:"购物车",
        iconColor:'',
        component: ShoppingCartIcon,
    },
    {
        index:3,
        title:"个人",
        iconColor:'',
        component: UserIcon,
    },
    {
        index:4,
        title:"设置",
        iconColor:'',
        component: Cog6ToothIcon,
    },
]);
</script>

<template>
    <ul class="menu bg-base-200 w-40 rounded-box space-y-4">
        <li v-for="item in items" :key="item.index">
            <a>
               <component :is="item.component" :class="`w-6 h-6 ${item.iconColor}`"></component>
                <span class="text-md">{{ item.title }}</span>
            </a>
        </li>
    </ul>
</template>