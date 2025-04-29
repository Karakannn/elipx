<template>
    <div class="bg-white rounded-lg shadow-sm p-6 w-full max-w-[800px] mx-auto">
      <h1 class="text-2xl font-bold mb-4">IEO</h1>
      
      <div class="border-t border-b py-4 mb-6">
        <div class="flex gap-2">
          <button class="flex items-center gap-1 px-4 py-1 rounded-md bg-gray-100 text-gray-800 text-sm">
            <Home class="h-4 w-4" />
            1 ROUND
          </button>
          <button class="flex items-center gap-1 px-4 py-1 rounded-md bg-blue-600 text-white text-sm">
            <Hash class="h-4 w-4" />
            2 ROUND
          </button>
          <button class="flex items-center gap-1 px-4 py-1 rounded-md bg-gray-100 text-gray-800 text-sm">
            <Hash class="h-4 w-4" />
            3 ROUND
          </button>
        </div>
      </div>
  
      <div class="mb-8">
        <h2 class="font-medium mb-4">Token Public Sale Details</h2>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">Token for Sale</div>
          <div class="font-medium text-right">100,000,000 ELX (10%)</div>
        </div>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">Accepted</div>
          <div class="font-medium text-right">BTC, ETH, BSC, USDT</div>
        </div>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">Distribution:</div>
          <div class="font-medium text-right">20% AT TGE, 80% LOCKED 6 MONTHS → 12-MONTH VESTING</div>
        </div>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">Private Sale Recap:</div>
          <div class="font-medium text-right">$0.03, LOCKED 12M + VESTING</div>
        </div>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">Public Price:</div>
          <div class="font-medium text-right">$0.045</div>
        </div>
        
        <div class="py-3">
          <p>You can participate with a minimum of $100 and a maximum of $5,000.</p>
        </div>
      </div>
  
      <div class="mb-8">
        <h2 class="font-medium mb-4">Status of user allocation</h2>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">You've purchased:</div>
          <div class="font-medium text-right">11,200 ELX</div>
        </div>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">TGE Address:</div>
          <div class="font-medium text-right">0XA8C...12DE</div>
        </div>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">Status:</div>
          <div class="font-medium text-right">LOCKED UNTIL TGE</div>
        </div>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">Unlocked at TGE:</div>
          <div class="font-medium text-right">20%</div>
        </div>
      </div>
  
      <div>
        <h2 class="font-medium mb-4">Vesting/lock period info</h2>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">TGE unlock:</div>
          <div class="font-medium text-right">20% (2,240 ELX)</div>
        </div>
        
        <div class="flex justify-between py-3 border-b">
          <div class="text-gray-800">TGE lock:</div>
          <div class="font-medium text-right">80% LOCKED FOR 6 MONTHS (8,960 ELX)</div>
        </div>
        
        <div class="flex justify-between py-3">
          <div class="text-gray-800">Then:</div>
          <div class="font-medium text-right">12-MONTH LINEAR VESTING</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Home, Hash } from 'lucide-vue-next';
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>