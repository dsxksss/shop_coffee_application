<script setup>
import NavBar from './NavBar.vue';
import ShopCard from './ShopCard.vue';
ShopCard
</script>

<template>
    <div class="w-full static px-4 bg-[#1B202A]">
        <NavBar data-tauri-drag-region />
        <div class="flex flex-wrap flex-auto">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
        </div>
    </div>
</template>