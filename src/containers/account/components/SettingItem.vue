<template>
    <div class="flex items-center justify-between py-5 border-b border-border">
        <div class="flex gap-3 items-start">
            <slot name="icon"></slot>
            <div class="space-y-0.5">
                <div class="text-mono-10 uppercase text-primary" v-if="label">{{ label }}</div>
                <div class="text-mono-12" v-if="value">{{ value }}
                    <span v-if="verified" class="text-icon-green text-mono-12">
                        (VERIFIED)
                    </span>

                </div>
                <div class="text-caption-10 text-secondary" v-if="description">{{ description }}</div>
            </div>
        </div>

        <slot name="action" v-if="hasActionSlot"></slot>
    </div>
</template>

<script setup>
import { useSlots, computed } from 'vue';

const slots = useSlots();
const hasActionSlot = computed(() => !!slots.action);

defineProps({
    label: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    verified: {
        type: Boolean,
        default: false
    }
});
</script>