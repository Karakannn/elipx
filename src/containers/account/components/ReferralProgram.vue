<template>
    <div class="max-w-3xl mx-auto">
      <!-- Referral Program Header -->
      <div class="py-6 border-b border-gray-200">
        <h1 class="text-2xl font-semibold">Referral program</h1>
      </div>
  
      <!-- Navigation Tabs -->
      <div class="flex flex-wrap gap-4 py-4 border-b border-gray-200">
        <div class="text-sm text-gray-500 px-2 py-1">ACCOUNT</div>
        <div class="text-sm text-gray-500 px-2 py-1">SECURITY</div>
        <div class="text-sm text-gray-500 px-2 py-1">DASHBOARD CUSTOMIZATION</div>
        <div class="text-sm font-medium px-2 py-1 border-b-2 border-blue-600">REFERRAL PROGRAM</div>
        <div class="text-sm text-gray-500 px-2 py-1">NOTIFICATION</div>
      </div>
  
      <!-- Share Link Section -->
      <div class="py-6 border-b border-gray-200">
        <p class="text-gray-700 mb-6">Share the link with a friend and get bonuses</p>
        
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="font-mono font-medium">IEODASHBOARD.COM/FRIEND123</div>
            <div class="flex space-x-2">
              <button class="p-1">
                <!-- Copy icon placeholder -->
              </button>
              <button class="p-1">
                <!-- Edit icon placeholder -->
              </button>
              <button class="p-1">
                <!-- QR code icon placeholder -->
              </button>
            </div>
          </div>
          
          <div class="bg-gray-100 rounded-lg p-4 text-center mt-4 md:mt-0">
            <div class="text-gray-600 text-sm">In general, you got</div>
            <div class="text-3xl font-bold">100 <span class="text-gray-500">ELX</span></div>
          </div>
        </div>
      </div>
  
      <!-- Your Referrals Section -->
      <div class="py-6">
        <h2 class="text-lg font-medium mb-6">Your referrals</h2>
  
        <!-- Referral 1 -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="font-medium">ADNREY OMELCHENKO</div>
            <div class="text-sm text-gray-500">Joined 07.02.2025</div>
          </div>
          <div class="font-medium">
            YOU RECEIVED 10 ELX
          </div>
        </div>
  
        <!-- Referral 2 -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="font-medium">YURIK TYMOSHCHUCH</div>
            <div class="text-sm text-gray-500">Joined 05.02.2025</div>
          </div>
          <div class="font-medium">
            YOU RECEIVED 10 ELX
          </div>
        </div>
  
        <!-- Referral 3 -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="font-medium">ABAZER THINGA</div>
            <div class="text-sm text-gray-500">Joined 25.01.2025</div>
          </div>
          <div class="font-medium">
            YOU RECEIVED 10 ELX
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Bu sayfada herhangi bir state yönetimi veya veri işleme gerekmiyor
  // Gerçek bir uygulamada, bu veriler API'den alınabilir
  
  const referrals = [
    {
      name: 'ADNREY OMELCHENKO',
      joinedDate: '07.02.2025',
      received: 10
    },
    {
      name: 'YURIK TYMOSHCHUCH',
      joinedDate: '05.02.2025',
      received: 10
    },
    {
      name: 'ABAZER THINGA',
      joinedDate: '25.01.2025',
      received: 10
    }
  ];
  </script>