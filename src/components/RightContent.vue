<script setup>
const props = defineProps({
    menu: Boolean
});

const emit = defineEmits(['changeMenu'])
</script>

<template>
    <div class="w-full text-white p-2">
        <button class="btn" @click="emit('changeMenu', menu)">CHANGE ME</button>
    </div>
</template>