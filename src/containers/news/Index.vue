<script setup>
import { ref, onMounted, nextTick, computed, watch } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SvgIcon } from "@/components/ui/svg-icon";

const notifications = [
  {
    id: "1",
    type: "LISTING",
    title: "ELX Private Sale Hits $1.5M Closed 100% allocation – strategic phase complete.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/public/news/news1.png",
    amount: "$1.5M",
  },
  {
    id: "2",
    type: "WALLET",
    title: "Public Sale Now Live Grab your ELX tokens at $0.045 before it's over.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/public/news/news2.png",
    amount: "$0.045",
  },
  {
    id: "3",
    type: "TGE",
    title: "TGE Scheduled: May 28, 2025 Your tokens will unlock soon. Are you ready?",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/public/news/news3.png",
    amount: "09:47:31",
  },
  {
    id: "4",
    type: "PLATFORM",
    title: "EllipX x Chainlink: Oracle Integration Data meets security in our new strategic partnership.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/public/news/news4.png",
    amount: "",
  },
  {
    id: "5",
    type: "SECURITY",
    title: "EllipX Smart Contract Audited by Hacken Security-first. ELX contract passed with zero critical issues.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/public/news/news5.png",
    amount: "0",
  },
  {
    id: "6",
    type: "DASHBOARD",
    title: "New Vesting Dashboard Released Track unlocks, monitor TGE balance, and more.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/public/news/news6.png",
    amount: "35%",
  },
  {
    id: "7",
    type: "KYC",
    title: "KYC Approval Time Now Under 24h Onboard faster, verify easier, and join the IEO.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/public/news/news7.png",
    amount: "24h",
  },
  {
    id: "8",
    type: "REFERRAL",
    title: "Referral Program Launched Earn ELX & USDT for every friend you onboard.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/public/news/news8.png",
    amount: "ELX & USDT",
  },
];

const tabs = [
  { id: "all", name: "ALL NEWS", icon: "user" },
  { id: "elipx", name: "ELIPX NEWS", icon: "logo-solid" },
  { id: "vesting", name: "VESTING", icon: "timeline" },
  { id: "tge", name: "TGE", icon: "token" },
];

const activeTab = ref("all");
const currentPage = ref(0);
const rowsPerPage = ref(8);

const filteredNotifications = computed(() => {
  if (activeTab.value === "all") return notifications;
  if (activeTab.value === "tge") return notifications.filter((n) => n.type === "TGE");
  if (activeTab.value === "vesting") return notifications.filter((n) => n.type === "DASHBOARD");
  if (activeTab.value === "elipx") return notifications.filter((n) => n.type === "LISTING");
  return notifications;
});

const totalPages = computed(() => Math.ceil(filteredNotifications.value.length / rowsPerPage.value));
const paginatedNotifications = computed(() => {
  const start = currentPage.value * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  return filteredNotifications.value.slice(start, end);
});

const filterByTab = (tabId) => {
  activeTab.value = tabId;
  currentPage.value = 0;
};

const goToNextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
};

const goToPreviousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

const goToPage = (page) => {
  currentPage.value = page;
};

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
      <CardTitle class="text-h4">Notification Preferences</CardTitle>
    </CardHeader>
    <CardContent class="p-0">
      <Tabs v-model="activeTab" default-value="documentation" class="pb-0">
        <div class="relative" ref="container">
          <div class="border-b w-full px-2 overflow-x-auto">
            <TabsList class="space-x-4 border-b">
              <TabsTrigger as-child="true" v-for="tab in tabs" :key="tab.id" :value="tab.id" class="p-0" @click="filterByTab(tab.id)">
                <div class="custom-tab-trigger">
                  <SvgIcon :name="tab.icon" class="size-4" />
                  <span class="text-mono-12">{{ tab.name }}</span>
                </div>
              </TabsTrigger>
            </TabsList>
            <div ref="indicator" class="custom-tab-indicator"></div>
          </div>
        </div>
        <TabsContent v-for="tab in tabs" :key="tab.id" :value="tab.id" class="p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="notification in paginatedNotifications"
              :key="notification.id"
              class="hover:bg-secondary/10 rounded-md hover:shadow-sm cursor-pointer">
              <img :src="notification.imageUrl" :alt="notification.title" />

              <div class="p-4 space-y-4">
                <h3 class="text-paragraph-14">{{ notification.title }}</h3>
                <div class="flex justify-between items-center">
                  <span class="text-mono-12 text-secondary">{{ notification.date }}</span>
                  <span class="text-mono-12 text-secondary">
                    {{ notification.category }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>


      <div class="p-4 flex items-center justify-between border-t ">
        <div class="flex items-center gap-4">
          <Button variant="secondary" class="text-mono-12"> SHOW MORE </Button>
          <span class="text-mono-10"> SHOWING 11 OF 15 </span>
        </div>

        <div class="flex items-center ml-4">
          <button
            class="w-8 h-8 flex items-center justify-center rounded border hover:bg-secondary/10"
            :disabled="currentPage === 0"
            @click="goToPreviousPage">
            <ChevronLeftIcon class="h-4 w-4" />
          </button>

          <button
            class="w-8 h-8 flex items-center justify-center rounded border"
            :class="currentPage === 0 ? 'bg-accent text-white' : 'hover:bg-secondary/10'"
            @click="goToPage(0)">
            1
          </button>

          <button
            v-if="totalPages > 1"
            class="w-8 h-8 flex items-center justify-center rounded border"
            :class="currentPage === 1 ? 'bg-accent text-white' : 'hover:bg-secondary/10'"
            @click="goToPage(1)">
            2
          </button>

          <button
            class="w-8 h-8 flex items-center justify-center rounded border hover:bg-secondary/10"
            :disabled="currentPage >= totalPages - 1"
            @click="goToNextPage">
            <ChevronRightIcon class="h-4 w-4" />
          </button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped></style>
