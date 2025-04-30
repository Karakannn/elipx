<script setup>
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from "@/components/ui/separator";

</script>

<template>

  <Card>
    <CardHeader class="p-4 border-b">
      <CardTitle class="text-h4">Purchase Summary</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex justify-between items-center">
        <span class="text-caption-12 text-secondary">Total invested:</span>
        <span class="text-mono-12">450 USDT</span>
      </div>
      <Separator class="my-2 bg-border" />
      <div class="flex justify-between items-center">
        <span class="text-caption-12 text-secondary">Avg. token price:</span>
        <span class="text-mono-12">$0.03</span>
      </div>
      <Separator class="my-2 bg-border" />
      <div class="flex justify-between items-center">
        <span class="text-caption-12 text-secondary">Rounds participated:</span>
        <span class="text-mono-12">PRIVATE SALE</span>
      </div>
      <Separator class="my-2 bg-border" />

    </CardContent>
  </Card>

</template>



<style scoped></style>