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
</script>

<template>
    <div class="w-full lg:w-[288px] shrink-0">
      <div class="bg-card rounded-lg shadow">
        <div v-for="(section, sectionIndex) in sidebarSections" :key="sectionIndex">
          <Collapsible :open="section.expanded" @update:open="(value) => updateSectionExpanded(section.id, value)">
            <CollapsibleTrigger class="w-full">
              <div class="flex items-center justify-between rounded-md cursor-pointer gap-8 p-4 hover:bg-secondary/10">
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
                    'flex items-center pb-3 cursor-pointer border-b ',
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
</template>