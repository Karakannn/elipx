<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
</script>

<template>
  <Card>
    <CardHeader class="p-4 border-b">
      <CardTitle class="text-h4">IEO Timeline</CardTitle>
    </CardHeader>
    <CardContent class="p-4">
      <div class="relative py-4">
        <div class="relative">
          <div class="h-0.5 w-full bg-icon-secondary/29 mb-6"></div>

          <div class="absolute top-0 left-0 h-0.5 bg-icon-green w-1/2"></div>

          <div class="absolute top-0 w-full flex justify-between transform -translate-y-1/2">
            <div class="w-1.5 h-1.5 rounded-full bg-icon-green"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-icon-green"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
        </div>

        <div class="flex justify-between">
          <div class="text-mono-12 font-mono uppercase">PRIVATE</div>
          <div class="text-mono-12 -translate-x-1/3 font-mono uppercase">PUBLIC</div>
          <div class="text-mono-12 font-mono uppercase">TGE</div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped></style>
