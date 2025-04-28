<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <!--   <span class="text-h1">Suisse Intl</span> -->
  <Button size="lg" variant="secondary">
    <img src="/public/plus.svg" class="size-4" alt="" />
    <span class="font-mono text-mono-12">BUTTON</span>
    <img src="/public/plus.svg" class="size-4" alt="" />
  </Button>
</template>


<style scoped>


</style>
