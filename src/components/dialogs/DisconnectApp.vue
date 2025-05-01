<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'
import { SvgIcon } from "@/components/ui/svg-icon";

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
    <BaseDialog ref="modalRef" v-model="isOpen" maxWidth="412px">

        <template #header>
            <h2 class="text-h4">Disconnect app</h2>
        </template>
        <div class="p-4 pt-0">
            <div class="flex items-center gap-3">
                <div class="rounded-full bg-primary p-1">
                    <SvgIcon name="metamask" class="size-7" />
                </div>
                <div>
                    <p class="text-paragraph-16">{{ appName }}</p>
                    <p class="text-paragraph-14 text-secondary">Connected {{ connectedDate }}</p>
                </div>
            </div>
        </div>


        <template #footer>
            <div class="w-full p-4 pt-0" :class="isDesktop ? 'flex gap-2 justify-between' : ''">
                <Button variant="secondary" size="lg" class="flex-1 text-mono-12" @click="isOpen = false">
                    CLOSE
                </Button>
                <Button variant="destructive" class="flex-1 text-mono-12" @click="handleDisconnect">
                    DISCONNECT
                </Button>
            </div>
        </template>



        <template #mobile-footer>
            <div class="flex gap-4">
                <Button variant="secondary" size="lg" class="flex-1 text-mono-12" @click="isOpen = false">
                    CLOSE
                </Button>
                <Button variant="destructive" class="flex-1 text-mono-12" @click="handleDisconnect">
                    DISCONNECT
                </Button>
            </div>
        </template>
    </BaseDialog>
</template>