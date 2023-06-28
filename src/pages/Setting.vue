<script setup>
import { ref, inject, onMounted } from "vue"
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

onMounted(() => {
    isDark.value = theme.value == "dark" ? true : false
})

const isDark = ref(false)
const theme = inject("theme")

function changeTheme(changeTheme) {
    theme.value = changeTheme
    isDark.value = !isDark.value
}

</script>

<template>
    <div>
        <button @click="changeTheme(isDark ? 'light' : 'dark')" class="btn btn-sm btn-ghost btn-square">
            <MoonIcon v-if="isDark" class="w-5 h-5" />
            <SunIcon v-else class="w-7 h-7" />
        </button>
    </div>
</template>