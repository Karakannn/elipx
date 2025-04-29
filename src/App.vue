<script setup lang="ts">
</script>

<template>
  <div class="app-container">
    <div class="gradient-bg"></div>
    <router-view />
  </div>
</template>

<style>
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
  background: linear-gradient(151.38deg, #F44392 0%, #5CBDFA 100%);
  transform: rotate(-28.62deg);
  filter: blur(100px);
  pointer-events: none;
  z-index: -1;
}
</style>
