<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'
import { SvgIcon } from "@/components/ui/svg-icon";

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const modalRef = ref(null)
const handleChangePhone = () => {
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
      <h2 class="text-h4">Change phone number?</h2>
    </template>

    <div class="p-4 pt-0">
      <p class="text-paragraph-14">
        Are you sure you want to change your phone number? This action cannot be reversed
      </p>
    </div>

    <template #footer>
      <div class="w-full p-4 pt-0" :class="isDesktop ? 'flex gap-2 justify-between' : ''">
        <Button variant="secondary" size="lg" class="flex-1 text-mono-12" @click="isOpen = false">
          CLOSE
        </Button>
        <Button size="lg" @click="handleChangePhone" class="flex-1 text-mono-12">
          CHANGE PHONE
        </Button>
      </div>
    </template>

    <template #mobile-footer>
      <div class="flex gap-4">
        <Button variant="secondary" size="lg" class="flex-1 text-mono-12" @click="isOpen = false">
          CLOSE
        </Button>
        <Button size="lg" @click="handleChangePhone" class="flex-1 text-mono-12">
          CHANGE PHONE
        </Button>
      </div>
    </template>
  </BaseDialog>
</template>