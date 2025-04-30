<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import Documentation from "./components/Documentation.vue";
import FAQSection from "./components/FAQSection.vue";
import Tickets from "./components/Tickets.vue";
import { Button } from "@/components/ui/button";
import { SvgIcon } from "@/components/ui/svg-icon";

</script>
<template>
  <Card>
    <CardHeader class="p-4 border-b">
      <CardTitle class="text-h4">Support&Documentation</CardTitle>
    </CardHeader>
    <CardContent class="space-y-4">
      <Tabs default-value="documentation">
        <TabsList class="space-x-1 border-b w-full">
          <TabsTrigger asChild value="documentation">
            <Button class="px-2 py-2" variant="tertiary">
              <SvgIcon name="fire" class="size-4" />
              <span class="text-[12px]">DOCUMENTATION</span>
            </Button>
          </TabsTrigger>
          <TabsTrigger asChild value="faq-section">
            <Button class="px-2 py-2" variant="tertiary">
              <SvgIcon name="new" class="size-4" />
              <span class="text-[12px]">FAQ SECTION</span>
            </Button>
          </TabsTrigger>

          <TabsTrigger asChild value="tickets">
            <Button class="px-2 py-2" variant="tertiary">
              <SvgIcon name="new" class="size-4" />
              <span class="text-[12px]">TICKETS</span>
            </Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="documentation">
          <Documentation  />
        </TabsContent>
        <TabsContent value="faq-section">
          <FAQSection  />
        </TabsContent>
        <TabsContent value="tickets">
          <Tickets  />
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
</template>
