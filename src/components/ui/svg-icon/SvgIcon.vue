<script setup lang="ts">
import { computed } from 'vue';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils'

const props = defineProps<{
    name: string;
    width?: number | string;
    height?: number | string;
    class?: HTMLAttributes['class'];
}>();

defineOptions({
    inheritAttrs: false
});
</script>

<template>
    <svg :width="props.width" :height="props.height" :class="cn(props.class)" v-bind="$attrs">
        <use :xlink:href="`/public/sprite.svg#${props.name}`" />
    </svg>
</template>
