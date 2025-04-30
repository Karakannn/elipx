<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const modalRef = ref(null)

const props = defineProps({
    deviceInfo: {
        type: String,
        default: 'Chrome 131, MacBook Pro M1 Pro'
    }
})

const handleTerminate = () => {
    console.log(`Oturum sonlandırıldı: ${props.deviceInfo}`)
    isOpen.value = false
}

const handleCancel = () => {
    isOpen.value = false
}

defineExpose({
    openModal: () => {
        modalRef.value.open()
    }
})
</script>

<template>
    <BaseDialog ref="modalRef" v-model="isOpen" title="Terminate Session" maxWidth="400px">
        <template #header>
            <h2 class="text-xl font-semibold">Terminate Session</h2>
        </template>

        <div class="px-4 pb-4">
            <p class="text-gray-700">
                Ending a session in {{ deviceInfo }}? It will be impossible to cancel.
            </p>
        </div>

        <template #footer>
            <div class="px-4 pb-4 flex gap-2 justify-between">
                <Button variant="outline" class="bg-gray-100 hover:bg-gray-200 rounded-full w-full"
                    @click="handleCancel">
                    CANCEL
                </Button>
                <Button class="bg-red-500 hover:bg-red-600 text-white rounded-full w-full" @click="handleTerminate">
                    TERMINATE
                </Button>
            </div>
        </template>

        <template #mobile-footer>
            <div class="px-4 pb-4 flex flex-col gap-2">
                <Button class="bg-red-500 hover:bg-red-600 text-white rounded-full w-full" @click="handleTerminate">
                    TERMINATE
                </Button>
                <Button variant="secondary" class="bg-gray-100 hover:bg-gray-200 rounded-full w-full"
                    @click="handleCancel">
                    CANCEL
                </Button>
            </div>
        </template>
    </BaseDialog>
</template>