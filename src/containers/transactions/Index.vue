<script setup>
import { ref, onMounted, nextTick, computed, watch } from "vue";
import Table from "./components/Table.vue";
import SvgIcon from "@/components/ui/svg-icon/SvgIcon.vue";
import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const activeTab = ref("my-transactions");
const container = ref(null);
const indicator = ref(null);

const activeTabTitle = computed(() => {
  const tab = tabs.value.find((t) => t.value === activeTab.value);
  return tab ? tab.title : "";
});

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
  <Card>
    <CardHeader class="p-4 border-b">
      <CardTitle class="text-h4">Transactions</CardTitle>
    </CardHeader>
    <CardContent class="p-0">
      <Tabs v-model="activeTab" default-value="my-transactions" class="pb-0">
        <div class="relative" ref="container">
          <div class="border-b w-full px-3 overflow-x-auto">
            <TabsList class="space-x-4 border-b">
              <TabsTrigger class="p-0" value="my-transactions">
                <span class="custom-tab-trigger text-mono-12 text-primary">ALL TRANSACTION</span>

              </TabsTrigger>
              <TabsTrigger class="p-0" value="all-transactions">
                <span class="custom-tab-trigger normal-case  text-caption-12">See <span class="text-accent">All Transactions</span></span>

              </TabsTrigger>
            </TabsList>
            <div ref="indicator" class="custom-tab-indicator"></div>
          </div>
        </div>
        <TabsContent value="my-transactions">
          <Table class="px-2" />
        </TabsContent>
        <TabsContent value="all-transactions">
          <Table class="px-2" />
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
</template>
