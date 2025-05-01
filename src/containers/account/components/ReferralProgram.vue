<script setup>
import { ref } from 'vue';
import SettingItem from '@/components/SettingItem.vue'
import SvgIcon from '@/components/ui/svg-icon/SvgIcon.vue';
import { Button } from "@/components/ui/button";
import ScanQRCode from '@/components/dialogs/ScanQRCode.vue';
import ChangeReferralLink from '@/components/dialogs/ChangeReferralLink.vue';

const referralLink = ref('IEODASHBOARD.COM/FRIEND123');
const totalEarned = ref(100);
const scanQRRef = ref(null);
const editReferralRef = ref(null);

const referrals = ref([
  {
    name: 'ADNREY OMELCHENKO',
    joinedDate: 'Joined 07.02.2025',
    icon: "laptop",
    received: 10
  },
  {
    name: 'YURIK TYMOSHCHUCH',
    joinedDate: 'Joined 05.02.2025',
    icon: "mobile",
    received: 10
  },
  {
    name: 'ABAZER THINGA',
    joinedDate: 'Joined 25.01.2025',
    icon: "desktop",
    received: 10
  }
]);

const copyLink = () => {
  console.log('Copy link clicked');
};

const editLink = () => {
  editReferralRef.value.openModal()
};

const showQrCode = () => {
  scanQRRef.value.openModal()
};
</script>

<template>

  <div>
    <div class="px-4 border-b ">
      <p class="pt-5 text-caption-12 text-secondary">Share the link with a friend and get bonuses</p>

      <div class="flex flex-wrap items-center justify-between py-5">
        <div class="flex items-center gap-3">
          <div class="font-mono font-medium text-mono-12">{{ referralLink }}</div>
          <Button variant="link-default" size="icon" @click="copyLink">
            <SvgIcon name="copy" class="size-5" />
          </Button>
          <Button variant="link-default" size="icon" @click="editLink">
            <SvgIcon name="edit" class="size-5" />
          </Button>
          <Button variant="link-default" size="icon" @click="showQrCode">
            <SvgIcon name="qr" class="size-5" />
          </Button>
        </div>

        <div class="bg-surface-sunken text-right p-4 space-y-1 rounded-lg border ">
          <div class="text-secondary text-caption-12 w-[120px]">In general, you got</div>
          <div class="text-caption-12 text-[18px]">{{ totalEarned }} <span class="text-mono-12">ELX</span></div>
        </div>
      </div>
    </div>

    <div class="px-4">
      <h2 class="pt-5 text-caption-12 text-secondary">Your referrals</h2>

      <SettingItem v-for="(referral, index) in referrals" :key="index" :value="referral.name"
        :description="referral.joinedDate">
        <template #icon>
          <SvgIcon :name="referral.icon" class="size-5" />
        </template>
        <template #action>
          <div class="text-mono-12 font-medium">
            YOU RECEIVED {{ referral.received }} ELX
          </div>
        </template>
      </SettingItem>
    </div>

    <ScanQRCode ref="scanQRRef" />
    <ChangeReferralLink ref="editReferralRef" />
  </div>
</template>