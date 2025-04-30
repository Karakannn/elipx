<script setup>
defineProps({
    value: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['toggle']);

const toggleSwitch = () => {
    emit('toggle');
};
</script>

<template>
    <div @click="toggleSwitch" :class="[
        'w-10 h-8 rounded-full flex items-center justify-center text-mono-12 cursor-pointer transition-colors duration-200',
        value ? 'bg-accent text-white' : 'bg-secondary/10 text-primary'
    ]">
        {{ value ? 'ON' : 'OFF' }}
    </div>
</template>