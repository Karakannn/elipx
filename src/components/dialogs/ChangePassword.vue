<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const modalRef = ref(null)

const handleChangePassword = () => {
    console.log('Şifre değiştirme işlemi başlatıldı')
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
    <BaseDialog ref="modalRef" v-model="isOpen" title="Change your password?" maxWidth="400px">
        <template #header>
            <h2 class="text-xl font-semibold">Change your password?</h2>
        </template>

        <div class="px-4 pb-4">
            <p class="text-gray-700">
                Are you sure you want to change your password? This action cannot be reversed
            </p>
        </div>

        <template #footer>
            <div class="px-4 pb-4 flex gap-2 justify-between">
                <Button variant="outline" class="bg-gray-100 hover:bg-gray-200 rounded-full w-full"
                    @click="handleCancel">
                    CANCEL
                </Button>
                <Button class="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full"
                    @click="handleChangePassword">
                    CHANGE PASSWORD
                </Button>
            </div>
        </template>

        <template #mobile-footer>
            <div class="px-4 pb-4 flex flex-col gap-2">
                <Button class="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full"
                    @click="handleChangePassword">
                    CHANGE PASSWORD
                </Button>
                <Button variant="secondary" class="bg-gray-100 hover:bg-gray-200 rounded-full w-full"
                    @click="handleCancel">
                    CANCEL
                </Button>
            </div>
        </template>
    </BaseDialog>
</template>