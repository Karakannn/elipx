<template>
    <div class="max-w-3xl mx-auto">
        <!-- Notification Preferences Header -->
        <div class="py-6 border-b border-gray-200">
            <h1 class="text-2xl font-semibold">Notification Preferences</h1>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex flex-wrap gap-4 py-4 border-b border-gray-200">
            <div class="text-sm text-gray-500 px-2 py-1">ACCOUNT</div>
            <div class="text-sm text-gray-500 px-2 py-1">SECURITY</div>
            <div class="text-sm text-gray-500 px-2 py-1">DASHBOARD CUSTOMIZATION</div>
            <div class="text-sm text-gray-500 px-2 py-1">REFERRAL PROGRAM</div>
            <div class="text-sm font-medium px-2 py-1 border-b-2 border-blue-600">NOTIFICATION</div>
        </div>

        <!-- IEO & Transactions Section -->
        <div class="py-6 border-b border-gray-200">
            <h2 class="text-sm text-gray-500 mb-4">IEO & Transactions</h2>

            <!-- IEO PARTICIPATION CONFIRMED -->
            <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="font-medium">IEO PARTICIPATION CONFIRMED</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('ieoParticipationConfirmed')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.ieoParticipationConfirmed
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.ieoParticipationConfirmed ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>

            <!-- PAYMENT RECEIVED -->
            <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="font-medium">PAYMENT RECEIVED</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('paymentReceived')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.paymentReceived
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.paymentReceived ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>

            <!-- PURCHASE FAILED -->
            <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="font-medium">PURCHASE FAILED</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('purchaseFailed')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.purchaseFailed
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.purchaseFailed ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>

            <!-- IEO ROUND ENDING SOON -->
            <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="font-medium">IEO ROUND ENDING SOON</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('ieoRoundEndingSoon')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.ieoRoundEndingSoon
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.ieoRoundEndingSoon ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>

            <!-- TOKEN ALLOCATION UPDATED -->
            <div class="flex items-center justify-between py-4">
                <div class="font-medium">TOKEN ALLOCATION UPDATED</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('tokenAllocationUpdated')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.tokenAllocationUpdated
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.tokenAllocationUpdated ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Token Vesting & Delivery Section -->
        <div class="py-6 border-b border-gray-200">
            <h2 class="text-sm text-gray-500 mb-4">Token Vesting & Delivery</h2>

            <!-- TGE SCHEDULED -->
            <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="font-medium">TGE SCHEDULED</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('tgeScheduled')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.tgeScheduled
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.tgeScheduled ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>

            <!-- TOKEN UNLOCK COMING SOON -->
            <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="font-medium">TOKEN UNLOCK COMING SOON</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('tokenUnlockComingSoon')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.tokenUnlockComingSoon
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.tokenUnlockComingSoon ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>

            <!-- TOKENS AVAILABLE TO CLAIM -->
            <div class="flex items-center justify-between py-4">
                <div class="font-medium">TOKENS AVAILABLE TO CLAIM</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('tokensAvailableToClaim')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.tokensAvailableToClaim
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.tokensAvailableToClaim ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Referrals & Bonuses Section -->
        <div class="py-6">
            <h2 class="text-sm text-gray-500 mb-4">Referrals & Bonuses</h2>

            <!-- REFERRAL JOINED -->
            <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="font-medium">REFERRAL JOINED</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('referralJoined')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.referralJoined
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.referralJoined ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>

            <!-- BONUS RECEIVED -->
            <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="font-medium">BONUS RECEIVED</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('bonusReceived')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.bonusReceived
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.bonusReceived ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>

            <!-- INVITE FRIENDS REMINDER -->
            <div class="flex items-center justify-between py-4">
                <div class="font-medium">INVITE FRIENDS REMINDER</div>
                <div class="w-10 h-6">
                    <div @click="toggleNotification('inviteFriendsReminder')" :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer',
                        notificationSettings.inviteFriendsReminder
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                    ]">
                        {{ notificationSettings.inviteFriendsReminder ? 'ON' : 'OFF' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

// Notification settings
const notificationSettings = reactive({
    ieoParticipationConfirmed: true,
    paymentReceived: false,
    purchaseFailed: true,
    ieoRoundEndingSoon: true,
    tokenAllocationUpdated: true,
    tgeScheduled: true,
    tokenUnlockComingSoon: false,
    tokensAvailableToClaim: true,
    referralJoined: true,
    bonusReceived: false,
    inviteFriendsReminder: true
});

// Toggle işlevselliği
const toggleNotification = (setting) => {
    notificationSettings[setting] = !notificationSettings[setting];
    console.log(`${setting} is now ${notificationSettings[setting] ? 'ON' : 'OFF'}`);
    // Gerçek bir uygulamada, burada API'ye güncelleme gönderilir
};
</script>