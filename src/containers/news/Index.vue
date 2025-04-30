<template>
  <div class="bg-gray-50 min-h-screen p-4 md:p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-2xl font-semibold mb-6">Notification Preferences</h1>

      <!-- Navigation Tabs -->
      <div class="flex border-b mb-6 overflow-x-auto hide-scrollbar">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = tab.id"
          class="px-4 py-2 text-sm flex items-center gap-2 whitespace-nowrap"
          :class="activeTab === tab.id ? 'text-primary font-medium border-b-2 border-primary' : 'text-gray-600'"
        >
          <component :is="tab.icon" class="h-4 w-4" />
          {{ tab.name }}
        </button>
      </div>

      <!-- Notification Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Card 1: ELX Private Sale -->
        <div class="rounded-lg overflow-hidden shadow-sm">
          <div class="bg-[#0a0e17] text-white p-6 h-[240px] flex flex-col justify-between relative">
            <div class="z-10">
              <h2 class="text-2xl font-bold mb-1">ELX PRIVATE SALE HITS</h2>
              <div class="text-5xl font-bold text-gray-200">$1.5M</div>
            </div>
            <div class="z-10">
              <p class="text-sm text-gray-300">Closed 100% allocation – strategic phase complete.</p>
            </div>
            <div class="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500 to-transparent"></div>
          </div>
          <div class="bg-white p-4">
            <h3 class="font-medium mb-1">ELX Private Sale Hits $1.5M</h3>
            <p class="text-sm text-gray-600 mb-3">Closed 100% allocation – strategic phase complete.</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">11/02/2025</span>
              <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">NEW LISTINGS</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Connect Wallet -->
        <div class="rounded-lg overflow-hidden shadow-sm">
          <div class="bg-[#0a0e17] text-white p-6 h-[240px] flex flex-col justify-center relative">
            <div class="z-10">
              <h2 class="text-3xl font-bold mb-1">Connect</h2>
              <h2 class="text-3xl font-bold mb-1">Your</h2>
              <h2 class="text-3xl font-bold">Wallet</h2>
            </div>
            <div class="absolute right-6 top-1/2 transform -translate-y-1/2">
              <div class="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center glow-effect">
                <span class="text-white text-5xl font-bold">₿</span>
              </div>
            </div>
          </div>
          <div class="bg-white p-4">
            <h3 class="font-medium mb-1">Public Sale Now Live</h3>
            <p class="text-sm text-gray-600 mb-3">Grab your ELX tokens at $0.045 before it's over.</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">11/02/2025</span>
              <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">NEW LISTINGS</span>
            </div>
          </div>
        </div>

        <!-- Card 3: TGE Scheduled -->
        <div class="rounded-lg overflow-hidden shadow-sm">
          <div class="bg-[#0a0e17] text-white p-6 h-[240px] flex flex-col items-center justify-center relative">
            <div class="z-10 text-center">
              <h2 class="text-2xl font-bold mb-1">TGE Scheduled:</h2>
              <h2 class="text-2xl font-bold mb-3">May 28, 2025</h2>
              <p class="text-sm mb-4">Your tokens will unlock soon.<br />Are you ready?</p>
              <div class="text-2xl font-mono font-bold text-blue-400">09:47:31</div>
            </div>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div class="w-32 h-32 opacity-70">
                <div class="relative w-full h-full">
                  <div class="absolute inset-0 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                    <span class="text-yellow-500 text-3xl font-bold">₿</span>
                  </div>
                  <div class="absolute bottom-0 left-0 text-xs text-yellow-500">2025</div>
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-yellow-500">May</div>
                  <div class="absolute bottom-0 right-0 text-xs text-yellow-500">2025</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-4">
            <h3 class="font-medium mb-1">TGE Scheduled: May 28, 2025</h3>
            <p class="text-sm text-gray-600 mb-3">Your tokens will unlock soon. Are you ready?</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">11/02/2025</span>
              <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">NEW LISTINGS</span>
            </div>
          </div>
        </div>

        <!-- Card 4: New Staking Platform -->
        <div class="rounded-lg overflow-hidden shadow-sm">
          <div class="bg-[#0a0e17] text-white p-6 h-[240px] flex flex-col justify-center relative">
            <div class="z-10">
              <h2 class="text-3xl font-bold mb-1">New</h2>
              <h2 class="text-3xl font-bold mb-1">Staking</h2>
              <h2 class="text-3xl font-bold">Platform</h2>
              <h2 class="text-3xl font-bold">Launched</h2>
            </div>
            <div class="absolute right-6 top-1/2 transform -translate-y-1/2">
              <div class="w-24 h-24 flex items-center justify-center">
                <div class="ethereum-logo">
                  <div class="ethereum-icon glow-effect-blue"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-4">
            <h3 class="font-medium mb-1">EllipX x Chainlink: Oracle Integration</h3>
            <p class="text-sm text-gray-600 mb-3">Data meets security in our new strategic partnership.</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">11/02/2025</span>
              <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">NEW LISTINGS</span>
            </div>
          </div>
        </div>

        <!-- Card 5: Smart Contract Audited -->
        <div class="rounded-lg overflow-hidden shadow-sm">
          <div class="bg-[#0a0e17] text-white p-6 h-[240px] flex flex-col justify-between relative">
            <div class="z-10">
              <h2 class="text-xl font-bold mb-1">ELLIPX SMART CONTRACT</h2>
              <h2 class="text-xl font-bold">AUDITED BY HACKEN</h2>
              <p class="text-sm text-gray-300 mt-2">Security-first. ELX contract passed<br />with zero critical issues.</p>
            </div>
            <div class="z-10 flex items-center justify-center">
              <div class="text-4xl font-bold text-gray-200 mr-4">€</div>
              <div class="text-4xl font-bold text-gray-200">×</div>
              <div class="ml-4">
                <div class="w-12 h-2 bg-teal-300 mb-1"></div>
                <div class="w-12 h-2 bg-teal-300 mb-1"></div>
                <div class="w-12 h-2 bg-teal-300"></div>
              </div>
            </div>
          </div>
          <div class="bg-white p-4">
            <h3 class="font-medium mb-1">EllipX Smart Contract Audited by Hacken</h3>
            <p class="text-sm text-gray-600 mb-3">Security-first. ELX contract passed with zero critical issues.</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">11/02/2025</span>
              <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">NEW LISTINGS</span>
            </div>
          </div>
        </div>

        <!-- Card 6: Vesting Dashboard -->
        <div class="rounded-lg overflow-hidden shadow-sm">
          <div class="bg-[#0a0e17] text-white p-6 h-[240px] flex flex-col justify-between relative">
            <div class="z-10">
              <h2 class="text-2xl font-bold mb-1">New Vesting</h2>
              <h2 class="text-2xl font-bold">Dashboard Released</h2>
              <p class="text-sm text-gray-300 mt-2">Track unlocks, monitor TGE balance, and more.</p>
            </div>
            <div class="z-10 flex justify-center">
              <div class="dashboard-mockup">
                <div class="dashboard-circle">
                  <div class="dashboard-progress" style="--progress: 35%">
                    <span class="dashboard-percent">35%</span>
                    <span class="dashboard-label">UNLOCKED</span>
                  </div>
                </div>
                <div class="dashboard-stats">
                  <div class="dashboard-stat">
                    <div class="dashboard-value">5,546</div>
                    <div class="dashboard-label">BALANCE</div>
                  </div>
                  <div class="dashboard-stat">
                    <div class="dashboard-value">10,834</div>
                    <div class="dashboard-label">UNLOCKED</div>
                  </div>
                  <div class="dashboard-stat">
                    <div class="dashboard-value">5,546</div>
                    <div class="dashboard-label">AVAILABLE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-4">
            <h3 class="font-medium mb-1">New Vesting Dashboard Released</h3>
            <p class="text-sm text-gray-600 mb-3">Track unlocks, monitor TGE balance, and more.</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">11/02/2025</span>
              <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">NEW LISTINGS</span>
            </div>
          </div>
        </div>

        <!-- Card 7: KYC Approval -->
        <div class="rounded-lg overflow-hidden shadow-sm">
          <div class="bg-[#0a0e17] text-white p-6 h-[240px] flex flex-col justify-between relative">
            <div class="z-10">
              <h2 class="text-2xl font-bold mb-1">KYC Approval Time</h2>
              <h2 class="text-2xl font-bold">Now Under 24h</h2>
              <p class="text-sm text-gray-300 mt-2">Onboard faster, verify easier,<br />and join the IEO</p>
            </div>
            <div class="z-10 flex items-center justify-end">
              <div class="kyc-card mr-4">
                <div class="kyc-avatar"></div>
                <div class="kyc-check"></div>
                <div class="kyc-line"></div>
                <div class="kyc-button"></div>
              </div>
              <div class="kyc-timer">
                <div class="kyc-timer-circle">
                  <span class="kyc-timer-text">24h</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-4">
            <h3 class="font-medium mb-1">KYC Approval Time Now Under 24h</h3>
            <p class="text-sm text-gray-600 mb-3">Onboard faster, verify easier, and join the IEO.</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">11/02/2025</span>
              <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">NEW LISTINGS</span>
            </div>
          </div>
        </div>

        <!-- Card 8: Referral Program -->
        <div class="rounded-lg overflow-hidden shadow-sm">
          <div class="bg-[#0a0e17] text-white p-6 h-[240px] flex flex-col justify-between relative">
            <div class="z-10">
              <h2 class="text-3xl font-bold mb-1">Referral</h2>
              <h2 class="text-3xl font-bold mb-1">Program</h2>
              <h2 class="text-3xl font-bold">Launched</h2>
              <p class="text-sm text-gray-300 mt-3">Earn ELX & USDT<br />for every friend<br />you onboard.</p>
            </div>
            <div class="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center">
              <div class="dollar-sign">$</div>
              <div class="elx-token">ELX</div>
            </div>
          </div>
          <div class="bg-white p-4">
            <h3 class="font-medium mb-1">Referral Program Launched</h3>
            <p class="text-sm text-gray-600 mb-3">Earn ELX & USDT for every friend you onboard.</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">11/02/2025</span>
              <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">NEW LISTINGS</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex items-center justify-between mt-8 border-t pt-4">
        <button class="px-4 py-2 text-sm font-medium bg-gray-100 rounded hover:bg-gray-200">SHOW MORE</button>

        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-500">SHOWING 11 OF 15</span>

          <div class="flex items-center ml-4">
            <button class="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50">
              <ChevronLeftIcon class="h-4 w-4" />
            </button>
            <button class="w-8 h-8 flex items-center justify-center rounded border bg-primary text-white">1</button>
            <button class="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50">2</button>
            <button class="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50">
              <ChevronRightIcon class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { BellIcon, ChevronLeftIcon, ChevronRightIcon, NewspaperIcon, ClockIcon, CalendarIcon } from "lucide-vue-next";

