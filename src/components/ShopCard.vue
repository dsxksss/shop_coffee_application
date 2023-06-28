<script setup>
import { CurrencyYenIcon } from "@heroicons/vue/24/solid"
const props = defineProps({
    image: String,
    title: String,
    description: String,
})
</script>

<template>
    <div class="card card-compact shadow-xl w-64 m-4">
        <figure class="bg-cover h-40 bg-bottom">
            <img :src="image || '/coffeeShop1.jpg'" :alt="title" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ title || "没有标题" }}</h2>
            <p>{{ description || "没有描述没有描述没有描述没有描述没有描述没有描述没有描述" }}</p>
            <div class="card-actions space-x-2 pt-2 justify-center items-center">
                <div class="flex flex-row">
                    <span class="text-3xl font-black">19.5</span>
                    <CurrencyYenIcon class="w-6 h-6" />
                </div>
                <button class="btn btn-ghost text-lg">现在购买</button>
            </div>
        </div>
    </div>
</template>