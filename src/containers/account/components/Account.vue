<script setup>
import { ref } from 'vue';
import SettingItem from './SettingItem.vue'
import SvgIcon from '@/components/ui/svg-icon/SvgIcon.vue';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


// User information
const userInfo = ref({
    username: 'JOHN.DOE_83972041',
    country: 'UNITED STATES',
    email: 'JO***@GMAIL.COM',
    phone: '+1 555 123 4567',
    joined: 'JAN 12, 2024'
});

// Wallet information
const wallets = ref({
    main: {
        address: '0XA6D1...82DE',
        verified: true
    },
    ledger: {
        address: 'CNRTX...12TY',
        verified: true
    }
});

// Button click handlers
const changeCountry = () => {
    console.log('Change country clicked');
};

const changeEmail = () => {
    console.log('Change email clicked');
};

const changePhone = () => {
    console.log('Change phone clicked');
};

const disconnectWallet = (wallet) => {
    console.log(`Disconnect ${wallet} wallet clicked`);
};

const connectNewWallet = () => {
    console.log('Connect new wallet clicked');
};
</script>

<template>
    <div class="">

        <div class="border-b border-border px-4">
            <h2 class="text-caption-12 text-secondary pt-5">Profile photo</h2>
            <div class="flex items-center gap-5 pt-5 pb-3">
                <Avatar class="shrink-0 cursor-pointer h-[60px] w-[60px]" >
                    <AvatarImage src="/public/avatar.png" alt="@unovue"  />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div class="flex gap-2">
                    <Button variant="secondary" size="sm">
                        <span class="uppercase text-mono-12">Change Photo</span>
                    </Button>
                    <Button variant="destructive" size="sm">
                        <span class="uppercase text-mono-12">DELETE</span>
                    </Button>
                </div>
            </div>
        </div>

        <div class="px-4">
            <h2 class="text-caption-12 text-secondary pt-5">Personal Information</h2>


            <SettingItem label="username" :value="userInfo.username">
                <template #icon>
                    <SvgIcon name="username" class="size-5" />
                </template>
            </SettingItem>


            <!-- TODO: need button sizes change to 32px width -->
            <SettingItem label="Country" :value="userInfo.country">
                <template #icon>
                    <SvgIcon name="id" class="size-5" />
                </template>

                <template #action>
                    <Button variant="secondary" size="sm">
                        <span class="uppercase text-mono-12">Change County</span>
                        <SvgIcon name="chevron-right" class="size-5" />
                    </Button>
                </template>
            </SettingItem>

            <SettingItem label="Email" :value="userInfo.email"
                description="Safeguarding the email address linked to your Kraken account is the key step in ensuring your account's security.">
                <template #icon>
                    <SvgIcon name="email" class="size-5" />
                </template>
                <template #action>
                    <Button variant="secondary" size="sm">
                        <span class="uppercase text-mono-12">Change Email</span>
                        <SvgIcon name="chevron-right" class="size-5" />
                    </Button>
                </template>
            </SettingItem>


            <SettingItem label="PHONE" :value="userInfo.phone" :verified="true">
                <template #icon>
                    <SvgIcon name="mobile" class="size-5" />
                </template>
                <template #action>
                    <Button variant="secondary" size="sm">
                        <span class="uppercase text-mono-12">Change Phone</span>
                        <SvgIcon name="chevron-right" class="size-5" />
                    </Button>
                </template>
            </SettingItem>

            <SettingItem label="JOINED" :value="userInfo.joined">
                <template #icon>
                    <SvgIcon name="gg_check-o" class="size-5" />
                </template>
            </SettingItem>
        </div>

        <div class="px-4">
            <h2 class="text-caption-12 text-secondary pt-5">Linked Wallets</h2>

            <SettingItem label="MY MAIN WALLET" :value="wallets.main.address" :verified="true">
                <template #icon>
                    <SvgIcon name="metamask" class="size-5" />
                </template>
                <template #action>
                    <Button variant="secondary" size="sm">
                        <span class="uppercase text-mono-12">Disconnect</span>
                        <SvgIcon name="chevron-right" class="size-5" />
                    </Button>
                </template>
            </SettingItem>

            <SettingItem label="LEDGER WALLET" :value="wallets.ledger.address" :verified="true">
                <template #icon>
                    <SvgIcon name="ledger" class="size-5" />
                </template>
                <template #action>
                    <Button variant="secondary" size="sm">
                        <span class="uppercase text-mono-12">Disconnect</span>
                        <SvgIcon name="chevron-right" class="size-5" />
                    </Button>
                </template>
            </SettingItem>

            <SettingItem label="LINKED WALLET"
                description="WE SUPPORT METAMASK, WALLETCONNECT, LEDGER, AND OTHER POPULAR WALLETS.">
                <template #icon>
                    <SvgIcon name="ledger" class="size-5" />
                </template>
                <template #action>
                    <Button variant="secondary" size="sm">
                        <span class="uppercase text-mono-12">Connect New Wallet</span>
                        <SvgIcon name="linked" class="size-5" />
                    </Button>
                </template>
            </SettingItem>
        </div>

        <div class="px-4 py-5 text-secondary text-caption-12">
            You can <a href="#" class="text-red-500">delete your account</a>
        </div>
    </div>
</template>