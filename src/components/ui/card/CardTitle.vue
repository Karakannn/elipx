<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h4
    data-slot="card-title"
    :class="cn(' text-primary', props.class)"
  >
    <slot />
  </h4>
</template>
