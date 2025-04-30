<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const modalRef = ref(null)

const props = defineProps({
    appName: {
        type: String,
        default: 'Metamask'
    },
    appIcon: {
        type: String,
        default: '/metamask-icon.svg' 
    },
    connectedDate: {
        type: String,
        default: 'May 23, 2024'
    }
})

const handleDisconnect = () => {
    isOpen.value = false
}

defineExpose({
    openModal: () => {
        modalRef.value.open()
    }
})
</script>

<template>
    <BaseDialog
        ref="modalRef"
        v-model="isOpen"
        title="Disconnect app"
        maxWidth="400px"
    >
        <template #header>
            <h2 class="text-xl font-semibold">Disconnect app</h2>
        </template>
        
        <div class="p-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden">
                    <img v-if="appIcon" :src="appIcon" alt="App icon" class="w-6 h-6" />
                    <span v-else class="text-white font-bold">{{ appName.charAt(0) }}</span>
                </div>
                <div>
                    <p class="font-semibold">{{ appName }}</p>
                    <p class="text-gray-500 text-sm">Connected {{ connectedDate }}</p>
                </div>
            </div>
        </div>
        
        <template #footer>
            <div class="p-4 flex gap-2 justify-between">
                <Button 
                    variant="secondary" 
                    class="bg-gray-100 hover:bg-gray-200 rounded-full w-full" 
                    @click="isOpen = false"
                >
                    CLOSE
                </Button>
                <Button 
                    class="bg-red-500 hover:bg-red-600 text-white rounded-full w-full" 
                    @click="handleDisconnect"
                >
                    DISCONNECT
                </Button>
            </div>
        </template>
        
        <template #mobile-footer>
            <div class="p-4 flex flex-col gap-2">
                <Button 
                    class="bg-red-500 hover:bg-red-600 text-white rounded-full w-full" 
                    @click="handleDisconnect"
                >
                    DISCONNECT
                </Button>
                <Button 
                    variant="secondary" 
                    class="bg-gray-100 hover:bg-gray-200 rounded-full w-full" 
                    @click="isOpen = false"
                >
                    CLOSE
                </Button>
            </div>
        </template>
    </BaseDialog>
</template>