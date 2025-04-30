<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const modalRef = ref(null)

const handleEnable = () => {
  console.log('Authenticator App etkinleştirildi')
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
    title="Authenticator App Verification"
    maxWidth="400px"
  >
    <template #header>
      <h2 class="text-xl font-semibold">Authenticator App Verification</h2>
    </template>
    
    <div class="px-4 pb-4">
      <p class="text-sm text-gray-700">
        Instead of waiting for text messages, get verification codes from an authenticator app like Google Authenticator. It works even if your phone is offline.
      </p>
    </div>
    
    <template #footer>
      <div class="p-4">
        <Button 
          class="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full"
          @click="handleEnable"
        >
          ENABLE
        </Button>
      </div>
    </template>
    
    <template #mobile-footer>
      <div class="p-4">
        <Button 
          class="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full"
          @click="handleEnable"
        >
          ENABLE
        </Button>
      </div>
    </template>
  </BaseDialog>
</template>