<template>
    <div class="max-w-3xl mx-auto">
      <!-- Security Header -->
      <div class="py-6 border-b border-gray-200">
        <h1 class="text-2xl font-semibold">Security</h1>
      </div>
  
      <!-- Navigation Tabs -->
      <div class="flex flex-wrap gap-4 py-4 border-b border-gray-200">
        <div class="text-sm text-gray-500 px-2 py-1">ACCOUNT</div>
        <div class="text-sm font-medium px-2 py-1 border-b-2 border-blue-600">SECURITY</div>
        <div class="text-sm text-gray-500 px-2 py-1">DASHBOARD CUSTOMIZATION</div>
        <div class="text-sm text-gray-500 px-2 py-1">REFERRAL PROGRAM</div>
        <div class="text-sm text-gray-500 px-2 py-1">NOTIFICATION</div>
      </div>
  
      <!-- Two-Factor Authentication Section -->
      <div class="py-6">
        <h2 class="text-lg font-medium mb-6">Two-Factor Authentication (2FA)</h2>
  
        <!-- Passkeys -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="font-medium">PASSKEYS</div>
            <div class="text-sm text-gray-500">Protect your account and withdrawals with an access key</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="text-sm text-gray-500">PIN CODE</div>
            <button class="bg-gray-100 text-sm px-4 py-2 rounded-lg flex items-center">
              MANAGE
              <span class="ml-1">›</span>
            </button>
          </div>
        </div>
  
        <!-- Authenticator App -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="font-medium">AUTHENTICATOR APP</div>
            <div class="text-sm text-gray-500">Using Google Authenticator to protect your account and transactions.</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="text-sm text-gray-500">OFF</div>
            <button class="bg-gray-100 text-sm px-4 py-2 rounded-lg">
              CONNECT
            </button>
          </div>
        </div>
  
        <!-- Email -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="font-medium">EMAIL</div>
            <div class="text-sm text-gray-500">Using your email to protect your account and transactions.</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="text-sm text-gray-500">JO*****@GMAIL.COM</div>
            <button class="bg-gray-100 text-sm px-4 py-2 rounded-lg flex items-center">
              MANAGE
              <span class="ml-1">›</span>
            </button>
          </div>
        </div>
  
        <!-- Phone Number -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="font-medium">PHONE NUMBER</div>
            <div class="text-sm text-gray-500">Using your phone number to protect your account and transactions.</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="text-sm text-gray-500">NO PHONE NUMBER</div>
            <button class="bg-gray-100 text-sm px-4 py-2 rounded-lg">
              ADD
            </button>
          </div>
        </div>
  
        <!-- Password -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="font-medium">PASSWORD</div>
            <div class="text-sm text-gray-500">The login password is used to log in to your account.</div>
          </div>
          <div class="flex items-center">
            <button class="bg-gray-100 text-sm px-4 py-2 rounded-lg flex items-center">
              MANAGE
              <span class="ml-1">›</span>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Active Sessions Section -->
      <div class="py-6">
        <h2 class="text-lg font-medium mb-6">Active Sessions</h2>
  
        <!-- Session 1 -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="text-xs text-gray-500">85.15.90.451</div>
            <div class="font-medium">CHROME 131, MACBOOK PRO M1 PRO</div>
            <div class="text-sm text-gray-500">Krakow, Poland - 07.02.2025</div>
          </div>
          <div>
            <button class="bg-gray-100 text-sm px-4 py-2 rounded-lg flex items-center">
              TERMINATE SESSION
              <span class="ml-1">›</span>
            </button>
          </div>
        </div>
  
        <!-- Session 2 -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="text-xs text-gray-500">85.15.90.451</div>
            <div class="font-medium">CHROME 12, IPHONE 15 PRO MAX</div>
            <div class="text-sm text-gray-500">Krakow, Poland - online</div>
          </div>
          <div>
            <button class="bg-gray-100 text-sm px-4 py-2 rounded-lg flex items-center">
              TERMINATE SESSION
              <span class="ml-1">›</span>
            </button>
          </div>
        </div>
  
        <!-- Session 3 -->
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-200">
          <div class="flex-1">
            <div class="text-xs text-gray-500">85.15.90.451</div>
            <div class="font-medium">SAFARI 87, MACBOOK PRO M1 PRO</div>
            <div class="text-sm text-gray-500">Krakow, Poland - 07.02.2025</div>
          </div>
          <div>
            <button class="bg-gray-100 text-sm px-4 py-2 rounded-lg flex items-center">
              TERMINATE SESSION
              <span class="ml-1">›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Bu sayfada herhangi bir state yönetimi veya veri işleme gerekmiyor
  // Gerçek bir uygulamada, bu veriler API'den alınabilir
  </script>