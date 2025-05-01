<script setup>
import { reactive } from 'vue';
import SettingItem from '@/components/SettingItem.vue'
import SvgIcon from '@/components/ui/svg-icon/SvgIcon.vue';
import ToggleSwitch from './ToggleSwitch.vue';

const notificationSettings = reactive({
    // IEO & Transactions
    ieoParticipationConfirmed: true,
    paymentReceived: false,
    purchaseFailed: true,
    ieoRoundEndingSoon: true,
    tokenAllocationUpdated: true,

    // Token Vesting & Delivery
    tgeScheduled: true,
    tokenUnlockComingSoon: false,
    tokensAvailableToClaim: true,

    // Referrals & Bonuses
    referralJoined: true,
    bonusReceived: false,
    inviteFriendsReminder: true
});

const toggleNotification = (setting) => {
    notificationSettings[setting] = !notificationSettings[setting];
    console.log(`${setting} is now ${notificationSettings[setting] ? 'ON' : 'OFF'}`);
};
</script>

<template>
    <div class="px-4">
        <h2 class="text-caption-12 text-secondary pt-5">IEO & Transactions</h2>

        <SettingItem value="IEO PARTICIPATION CONFIRMED">
            <template #action>
                <ToggleSwitch :value="notificationSettings.ieoParticipationConfirmed"
                    @toggle="toggleNotification('ieoParticipationConfirmed')" />
            </template>
        </SettingItem>

        <SettingItem value="PAYMENT RECEIVED">
            <template #action>
                <ToggleSwitch :value="notificationSettings.paymentReceived"
                    @toggle="toggleNotification('paymentReceived')" />
            </template>
        </SettingItem>

        <SettingItem value="PURCHASE FAILED">
            <template #action>
                <ToggleSwitch :value="notificationSettings.purchaseFailed"
                    @toggle="toggleNotification('purchaseFailed')" />
            </template>
        </SettingItem>

        <SettingItem value="IEO ROUND ENDING SOON">
            <template #action>
                <ToggleSwitch :value="notificationSettings.ieoRoundEndingSoon"
                    @toggle="toggleNotification('ieoRoundEndingSoon')" />
            </template>
        </SettingItem>

        <SettingItem value="TOKEN ALLOCATION UPDATED">
            <template #action>
                <ToggleSwitch :value="notificationSettings.tokenAllocationUpdated"
                    @toggle="toggleNotification('tokenAllocationUpdated')" />
            </template>
        </SettingItem>
    </div>

    <div class="px-4">
        <h2 class="text-caption-12 text-secondary pt-5">Token Vesting & Delivery</h2>

        <SettingItem value="TGE SCHEDULED">
            <template #action>
                <ToggleSwitch :value="notificationSettings.tgeScheduled" @toggle="toggleNotification('tgeScheduled')" />
            </template>
        </SettingItem>

        <SettingItem value="TOKEN UNLOCK COMING SOON">
            <template #action>
                <ToggleSwitch :value="notificationSettings.tokenUnlockComingSoon"
                    @toggle="toggleNotification('tokenUnlockComingSoon')" />
            </template>
        </SettingItem>

        <SettingItem value="TOKENS AVAILABLE TO CLAIM">
            <template #action>
                <ToggleSwitch :value="notificationSettings.tokensAvailableToClaim"
                    @toggle="toggleNotification('tokensAvailableToClaim')" />
            </template>
        </SettingItem>
    </div>

    <div class="px-4">
        <h2 class="text-caption-12 text-secondary pt-5">Referrals & Bonuses</h2>

        <SettingItem value="REFERRAL JOINED">
            <template #action>
                <ToggleSwitch :value="notificationSettings.referralJoined"
                    @toggle="toggleNotification('referralJoined')" />
            </template>
        </SettingItem>

        <SettingItem value="BONUS RECEIVED">
            <template #action>
                <ToggleSwitch :value="notificationSettings.bonusReceived"
                    @toggle="toggleNotification('bonusReceived')" />
            </template>
        </SettingItem>

        <SettingItem value="INVITE FRIENDS REMINDER">
            <template #action>
                <ToggleSwitch :value="notificationSettings.inviteFriendsReminder"
                    @toggle="toggleNotification('inviteFriendsReminder')" />
            </template>
        </SettingItem>
    </div>
</template>