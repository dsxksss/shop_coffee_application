<script setup>
import { ShoppingCartIcon, MinusIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { StopIcon } from '@heroicons/vue/24/outline';
import { appWindow } from '@tauri-apps/api/window'

</script>

<template>
    <div class="navbar bg-base-100">
        <div data-tauri-drag-region class="flex-1">
            <button class="btn btn-ghost text-2xl">商店</button>

        </div>
        <div class="flex-none">
            <div class="flex flex-row items-center space-x-2">
                <input type="text" placeholder="查找商品" class="input w-full max-w-xs h-8" />
                <button class="btn btn-sm btn-ghost btn-square">
                    <MagnifyingGlassIcon class="w-6 h-6" />
                </button>

            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <ShoppingCartIcon class="w-6 h-6" />
                        <span class="badge badge-sm indicator-item text-white bg-red-500 border-0">12</span>
                    </div>
                </label>
                <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div class="card-body">
                        <span class="font-bold text-lg">8 Items</span>
                        <span class="text-info">Subtotal: $999</span>
                        <div class="card-actions">
                            <button class="btn btn-primary btn-block">View cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider divider-horizontal py-2 mx-1"></div>
            <div class="flex flex-row justify-center space-x-2">
                <button @click="appWindow.minimize()" class="btn btn-sm btn-ghost btn-square">
                    <MinusIcon class="w-7 h-7" />
                </button>
                <button @click="appWindow.toggleMaximize()" class="btn btn-sm btn-ghost btn-square">
                    <StopIcon class="w-7 h-7" />
                </button>
                <button @click="appWindow.close()" class="btn btn-sm btn-ghost btn-square">
                    <XMarkIcon class="w-7 h-7" />
                </button>
            </div>
        </div>
    </div>
</template>