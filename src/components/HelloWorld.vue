<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppHeader from "@/components/AppHeader.vue";
import Portfolio from "@/containers/portfolio/Index.vue";

defineProps<{ msg: string }>();

</script>

<template>
  <AppHeader />
  <Portfolio />

</template>


<style scoped></style>
