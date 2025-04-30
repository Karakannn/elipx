<template>
  <div class="flex flex-col lg:flex-row gap-4">

    <!-- Left Sidebar with Collapsible -->
    <div class="w-full lg:w-[288px] shrink-0">
      <div class="bg-white rounded-lg shadow">
        <div v-for="(section, sectionIndex) in sidebarSections" :key="sectionIndex">
          <Collapsible :open="section.expanded" @update:open="(value) => updateSectionExpanded(section.id, value)">
            <CollapsibleTrigger class="w-full">
              <div class="flex items-center justify-between rounded-md cursor-pointer gap-8 p-4 hover:bg-gray-50">
                <div class="flex items-center gap-3">
                  <SvgIcon :name="section.icon" class="size-5 text-primary" />
                  <span class="text-h4 text-left">{{ section.label }}</span>
                </div>
                <SvgIcon name="chevron-right" class="size-5 text-primary" :class="section.expanded ? 'rotate-90' : ''" />
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div class="p-4 space-y-4">
                <div
                  v-for="(item, itemIndex) in section.items"
                  :key="itemIndex"
                  :class="[
                    'flex items-center pb-3 cursor-pointer border-b border-border',
                    activeSidebarItem === item.id ? 'text-primary' : 'hover:text-primary text-secondary',
                  ]"
                  @click="activeSidebarItem = item.id"
                >
                  <div :class="['w-1.5 h-1.5 rounded-full mr-2', activeSidebarItem === item.id ? 'bg-primary' : 'hover:bg-primary bg-secondary']"></div>
                  <span class="text-paragraph-14">{{ item.label }}</span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1">
      <div class="bg-white rounded-lg shadow-sm">
        <h2 class="text-h4 p-4 border-b border-border">Overview</h2>

        <div class="space-y-4 p-4">
          <h3 class="text-paragraph-14">Welcome to EllipX</h3>
          <p class="text-caption-12 text-secondary mb-3">
            EllipX is your gateway to safely access, transparent token sales, and fully secure asset management.
          </p>
          <p class="text-caption-12 text-secondary">
            This platform is built for users who want to participate in our IEO, track their holdings, and stay up-to-date with token unlocks, staking, and
            more.
          </p>
        </div>

        <img src="/public/documentation_content.png" alt="" />

        <div class="space-y-4 p-4">
          <h3 class="text-paragraph-14">What you can do on EllipX:</h3>
          <ul>
            <li v-for="(item, index) in whatYouCanDo" :key="index" class="flex items-start">
              <div class="min-w-[4px] h-[4px] rounded-full bg-secondary mt-1 mr-2"></div>
              <span class="text-caption-12 text-secondary">{{ item }}</span>
            </li>
          </ul>
        </div>

        <img src="/public/documentation_content2.png" class="p-4" alt="" />

        <div class="space-y-4 p-4">
          <h3 class="text-paragraph-14">What you'll need to begin:</h3>
          <ul>
            <li v-for="(item, index) in whatYouNeed" :key="index" class="flex items-start">
              <div class="min-w-[4px] h-[4px] rounded-full bg-secondary mt-1 mr-2"></div>
              <span class="text-caption-12 text-secondary">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Right Sidebar - Table of Contents -->
    <div class="w-full lg:w-[288px] shrink-0 p-4">
      <div class="bg-white rounded-lg shadow-sm">
        <h3 class="text-h4 p-4 border-b">Table of Contents</h3>

        <div class="space-y-4 p-4">
          <div v-for="(tocItem, tocIndex) in tableOfContents" :key="tocIndex">
            <div class="flex items-center gap-1 pb-3 border-b border-border">
              <div class="min-w-[4px] h-[4px] rounded-full bg-secondary mr-2"></div>
              <span class="text-paragraph-14">{{ tocItem.label }}</span>
            </div>

            <div v-if="tocItem.children && tocItem.children.length > 0" class="pl-4">
              <div
                v-for="(childItem, childIndex) in tocItem.children"
                :key="childIndex"
                class="flex items-center gap-1 py-3 cursor-pointer border-b border-border"
              >
                <div class="min-w-[4px] h-[4px] rounded-full bg-secondary mt-1 mr-2"></div>
                <span class="text-sm text-gray-700">{{ childItem.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import SvgIcon from "@/components/ui/svg-icon/SvgIcon.vue";

const activeSidebarItem = ref("overview");
const sidebarSections = ref([
  {
    id: "getting-started",
    label: "Getting Started",
    icon: "rocket",
    expanded: true,
    items: [
      { id: "overview", label: "Overview" },
      { id: "account-creation", label: "Account Creation" },
      { id: "kyc-verification", label: "KYC Verification" },
      { id: "connect-wallet", label: "Connect Wallet" },
      { id: "dashboard-tour", label: "Dashboard Tour" },
    ],
  },
  {
    id: "wallets-security",
    label: "Wallets & Security",
    icon: "wallet",
    expanded: false,
    items: [
      { id: "wallet-types", label: "Wallet Types" },
      { id: "security-tips", label: "Security Tips" },
      { id: "two-factor", label: "Two-Factor Authentication" },
    ],
  },
  {
    id: "token-purchase",
    label: "Token Purchase & IEO",
    icon: "token",
    expanded: false,
    items: [
      { id: "purchase-guide", label: "Purchase Guide" },
      { id: "supported-currencies", label: "Supported Currencies" },
      { id: "allocation-tiers", label: "Allocation Tiers" },
    ],
  },
  {
    id: "dashboard-guide",
    label: "Dashboard & Portfolio Guide",
    icon: "enterprise",
    expanded: false,
    items: [
      { id: "portfolio-tracking", label: "Portfolio Tracking" },
      { id: "analytics", label: "Analytics" },
      { id: "transaction-history", label: "Transaction History" },
    ],
  },
]);

const updateSectionExpanded = (sectionId: string, value: boolean) => {
  const section = sidebarSections.value.find((s) => s.id === sectionId);
  if (section) {
    section.expanded = value;
  }
};

const whatYouCanDo = [
  "Participate in the IEO with supported crypto (BTC, ETH, USDT, BSC)",
  "Connect your cryptocurrency wallet to secure your tokens",
  "Track vesting, token unlock progress, and purchase history",
  "Explore the roadmap and upcoming product releases",
  "Stake your tokens to earn additional rewards",
];

const whatYouNeed = [
  "A valid ID document (passport / national ID)",
  "A cryptocurrency wallet (MetaMask, WalletConnect, Trust Wallet)",
  "Email for account registration and login",
  "Time (less than 5 minutes to get started)",
];

const tableOfContents = [
  {
    label: "Table 1",
    children: [{ label: "Table 1.1" }, { label: "Table 1.2" }, { label: "Table 1.3" }],
  },
  { label: "Table 2", children: [] },
  {
    label: "Table 3",
    children: [{ label: "Table 3.1" }, { label: "Table 3.2" }],
  },
  { label: "Table 4", children: [] },
  { label: "Table 5", children: [] },
];
</script>

<style scoped></style>
