<template>
  <div class="bg-gray-50 min-h-screen p-4 md:p-8">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6">
      <h1 class="text-2xl font-semibold mb-6">Support&Documentation</h1>

      <Tabs default-value="documentation">
        <TabsList class="space-x-1 text-mono-12 font-mono">
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
          <Documentation />
        </TabsContent>
        <TabsContent value="faq-section">
          <FAQSection />
        </TabsContent>
        <TabsContent value="tickets">
          <Tickets />
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import Documentation from "./components/Documentation.vue";
import FAQSection from "./components/FAQSection.vue";
import Tickets from "./components/Tickets.vue";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
</script>
