<script setup lang="ts">
import { useCarousel } from './useCarousel'
import { Button } from '@/components/ui/button'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const { carouselApi } = useCarousel()
const forceUpdate = ref(0)

const updateState = () => {
    forceUpdate.value += 1
}

onMounted(() => {
    if (carouselApi.value) {
        carouselApi.value.on('select', updateState)
        carouselApi.value.on('reInit', updateState)
    }
})

onBeforeUnmount(() => {
    if (carouselApi.value) {
        carouselApi.value.off('select', updateState)
        carouselApi.value.off('reInit', updateState)
    }
})

const numberOfSlides = computed(() => {
    return carouselApi.value?.scrollSnapList().length || 0
})

const currentSlide = computed(() => {
    return carouselApi.value?.selectedScrollSnap() || 0
})

const dots = computed(() => {
    if (forceUpdate.value >= 0 && numberOfSlides.value > 1) {
        return Array.from({ length: numberOfSlides.value }, (_, i) => i)
    }
    return []
})

const scrollTo = (index: number) => {
    carouselApi.value?.scrollTo(index)
}
</script>

<template>
    <div v-if="numberOfSlides > 1" :class="`flex justify-center ${props.class || ''}`">
        <Button v-for="index in dots" :key="index" :class="`mx-1 h-1.5 w-1.5 rounded-full p-0 ${index === currentSlide
            ? 'scale-125 transform bg-primary-inverse hover:bg-primary-inverse'
            : 'bg-secondary-inverse hover:bg-secondary-inverse'
            }`" :aria-label="`${index + 1} numaralı slayta git`" @click="scrollTo(index)" />
    </div>
</template>