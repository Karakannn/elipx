<script setup lang="ts">
import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
} from '@/components/ui/drawer'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, required: true },
  maxWidth: { type: String, default: '425px' },
})

const emit = defineEmits(['update:modelValue'])

const isDesktop = useMediaQuery('(min-width: 768px)')

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

defineExpose({
  open,
  close
})
</script>

<template>
  <!-- Desktop-->
  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogContent :class="`md:max-w-[${maxWidth}] p-0 gap-5`">
      <DialogHeader class="py-5 px-4 gap-4 border-b border-border">
        <slot name="header">
          {{ title }}
        </slot>
      </DialogHeader>

      <slot />

      <!--       <DialogFooter v-if="!$slots['footer']">
        <slot name="footer" />x
      </DialogFooter> -->
    </DialogContent>
  </Dialog>

  <!-- Mobile -->
  <Drawer v-else v-model:open="isOpen">
    <DrawerContent>
      <DrawerHeader class="text-left">
        <slot name="header">
          {{ title }}
        </slot>
      </DrawerHeader>

      <slot />

      <DrawerFooter>

        <div class="w-full flex justify-center">
          <div class="h-[5px] w-[135px] bg-muted rounded-full" />
        </div>

        <slot name="mobile-footer">
          <slot name="footer" />
        </slot>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>