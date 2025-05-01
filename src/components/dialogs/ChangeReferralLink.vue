<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'
import { SvgIcon } from "@/components/ui/svg-icon";
import Input from "@/components/ui/input/Input.vue";

const isOpen = ref(false)
const referralLink = ref('ieodashboard.com/friend123')
const modalRef = ref(null)

const handleCancel = () => {
    isOpen.value = false
}

const handleConfirm = () => {
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
            <div class="flex items-center w-full">
                <button class="mr-2 cursor-pointer" @click="handleCancel">
                    <SvgIcon name="chevron-right" class="size-5 rotate-180" />
                </button>
                <h2 class="text-lg font-medium flex-1">Change referral link</h2>
                <button @click="handleCancel">
                    <SvgIcon name="cross" class="size-5" />
                </button>
            </div>
        </template>

        <div class="p-4">

            <div class="space-y-2 relative">
                <label class="absolute bg-card -translate-y-1/2 px-3 py-1 text-caption-12 text-secondary"> Edit
                    Link</label>
                <Input v-model="referralLink" type="text" placeholder="Enter a brief subject" class="w-full" required />
            </div>
        </div>


        <template #footer>
            <div class="w-full p-4 pt-0 flex gap-2 justify-between">
                <Button variant="secondary" size="lg" class="flex-1 text-mono-12">
                    CANCEL
                </Button>
                <Button size="lg" class="flex-1 text-mono-12" @click="handleConfirm">
                    CONFIRM
                </Button>
            </div>
        </template>

        <template #mobile-footer>
            <div class="flex gap-4">
                <Button variant="secondary" size="lg" class="flex-1 text-mono-12">
                    CANCEL
                </Button>
                <Button size="lg" class="flex-1 text-mono-12" @click="handleConfirm">
                    CONFIRM
                </Button>
            </div>
        </template>

    </BaseDialog>
</template>