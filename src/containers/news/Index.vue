<script setup lang="ts">
import { ref, computed } from "vue";
import { BellIcon, NewspaperIcon, ClockIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Notification data
const notifications = [
  {
    id: "1",
    type: "LISTING",
    title: "ELX Private Sale Hits $1.5M",
    description: "Closed 100% allocation – strategic phase complete.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/images/elx-private-sale.jpg",
    amount: "$1.5M",
  },
  {
    id: "2",
    type: "WALLET",
    title: "Public Sale Now Live",
    description: "Grab your ELX tokens at $0.045 before it's over.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/images/connect-wallet.jpg",
    amount: "$0.045",
  },
  {
    id: "3",
    type: "TGE",
    title: "TGE Scheduled: May 28, 2025",
    description: "Your tokens will unlock soon. Are you ready?",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/images/tge-scheduled.jpg",
    amount: "09:47:31",
  },
  {
    id: "4",
    type: "PLATFORM",
    title: "EllipX x Chainlink: Oracle Integration",
    description: "Data meets security in our new strategic partnership.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/images/staking-platform.jpg",
    amount: "",
  },
  {
    id: "5",
    type: "SECURITY",
    title: "EllipX Smart Contract Audited by Hacken",
    description: "Security-first. ELX contract passed with zero critical issues.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/images/smart-contract.jpg",
    amount: "0",
  },
  {
    id: "6",
    type: "DASHBOARD",
    title: "New Vesting Dashboard Released",
    description: "Track unlocks, monitor TGE balance, and more.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/images/vesting-dashboard.jpg",
    amount: "35%",
  },
  {
    id: "7",
    type: "KYC",
    title: "KYC Approval Time Now Under 24h",
    description: "Onboard faster, verify easier, and join the IEO.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/images/kyc-approval.jpg",
    amount: "24h",
  },
  {
    id: "8",
    type: "REFERRAL",
    title: "Referral Program Launched",
    description: "Earn ELX & USDT for every friend you onboard.",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    imageUrl: "/images/referral-program.jpg",
    amount: "ELX & USDT",
  },
];

// Tabs configuration
const tabs = [
  { id: "all", name: "ALL NEWS", icon: NewspaperIcon },
  { id: "elipx", name: "ELIPX NEWS", icon: BellIcon },
  { id: "vesting", name: "VESTING", icon: ClockIcon },
  { id: "tge", name: "TGE", icon: CalendarIcon },
];

// State
const activeTab = ref("all");
const currentPage = ref(0);
const rowsPerPage = ref(8);

// Filter notifications based on active tab
const filteredNotifications = computed(() => {
  if (activeTab.value === "all") return notifications;
  if (activeTab.value === "tge") return notifications.filter((n) => n.type === "TGE");
  if (activeTab.value === "vesting") return notifications.filter((n) => n.type === "DASHBOARD");
  if (activeTab.value === "elipx") return notifications.filter((n) => n.type === "LISTING");
  return notifications;
});

// Pagination
const totalPages = computed(() => Math.ceil(filteredNotifications.value.length / rowsPerPage.value));
const paginatedNotifications = computed(() => {
  const start = currentPage.value * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  return filteredNotifications.value.slice(start, end);
});

// Filter by tab
const filterByTab = (tabId: string) => {
  activeTab.value = tabId;
  currentPage.value = 0;
};

// Page change handlers
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

const goToPage = (page: number) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="bg-gray-50 min-h-screen p-4 md:p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-2xl font-semibold mb-6">Notification Preferences</h1>

      <!-- Navigation Tabs -->
      <Tabs v-model="activeTab" class="w-full">
        <TabsList class="border-b flex gap-4 justify-start mb-6">
          <TabsTrigger
            v-for="tab in tabs"
            :key="tab.id"
            :value="tab.id"
            class="px-4 py-2 text-sm flex items-center gap-2 whitespace-nowrap relative data-[state=active]:text-blue-500 data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
            @click="filterByTab(tab.id)"
          >
            <component :is="tab.icon" class="h-4 w-4" />
            {{ tab.name }}
          </TabsTrigger>
        </TabsList>

        <TabsContent v-for="tab in tabs" :key="tab.id" :value="tab.id">
          <!-- First Row - Cards 1-4 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="notification in paginatedNotifications" :key="notification.id" class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-[#0a0e17] text-white p-6 h-[240px] flex flex-col justify-between relative">
                <!-- Card image/content area -->
                <img :src="notification.imageUrl" :alt="notification.title" class="absolute inset-0 w-full h-full object-cover opacity-40" />
                <div class="z-10">
                  <h2 class="text-2xl font-bold mb-1">{{ notification.title.toUpperCase() }}</h2>
                  <div v-if="notification.amount" class="text-5xl font-bold text-gray-200 mt-1">{{ notification.amount }}</div>
                </div>
                <div class="z-10">
                  <p class="text-sm text-gray-300">{{ notification.description }}</p>
                </div>
                <div class="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500 to-transparent"></div>
              </div>
              <div class="bg-white p-4">
                <h3 class="font-medium mb-1">{{ notification.title }}</h3>
                <p class="text-sm text-gray-600 mb-3">{{ notification.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-500">{{ notification.date }}</span>
                  <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                    {{ notification.category }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Second Row - Cards 5-8 -->
        </TabsContent>
      </Tabs>

      <!-- Pagination -->
      <div class="flex items-center justify-between mt-8 border-t pt-4">
        <Button class="px-4 py-2 text-sm font-medium bg-gray-100 rounded hover:bg-gray-200"> SHOW MORE </Button>

        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-500"> SHOWING 11 OF 15 </span>

          <div class="flex items-center ml-4">
            <button class="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50" :disabled="currentPage === 0" @click="goToPreviousPage">
              <ChevronLeftIcon class="h-4 w-4" />
            </button>

            <button
              class="w-8 h-8 flex items-center justify-center rounded border"
              :class="currentPage === 0 ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'"
              @click="goToPage(0)"
            >
              1
            </button>

            <button
              v-if="totalPages > 1"
              class="w-8 h-8 flex items-center justify-center rounded border"
              :class="currentPage === 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'"
              @click="goToPage(1)"
            >
              2
            </button>

            <button
              class="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50"
              :disabled="currentPage >= totalPages - 1"
              @click="goToNextPage"
            >
              <ChevronRightIcon class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
