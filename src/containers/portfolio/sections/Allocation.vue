  <script setup>
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
  import { Progress } from '@/components/ui/progress'

</script>
<template>
  <Card>
    <CardHeader class="p-4 border-b">
      <CardTitle class="text-mono-14">ALLOCATION</CardTitle>
    </CardHeader>
    <CardContent class="space-y-4">

      <Progress class="bg-secondary/10" :model-value="50" />
      
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="w-2 h-2 rounded-full bg-icon-green mr-2"></div>
          <span class="text-mono-12">IN PROGRESS</span>
        </div>
        <div class="text-mono-12">25,000,000 ELX / 50%</div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped></style>