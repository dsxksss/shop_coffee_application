<script setup>
import TitileMenu from "./TitleMenu.vue";
import IconMenu from "./IconMenu.vue";
const props = defineProps({
    menu: Boolean
});

</script>

<!-- TODO 待优化导航栏 -->

<template>
    <div class="p-2 border-r-2 border-gray-500">
        <TitileMenu v-if="menu" />
        <IconMenu v-else />
    </div>
</template>