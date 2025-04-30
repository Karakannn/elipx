<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const modalRef = ref(null)
const handleChangePhone = () => {
  console.log('Telefon numarası değiştiriliyor')
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
    title="Change phone number?"
  >
    <template #header>
      <h2 class="text-xl font-semibold">Change phone number?</h2>
    </template>
    
    <div class="px-6 pb-6">
      <p class="text-gray-700">
        Are you sure you want to change your phone number? This action cannot be reversed
      </p>
    </div>
    
    <template #footer>
      <div :class="isDesktop ? 'flex gap-2 justify-between' : ''">
        <Button 
          variant="outline" 
          class="text-gray-600 bg-gray-100 hover:bg-gray-200 w-full rounded-full"
          @click="isOpen = false"
        >
          CANCEL
        </Button>
        <Button 
          class="bg-blue-500 hover:bg-blue-600 w-full rounded-full"
          @click="handleChangePhone"
        >
          CHANGE PHONE
        </Button>
      </div>
    </template>
    
    <template #mobile-footer>
      <div class="flex flex-col gap-2">
        <Button 
          class="bg-blue-500 hover:bg-blue-600 w-full rounded-full"
          @click="handleChangePhone"
        >
          CHANGE PHONE
        </Button>
        <Button 
          variant="outline" 
          class="text-gray-600 bg-gray-100 hover:bg-gray-200 w-full rounded-full"
          @click="isOpen = false"
        >
          CANCEL
        </Button>
      </div>
    </template>
  </BaseDialog>
</template>