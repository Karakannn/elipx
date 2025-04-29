<template>
    <div class="bg-white rounded-lg shadow-sm p-6 w-full max-w-[500px] mx-auto">
      <h2 class="text-lg font-medium mb-6">IEO Timeline</h2>
      
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
        
        <!-- Timeline progress -->
        <div class="absolute top-1/2 left-0 w-1/2 h-0.5 bg-green-500 -translate-y-1/2"></div>
        
        <!-- Timeline points -->
        <div class="relative flex justify-between">
          <!-- PRIVATE -->
          <div class="flex flex-col items-center">
            <div class="w-3 h-3 rounded-full bg-green-500 mb-2 z-10"></div>
            <span class="text-xs font-medium">PRIVATE</span>
          </div>
          
          <!-- PUBLIC -->
          <div class="flex flex-col items-center">
            <div class="w-3 h-3 rounded-full bg-green-500 mb-2 z-10"></div>
            <span class="text-xs font-medium">PUBLIC</span>
          </div>
          
          <!-- TGE -->
          <div class="flex flex-col items-center">
            <div class="w-3 h-3 rounded-full bg-gray-300 mb-2 z-10"></div>
            <span class="text-xs font-medium">TGE</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional imports needed
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>