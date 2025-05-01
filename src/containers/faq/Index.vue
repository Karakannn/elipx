<script setup>
import { ref, onMounted, nextTick, computed, watch } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { SvgIcon } from "@/components/ui/svg-icon";

import Documentation from "./components/Documentation.vue";
import FAQSection from "./components/FAQSection.vue";
import Tickets from "./components/Tickets.vue";
import DocumentNavigation from "./components/DocumentNavigation.vue";
import TableOfContents from "./components/TableOfContents.vue";

const container = ref(null);
const indicator = ref(null);
const activeTab = ref("documentation");

const activeTabTitle = computed(() => {
  const tab = tabs.value.find((t) => t.value === activeTab.value);
  return tab ? tab.title : "";
});

const isDocumentationTab = computed(() => activeTab.value === "documentation");

onMounted(() => {
  const updateIndicator = () => {
    const activeTabEl = container.value?.querySelector('[data-state="active"]');
    if (!activeTabEl || !indicator.value) return;

    const tabDiv = activeTabEl.querySelector(".custom-tab-trigger");
    if (!tabDiv) return;

    const tabRect = tabDiv.getBoundingClientRect();
    const containerRect = container.value.getBoundingClientRect();

    indicator.value.style.width = `${tabDiv.offsetWidth}px`;
    indicator.value.style.transform = `translateX(${tabRect.left - containerRect.left}px)`;
  };

  nextTick(updateIndicator);
  window.addEventListener("resize", updateIndicator);
  new MutationObserver(() => nextTick(updateIndicator)).observe(container.value, {
    attributes: true,
    subtree: true,
    attributeFilter: ["data-state"],
  });
});
</script>

<template>
  <div class="flex gap-4 justify-center">
    <div v-if="isDocumentationTab" class="hidden md:block sticky top-1/5 self-start max-h-screen">
      <DocumentNavigation />
    </div>

    <Card class="w-full max-w-[800px]">
      <CardHeader class="p-4 border-b">
        <CardTitle class="text-h4">Support & Documentation</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4 p-0">
        <Tabs v-model="activeTab" default-value="documentation" class="pb-0">
          <div class="relative" ref="container">
            <div class="border-b w-full px-2 overflow-x-auto">
              <TabsList class="space-x-4 border-b">
                <TabsTrigger class="p-0" value="documentation">
                  <div class="custom-tab-trigger">
                    <SvgIcon name="fire" class="size-4" />
                    <span class="text-mono-12">DOCUMENTATION</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger class="p-0" value="faq-section">
                  <div class="custom-tab-trigger">
                    <SvgIcon name="new" class="size-4" />
                    <span class="text-mono-12">FAQ SECTION</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger class="p-0" value="tickets">
                  <div class="custom-tab-trigger">
                    <SvgIcon name="new" class="size-4" />
                    <span class="text-mono-12">TICKETS</span>
                  </div>
                </TabsTrigger>
              </TabsList>
              <div ref="indicator" class="custom-tab-indicator"></div>
            </div>
          </div>
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
      </CardContent>
    </Card>

    <div v-if="isDocumentationTab" class="hidden md:block sticky top-1/5 self-start max-h-screen">
      <TableOfContents />
    </div>
  </div>
</template>

<style scoped></style>
