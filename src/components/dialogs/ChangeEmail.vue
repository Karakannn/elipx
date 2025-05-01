<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'
import { SvgIcon } from "@/components/ui/svg-icon";

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const emailInfo = {
  address: 'j***oh@gmail.com',
  addedDate: 'August 3, 2024.'
}

const modalRef = ref(null)

const handleChangeEmail = () => {
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
        <h2 class="text-h4">Email</h2>
        <Button size="icon" variant="secondary">
          <SvgIcon name="cross" class="size-5" />
        </Button>
      </div>
    </template>
    <div class="p-4 pt-0">
      <div class="flex flex-col">
        <p class="text-paragraph-16">{{ emailInfo.address }}</p>
        <p class="text-paragraph-14 text-secondary">Added: {{ emailInfo.addedDate }}</p>
      </div>
    </div>

    <template #footer>
      <div class="w-full p-4 pt-0" :class="isDesktop ? 'flex gap-2 justify-between' : ''">
        <Button variant="secondary" size="lg" class="flex-1 text-mono-12" @click="isOpen = false">
          CLOSE
        </Button>
        <Button size="lg" @click="handleChangeEmail" class="flex-1 text-mono-12">
          CHANGE EMAIL
        </Button>
      </div>
    </template>

    <template #mobile-footer>
      <div class="flex gap-4">
        <Button variant="secondary" size="lg" class="flex-1 text-mono-12" @click="isOpen = false">
          CLOSE
        </Button>
        <Button size="lg" @click="handleChangeEmail" class="flex-1 text-mono-12">
          CHANGE EMAIL
        </Button>
      </div>
    </template>
  </BaseDialog>
</template>