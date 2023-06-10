<script setup>
import { ShoppingCartIcon, MinusIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { StopIcon } from '@heroicons/vue/24/outline';
import { appWindow } from '@tauri-apps/api/window'
import { platform } from "@tauri-apps/api/os"
import { inject } from 'vue';
import menuItems from '../data/menuItems';

async function toggleMaximizeButton() {
    const platformName = await platform();
    const isFullscreen = await appWindow.isFullscreen();
    //  如果系统为win，最大化按钮对应最大化功能
    if (platformName === 'win32') {
        appWindow.toggleMaximize()
    }
    //  如果系统为macos，最大化按钮对应则为全屏功能
    else if (platformName === 'darwin') {
        if (isFullscreen) {
            appWindow.setFullscreen(false)
        } else {
            appWindow.setFullscreen(true)
        }
    }
    //  如果为其他系统，最大化按钮对应最大化功能
    else {
        appWindow.toggleMaximize()
    }
}


</script>

<template>
    <div class="navbar z-10 fixed top-0 px-5 border-b-slate-700 border-b-[1px]">
        <div data-tauri-drag-region class="flex-1">
            <button class="btn btn-ghost text-2xl">
                <component :is="menuItems[inject('nowPage').value].component"
                    :class="`w-6 h-6 ${menuItems[inject('nowPage').value].iconColor}`"></component>
                {{ menuItems[inject('nowPage').value].title }}
            </button>

        </div>
        <div class="flex-none">
            <div v-if="menuItems[inject('nowPage').value].index == 0" class="flex flex-row items-center space-x-2">
                <button class="btn btn-ghost btn-circle">
                    <MagnifyingGlassIcon class="w-7 h-7" />
                </button>
            </div>
            <div v-if="menuItems[inject('nowPage').value].index != 1" class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <ShoppingCartIcon class="w-6 h-6" />
                        <span class="badge badge-sm indicator-item text-white bg-red-500 border-0">12</span>
                    </div>
                </label>
            </div>
            <div v-if="menuItems[inject('nowPage').value].index != 1" class="divider divider-horizontal py-2 mx-1"></div>
            <div class="flex flex-row justify-center space-x-2">
                <button @click="appWindow.minimize" class="btn btn-sm btn-ghost btn-square">
                    <MinusIcon class="w-7 h-7" />
                </button>
                <button @click="toggleMaximizeButton" class="btn btn-sm btn-ghost btn-square">
                    <StopIcon class="w-7 h-7" />
                </button>
                <button @click="appWindow.close" class="btn btn-sm btn-ghost btn-square">
                    <XMarkIcon class="w-7 h-7" />
                </button>
            </div>
        </div>
    </div>
</template>