<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const emailInfo = {
  address: 'JO***@GMAIL.COM',
  addedDate: 'August 3, 2024'
}

const modalRef = ref(null)

const handleChangeEmail = () => {
  console.log('Email değişikliği yapılıyor')
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
    title="Email"
  >
    <template #header>
      <h2 class="text-xl font-semibold">Email</h2>
    </template>
    
    <div class="p-6 pt-4">
      <div class="flex flex-col">
        <p class="font-bold">{{ emailInfo.address }}</p>
        <p class="text-gray-500 text-sm">Added: {{ emailInfo.addedDate }}</p>
      </div>
    </div>
    
    <template #footer>
      <div :class="isDesktop ? 'flex gap-2 justify-between' : ''">
        <Button 
          variant="outline" 
          class="text-gray-600 bg-gray-100 hover:bg-gray-200 w-full"
          @click="isOpen = false"
        >
          CLOSE
        </Button>
        <Button 
          class="bg-blue-500 hover:bg-blue-600 w-full"
          @click="handleChangeEmail"
        >
          CHANGE EMAIL
        </Button>
      </div>
    </template>
    
    <template #mobile-footer>
      <div class="flex flex-col gap-2">
        <Button 
          class="bg-blue-500 hover:bg-blue-600 w-full"
          @click="handleChangeEmail"
        >
          CHANGE EMAIL
        </Button>
        <Button 
          variant="outline" 
          class="text-gray-600 bg-gray-100 hover:bg-gray-200 w-full"
          @click="isOpen = false"
        >
          CLOSE
        </Button>
      </div>
    </template>
  </BaseDialog>
</template>