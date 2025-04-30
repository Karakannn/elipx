<template>
    <div class="bg-gray-50 min-h-screen p-4 md:p-8">
      <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="border-r pr-8">
            <!-- Logo and Badge -->
            <div class="flex items-center gap-2 mb-6">
              <div class="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">
                <span class="font-bold">E</span>
              </div>
              <div class="flex items-center gap-1">
                <span class="font-bold text-xl">ELX</span>
                <span class="text-gray-500 text-sm">EllipX</span>
              </div>
            </div>
            
            <!-- Private Sale Badge -->
            <div class="inline-block bg-gray-100 text-xs font-medium px-3 py-1 rounded-full mb-8">
              PRIVATE SALE
            </div>
            
            <!-- Token Price -->
            <div class="mb-6">
              <div class="text-sm text-gray-500 mb-1">Token price</div>
              <div class="text-6xl font-bold">0.030$</div>
            </div>
            
            <!-- Dates -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div>
                <div class="text-sm text-gray-500 mb-1">Start</div>
                <div class="font-medium">20 MAY 2025</div>
              </div>
              <div>
                <div class="text-sm text-gray-500 mb-1">End</div>
                <div class="font-medium">28 MAY 2025</div>
              </div>
            </div>
            
            <!-- Allocation -->
            <div class="mb-6">
              <div class="text-sm text-gray-500 mb-3">ALLOCATION</div>
              <div class="h-2 bg-gray-100 rounded-full mb-3 relative">
                <div class="absolute top-0 left-0 h-full bg-green-500 rounded-full" style="width: 67%"></div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  <span class="text-xs font-medium">IN PROGRESS</span>
                </div>
                <div class="text-xs font-medium">33,500,000 ELX / 67%</div>
              </div>
            </div>
            
            <!-- Participate Button -->
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
              <PlusIcon class="h-4 w-4" />
              PARTICIPATE IN IEO
            </button>
          </div>
          
          <!-- Right Column -->
          <div>
            <!-- Round Tabs -->
            <div class="flex gap-2 mb-6">
              <button class="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-1">
                <HomeIcon class="h-4 w-4" />
                <span class="text-sm font-medium">1 ROUND</span>
              </button>
              <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center gap-1 transition-colors">
                <span class="text-sm font-medium">2 ROUND</span>
              </button>
              <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center gap-1 transition-colors">
                <span class="text-sm font-medium">3 ROUND</span>
              </button>
            </div>
            
            <!-- Sale Details Title -->
            <h2 class="text-xl font-bold mb-4">Token Private Sale Details</h2>
            
            <!-- Info Cards -->
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <!-- Token For Sale Card -->
              <div class="bg-gradient-to-r from-blue-400 to-cyan-400 text-white p-4 rounded-lg">
                <div class="text-sm mb-2">TOKEN FOR SALE</div>
                <div class="text-xl font-bold">50,000,000 ELX (5%)</div>
              </div>
              
              <!-- Accepted Currencies Card -->
              <div class="bg-gradient-to-r from-blue-400 to-cyan-400 text-white p-4 rounded-lg">
                <div class="text-sm mb-2">ACCEPTED</div>
                <div class="text-xl font-bold">BTC, ETH, BSC, USDT</div>
              </div>
            </div>
            
            <!-- Info Boxes -->
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <!-- Distribution Box -->
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-sm text-gray-500 mb-2">Distribution:</div>
                <div class="text-sm">
                  100% LOCKED FOR 12 MONTHS<br>
                  + 12-MONTH LINEAR VESTING
                </div>
              </div>
              
              <!-- Private Price Box -->
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-sm text-gray-500 mb-2">Private Price:</div>
                <div class="text-sm">$0.030</div>
              </div>
            </div>
            
            <!-- Limits Box -->
            <div class="bg-gray-50 p-4 rounded-lg mb-6">
              <div class="text-sm text-gray-500 mb-2">Limits:</div>
              <div class="text-sm">
                YOU CAN PARTICIPATE WITH<br>
                A MINIMUM OF $100 AND A<br>
                MAXIMUM OF $5,000.
              </div>
            </div>
            
            <!-- User Allocation Status -->
            <div class="mb-6">
              <div class="text-sm font-medium mb-4">Status of user allocation</div>
              
              <div class="grid grid-cols-2 gap-y-4">
                <div class="text-sm text-gray-500">You've purchased:</div>
                <div class="text-sm font-medium text-right">17,500 ELX</div>
                
                <div class="text-sm text-gray-500">TGE Address:</div>
                <div class="text-sm text-right">0XA8C...12DE</div>
                
                <div class="text-sm text-gray-500">Status:</div>
                <div class="text-sm font-medium text-right">LOCKED UNTIL TGE</div>
              </div>
            </div>
            
            <!-- Vesting Info -->
            <div>
              <div class="text-sm font-medium mb-4">Vesting/lock period info</div>
              
              <div class="grid grid-cols-2 gap-y-4">
                <div class="text-sm text-gray-500">TGE unlock:</div>
                <div class="text-sm font-medium text-right">0%</div>
                
                <div class="text-sm text-gray-500">TGE lock:</div>
                <div class="text-sm font-medium text-right">100% LOCKED FOR 12 MONTHS (17,500 ELX)</div>
                
                <div class="text-sm text-gray-500">Then:</div>
                <div class="text-sm font-medium text-right">12-MONTH LINEAR VESTING</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { 
    HomeIcon, 
    PlusIcon
  } from 'lucide-vue-next'


  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>