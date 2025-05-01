<template>
 <div>
        <h2 class="text-h4 p-4 border-b ">Overview</h2>

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
</template>

<script setup lang="ts">


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


</script>

<style scoped></style>
