<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'
import { SvgIcon } from "@/components/ui/svg-icon";

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')

const modalRef = ref(null)

const handleCopyLink = () => {
    console.log('Link copied')
}

const handleDone = () => {
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
            <div class="flex justify-between items-center w-full">
                <h2 class="text-h4">Scan QR code</h2>
                <Button size="icon" variant="secondary">
                    <SvgIcon name="cross" class="size-5" />
                </Button>
            </div>
        </template>
        <img src="/public/dummy_qr.png" alt="QR Code" class="w-[372px] h-[372px] mx-auto" />

        <template #footer>
            <div class="w-full p-4 pt-0" :class="isDesktop ? 'flex gap-2 justify-between' : ''">
                <Button variant="secondary" size="lg" class="flex-1 text-mono-12" @click="handleCopyLink">
                    COPY LINK
                </Button>
                <Button size="lg" @click="handleDone" class="flex-1 text-mono-12">
                    DONE
                </Button>
            </div>
        </template>

        <template #mobile-footer>
            <div class="flex gap-4">
                <Button variant="secondary" size="lg" class="flex-1 text-mono-12" @click="handleCopyLink">
                    COPY LINK
                </Button>
                <Button size="lg" @click="handleDone" class="flex-1 text-mono-12">
                    DONE
                </Button>
            </div>
        </template>
    </BaseDialog>
</template>