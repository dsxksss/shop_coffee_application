<script setup>
import { BuildingStorefrontIcon } from '@heroicons/vue/24/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import { UserIcon } from '@heroicons/vue/24/solid'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'

import {ref} from "vue";
const items = ref([
    {
        index:0,
        title:"商品",
        iconColor:'',
        component: BuildingStorefrontIcon,
    },
    {
        index:1,
        title:"购物车",
        iconColor:'',
        component: ShoppingCartIcon,
    },
    {
        index:2,
        title:"个人",
        iconColor:'',
        component: UserIcon,
    },
    {
        index:3,
        title:"设置",
        iconColor:'',
        component: Cog6ToothIcon,
    },
]);

function changePage(pageIndex){
    items.value[pageIndex].title = "选中";
}

</script>

<template>
    <ul class="menu bg-info text-white w-56 rounded-box space-y-2">
        <li class="hover:bg-secondary transition" v-for="item in items" :key="item.index">
            <a @click="changePage(item.index)">
               <component :is="item.component" :class="`w-6 h-6 ${item.iconColor}`"></component>
                <span class="text-md">{{ item.title }}</span>
            </a>
        </li>
    </ul>
</template>