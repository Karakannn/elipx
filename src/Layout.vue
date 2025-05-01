<template>
  <div class="app-container custom-container mx-auto">
    <div class="gradient-bg"></div>
    <AppHeader />
    <div class="sm:p-4 space-y-6">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
}

@media (max-width: 992px) {
  .app-container {
    overflow: hidden;
  }
}

.gradient-bg {
  position: absolute;
  width: 50%;
  height: 200px;
  top: 0;
  right: 0;
  opacity: 0.3;
  background: linear-gradient(151.38deg, #f44392 0%, #5cbdfa 100%);
  transform: rotate(-28.62deg);
  filter: blur(100px);
  pointer-events: none;
  z-index: -1;
}
</style>
