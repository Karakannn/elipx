<script setup>
import { ChevronRight } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted } from 'vue';
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from '@/components/ui/card'
import { Button } from "@/components/ui/button";
import { SvgIcon } from "@/components/ui/svg-icon";

const announcements = [
  {
    id: 1,
    title: "Introducing KAITO (KAITO) on Binance HODLer Airdrop! Earn KAITO With Retroactive BNB Simple Earn Subscriptions",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    image: "/public/announcements1.png"
  },
  {
    id: 2,
    title: "Binance Square: Complete Tasks to Level up and Share up to $10,000 USDC in Rewards!",
    date: "11/02/2025",
    category: "TRADING UPDATES",
    image: "/public/announcements2.png"
  },
  {
    id: 3,
    title: "Updates on the Leverage & Margin Tiers of Multiple USD℗-M Perpetual Contracts (2025-02-19)",
    date: "11/02/2025",
    category: "WEBS",
    image: "/public/announcements3.png"
  },
  {
    id: 4,
    title: "AVAX bonus rewards for AAVE v3 (AVAX) USDT and USDC On-chain Earn",
    date: "11/02/2025",
    category: "NEW LISTINGS",
    image: "/public/announcements4.png"
  }
];

const cardEl = ref(null);
const showImages = ref(true);

const checkCardWidth = () => {
  if (cardEl.value) {
    const cardWidth = cardEl.value.getBoundingClientRect().width;
    showImages.value = cardWidth > 500;
  }
};

onMounted(() => {
  setTimeout(() => {
    checkCardWidth();
  }, 0);

  window.addEventListener('resize', checkCardWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkCardWidth);
});
</script>

<template>
  <div ref="cardEl">
    <Card>
      <CardHeader class="p-4 border-b">
        <CardTitle class="text-h4">Announcements</CardTitle>
        <CardAction>
          <Button variant="link-secondary" class="p-0 flex">
            <span class="text-caption-12">View all</span>
            <SvgIcon name="chevron-right" class="size-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <template v-for="(announcement, index) in announcements" :key="announcement.id">
          <div class="flex gap-4 items-center" :class="{ 'items-center': showImages }">
            <div v-if="showImages" class="shrink-0">
              <img :src="announcement.image" alt="">
            </div>
            <div class="flex-1 space-y-4">
              <h2 class="text-paragraph-14">
                {{ announcement.title }}
              </h2>
              <div class="flex items-center gap-4">
                <span class="text-mono-12 font-mono text-secondary">{{ announcement.date }}</span>
                <span class="text-mono-12 font-mono text-secondary">{{ announcement.category }}</span>
              </div>
            </div>
          </div>
          <Separator class="my-3 bg-border" />
        </template>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped></style>