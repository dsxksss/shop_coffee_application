<script setup>
import { useRouter} from "vue-router"
import menuItems from "../data/menuItems"
import { ref } from "vue";
const router = useRouter()
const items = ref(menuItems);

</script>

<template>
    <ul class="fixed top-0 h-screen justify-center pl-6 menu rounded-box p-2 space-y-2">
        <li v-for="item in items" :key="item.path">
            <RouterLink :to="item.path" :class="router.currentRoute.value.path == item.path ? 'active' : null">
                <component :is="item.component" :class="`w-6 h-6 ${item.iconColor}`"></component>
            </RouterLink>
        </li>
    </ul>
</template>