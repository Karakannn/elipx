<template>
    <div class="bg-white rounded-lg shadow-sm p-6 w-full max-w-[800px] mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-xl font-bold">Announcements</h1>
        <button class="text-gray-500 flex items-center text-sm">
          View all
          <ChevronRight class="h-4 w-4 ml-1" />
        </button>
      </div>
  
      <div class="space-y-6">
        <!-- Announcement 1 -->
        <div class="flex gap-4 pb-6 border-b border-gray-100">
          <div class="shrink-0">
            <div class="w-[72px] h-[72px] bg-gray-900 rounded overflow-hidden relative">
              <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-1">
                <div class="text-[8px] font-medium">ELX PRIVATE</div>
                <div class="text-[8px] font-medium">SALE OFFER</div>
                <div class="text-[14px] font-bold">$1.5M</div>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <h2 class="font-medium text-sm mb-1">
              Introducing KAITO (KAITO) on Binance HODLer Airdrop! Earn KAITO With Retroactive BNB Simple Earn Subscriptions
            </h2>
            <div class="flex items-center text-xs text-gray-500">
              <span>11/02/2025</span>
              <div class="w-1 h-1 rounded-full bg-gray-300 mx-2"></div>
              <span class="text-xs font-medium uppercase">NEW LISTINGS</span>
            </div>
          </div>
        </div>
  
        <!-- Announcement 2 -->
        <div class="flex gap-4 pb-6 border-b border-gray-100">
          <div class="shrink-0">
            <div class="w-[72px] h-[72px] bg-blue-600 rounded overflow-hidden relative">
              <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-1">
                <div class="text-[10px] font-medium">Connect</div>
                <div class="text-[10px] font-medium">Your</div>
                <div class="text-[10px] font-medium">Wallet</div>
                <div class="mt-1 bg-white rounded-full w-6 h-6 flex items-center justify-center">
                  <span class="text-blue-600 font-bold text-lg">₿</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <h2 class="font-medium text-sm mb-1">
              Binance Square: Complete Tasks to Level up and Share up to $10,000 USDC in Rewards!
            </h2>
            <div class="flex items-center text-xs text-gray-500">
              <span>11/02/2025</span>
              <div class="w-1 h-1 rounded-full bg-gray-300 mx-2"></div>
              <span class="text-xs font-medium uppercase">TRADING UPDATES</span>
            </div>
          </div>
        </div>
  
        <!-- Announcement 3 -->
        <div class="flex gap-4 pb-6 border-b border-gray-100">
          <div class="shrink-0">
            <div class="w-[72px] h-[72px] bg-gray-800 rounded overflow-hidden relative">
              <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-1">
                <div class="text-[8px] font-medium">TGE Snapshot</div>
                <div class="text-[8px] font-medium">May 25, 2023</div>
                <div class="mt-1 bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <span class="text-white font-bold text-xs">₿</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <h2 class="font-medium text-sm mb-1">
              Updates on the Leverage & Margin Tiers of Multiple USD℗-M Perpetual Contracts (2025-02-19)
            </h2>
            <div class="flex items-center text-xs text-gray-500">
              <span>11/02/2025</span>
              <div class="w-1 h-1 rounded-full bg-gray-300 mx-2"></div>
              <span class="text-xs font-medium uppercase">WEBS</span>
            </div>
          </div>
        </div>
  
        <!-- Announcement 4 -->
        <div class="flex gap-4">
          <div class="shrink-0">
            <div class="w-[72px] h-[72px] bg-blue-900 rounded overflow-hidden relative">
              <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-1">
                <div class="text-[8px] font-medium">New</div>
                <div class="text-[8px] font-medium">Staking</div>
                <div class="text-[8px] font-medium">Platform</div>
                <div class="text-[8px] font-medium">Launch!</div>
                <div class="mt-1 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <span class="text-white font-bold text-xs">Ⓐ</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <h2 class="font-medium text-sm mb-1">
              AVAX bonus rewards for AAVE v3 (AVAX) USDT and USDC On-chain Earn
            </h2>
            <div class="flex items-center text-xs text-gray-500">
              <span>11/02/2025</span>
              <div class="w-1 h-1 rounded-full bg-gray-300 mx-2"></div>
              <span class="text-xs font-medium uppercase">NEW LISTINGS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ChevronRight } from 'lucide-vue-next';
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>