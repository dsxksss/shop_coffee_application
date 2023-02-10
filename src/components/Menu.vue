<script setup>
import { BeakerIcon } from '@heroicons/vue/24/solid'
import {ref} from "vue";
const items = ref([
    {
        index:1,
        title:"title 1",
        component:BeakerIcon,
    },
    {
        index:2,
        title:"title 2",
        component:BeakerIcon,
    },
    {
        index:3,
        title:"title 3",
        component:BeakerIcon,
    },
]);
</script>

<template>
    <ul class="menu bg-base-200 w-40 rounded-box space-y-4">
        <li v-for="item in items" :key="item.index">
            <a>
               <component :is="item.component" class="w-6 h-6"></component>
                <span>{{ item.title }}</span>
            </a>
        </li>
    </ul>
</template>