const activeTab = ref("all");

const tabs = [
  { id: "all", name: "ALL NEWS", icon: NewspaperIcon },
  { id: "elipx", name: "ELIPX NEWS", icon: BellIcon },
  { id: "vesting", name: "VESTING", icon: ClockIcon },
  { id: "tge", name: "TGE", icon: CalendarIcon },
];
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

:deep(.border-primary) {
  border-color: #0ea5e9;
}

:deep(.text-primary) {
  color: #0ea5e9;
}

:deep(.bg-primary) {
  background-color: #0ea5e9;
}

.glow-effect {
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.7);
}

.glow-effect-blue {
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.7);
}

/* Ethereum Logo */
.ethereum-logo {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ethereum-icon {
  width: 60px;
  height: 100px;
  background-color: transparent;
  position: relative;
}

.ethereum-icon:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 50px solid #3b82f6;
}

.ethereum-icon:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 50px solid #3b82f6;
}

/* Dashboard Mockup */
.dashboard-mockup {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard-circle {
  width: 70px;
  height: 70px;
  position: relative;
  margin-bottom: 10px;
}

.dashboard-progress {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#3b82f6 var(--progress), #1e293b calc(var(--progress) + 0.1%));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dashboard-percent {
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.dashboard-label {
  font-size: 8px;
  color: #94a3b8;
}

.dashboard-stats {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 10px;
}

.dashboard-stat {
  text-align: center;
  padding: 0 5px;
}

.dashboard-value {
  font-weight: bold;
  color: white;
}

/* KYC Card */
.kyc-card {
  width: 70px;
  height: 90px;
  background-color: white;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.kyc-avatar {
  width: 40px;
  height: 40px;
  background-color: #e2e8f0;
  border-radius: 50%;
  margin-bottom: 10px;
}

.kyc-check {
  width: 20px;
  height: 20px;
  background-color: #10b981;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  right: 10px;
}

.kyc-line {
  width: 80%;
  height: 6px;
  background-color: #e2e8f0;
  border-radius: 3px;
  margin-bottom: 8px;
}

.kyc-button {
  width: 80%;
  height: 10px;
  background-color: #3b82f6;
  border-radius: 5px;
}

.kyc-timer {
  position: relative;
}

.kyc-timer-circle {
  width: 60px;
  height: 60px;
  background-color: #0ea5e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(14, 165, 233, 0.7);
}

.kyc-timer-text {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

/* Dollar Sign and ELX Token */
.dollar-sign {
  font-size: 60px;
  font-weight: bold;
  color: #22c55e;
  text-shadow: 0 0 15px rgba(34, 197, 94, 0.7);
  margin-right: 10px;
}

.elx-token {
  width: 60px;
  height: 60px;
  background-color: #0f172a;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
}
</style>
