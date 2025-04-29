<script setup>
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from '@/components/ui/card'
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

</script>

<template>
  <Card>
    <CardHeader class="p-4 border-b">
      <CardTitle class="text-h4">My Token Allocation</CardTitle>
    </CardHeader>
    <CardContent class="space-y-6">
      <div>
        <div class="flex justify-between items-center">
          <span class="text-caption-12 text-secondary">User Type:</span>
          <span class="text-mono-12 font-mono">PERSONAL</span>
        </div>
        <Separator class="my-2" />
        <div class="flex justify-between items-center">
          <span class="text-caption-12 text-secondary">TGE unlock:</span>
          <span class="text-mono-12 font-mono">5,000 ELX (20%)</span>
        </div>
        <Separator class="my-2" />

        <div class="flex justify-between items-center">
          <span class="text-caption-12 text-secondary">Locked:</span>
          <span class="text-mono-12 font-mono">20,000 ELX</span>
        </div>
        <Separator class="my-2" />

        <div class="flex justify-between items-center">
          <span class="text-caption-12 text-secondary">First unlock:</span>
          <span class="text-mono-12 font-mono">NOV 2025</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mt-6">
        <Button size="lg" variant="secondary" class="text-mono-12 font-mono uppercase ">
          IEO
        </Button>
        <Button size="lg" variant="secondary" class="text-mono-12 font-mono uppercase ">
          ACCOUNT
        </Button>
      </div>

      <div class="text-caption-12">
        <span class="text-secondary">Need help?</span> <a href="#" class="text-accent">Contact Support</a>
      </div>
    </CardContent>
  </Card>
</template>
