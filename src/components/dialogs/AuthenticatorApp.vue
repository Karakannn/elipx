<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'
import { SvgIcon } from "@/components/ui/svg-icon";

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
  <BaseDialog ref="modalRef" v-model="isOpen" maxWidth="412px">

    <template #header>
      <div class="flex justify-between items-center w-full">
        <h2 class="text-h4">Authenticator App Verification</h2>
        <Button size="icon" variant="secondary">
          <SvgIcon name="cross" class="size-5" />
        </Button>
      </div>
    </template>


    <div class="p-4 pt-0">
      <p class="text-paragraph-14">
        Instead of waiting for text messages, get verification codes from an authenticator app like Google
        Authenticator. It
        works even if your phone is offline.
      </p>
    </div>

    <!-- TODO: change button size -->
    <template #footer>
      <div class="w-full p-4 pt-0">
        <Button size="lg" class="w-full " @click="handleEnable">
          <span class="text-mono-12">ENABLE</span>
        </Button>
      </div>
    </template>

    <template #mobile-footer>
      <Button size="lg" class="w-full " @click="handleEnable">
        <span class="text-mono-12">ENABLE</span>
      </Button>
    </template>
  </BaseDialog>
</template>