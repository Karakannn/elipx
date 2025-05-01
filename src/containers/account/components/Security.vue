<script setup>
import { ref } from 'vue';
import SettingItem from '@/components/SettingItem.vue'
import SvgIcon from '@/components/ui/svg-icon/SvgIcon.vue';
import { Button } from "@/components/ui/button";
import ChangeEmail from '@/components/dialogs/ChangeEmail.vue';
import ChangeCountry from '@/components/dialogs/ChangeCountry.vue';
import ChangePhoneNumber from '@/components/dialogs/ChangePhoneNumber.vue';
import DisconnectApp from '@/components/dialogs/DisconnectApp.vue';
import TerminateSession from '@/components/dialogs/TerminateSession.vue';
import Passkeys from '@/components/dialogs/Passkeys.vue';
import ChangePassword from '@/components/dialogs/ChangePassword.vue';


const passKeyRef = ref(null);
const authAppRef = ref(null);
const changeMailRef = ref(null);
const changePasswordRef = ref(null);
const changeCountryRef = ref(null);
const changePhoneRef = ref(null);
const terminateSessionRef = ref(null);

// 2FA bilgileri
const twoFactorAuth = ref({
    passkeys: {
        status: 'PIN CODE',
        enabled: true
    },
    authenticator: {
        status: 'OFF',
        enabled: false
    },
    email: {
        status: 'JO*****@GMAIL.COM',
        enabled: true
    },
    phone: {
        status: 'NO PHONE NUMBER',
        enabled: false
    },
    password: {
        enabled: true
    }
});

// Aktif oturumlar
const activeSessions = ref([
    {
        ip: '85.15.90.451',
        device: 'CHROME 131, MACBOOK PRO M1 PRO',
        location: 'Krakow, Poland - 07.02.2025'
    },
    {
        ip: '85.15.90.451',
        device: 'CHROME 12, IPHONE 15 PRO MAX',
        location: 'Krakow, Poland - online'
    },
    {
        ip: '85.15.90.451',
        device: 'SAFARI 87, MACBOOK PRO M1 PRO',
        location: 'Krakow, Poland - 07.02.2025'
    }
]);

// Button click handlers
const managePasskeys = () => {
    passKeyRef.value.openModal();
};

const connectAuthenticator = () => {
    authAppRef.value.openModal();
};

const manageEmail = () => {
    changeMailRef.value.openModal();
};

const changePhoneNumber = () => {
    changePhoneRef.value.openModal();
};

const managePassword = () => {
    changePasswordRef.value.openModal();
};

const terminateSession = (index) => {
    terminateSessionRef.value.openModal();
};
</script>

<template>
    <div>
        <div class="border-b border-border px-4">
            <h2 class="text-caption-12 text-secondary pt-5">Two-Factor Authentication (2FA)</h2>

            <SettingItem label="PASSKEYS" description="Protect your account and withdrawals with an access key">
                <template #icon>
                    <SvgIcon name="key" class="size-5" />
                </template>
                <template #action>
                    <div class="flex items-center gap-3">
                        <div class="text-mono-12 text-secondary">{{ twoFactorAuth.passkeys.status }}</div>
                        <Button variant="secondary" size="sm" @click="managePasskeys">
                            <span class="uppercase text-mono-12">MANAGE</span>
                            <SvgIcon name="chevron-right" class="size-5" />
                        </Button>
                    </div>
                </template>
            </SettingItem>

            <SettingItem label="AUTHENTICATOR APP"
                description="Using Google Authenticator to protect your account and transactions.">
                <template #icon>
                    <SvgIcon name="authenticator" class="size-5" />
                </template>
                <template #action>
                    <div class="flex items-center gap-3">
                        <div class="text-mono-12 text-secondary">{{ twoFactorAuth.authenticator.status }}</div>
                        <Button variant="secondary" size="sm" @click="connectAuthenticator">
                            <span class="uppercase text-mono-12">CONNECT</span>
                        </Button>
                    </div>
                </template>
            </SettingItem>

            <SettingItem label="EMAIL" description="Using your email to protect your account and transactions.">
                <template #icon>
                    <SvgIcon name="email" class="size-5" />
                </template>
                <template #action>
                    <div class="flex items-center gap-3">
                        <div class="text-mono-12 text-secondary">{{ twoFactorAuth.email.status }}</div>
                        <Button variant="secondary" size="sm" @click="manageEmail">
                            <span class="uppercase text-mono-12">MANAGE</span>
                            <SvgIcon name="chevron-right" class="size-5" />
                        </Button>
                    </div>
                </template>
            </SettingItem>

            <SettingItem label="PHONE NUMBER"
                description="Using your phone number to protect your account and transactions.">
                <template #icon>
                    <SvgIcon name="mobile" class="size-5" />
                </template>
                <template #action>
                    <div class="flex items-center gap-3">
                        <div class="text-mono-12 text-secondary">{{ twoFactorAuth.phone.status }}</div>
                        <Button variant="secondary" size="sm">
                            <span class="uppercase text-mono-12">ADD</span>
                        </Button>
                    </div>
                </template>
            </SettingItem>

            <SettingItem label="PASSWORD" description="The login password is used to log in to your account.">
                <template #icon>
                    <SvgIcon name="lock" class="size-5" />
                </template>
                <template #action>
                    <Button variant="secondary" size="sm" @click="managePassword">
                        <span class="uppercase text-mono-12">MANAGE</span>
                        <SvgIcon name="chevron-right" class="size-5" />
                    </Button>
                </template>
            </SettingItem>
        </div>

        <div class="border-b border-border px-4">
            <h2 class="text-caption-12 text-secondary pt-5">Active Sessions</h2>

            <SettingItem :value="activeSessions[0].device" :description="activeSessions[0].location">
                <template #icon>
                    <SvgIcon name="laptop" class="size-5" />
                </template>
                <template #label>
                    <div class="text-xs text-secondary">{{ activeSessions[0].ip }}</div>
                </template>
                <template #action>
                    <Button variant="secondary" size="sm" @click="terminateSession(0)">
                        <span class="uppercase text-mono-12">TERMINATE SESSION</span>
                        <SvgIcon name="chevron-right" class="size-5" />
                    </Button>
                </template>
            </SettingItem>

            <SettingItem :value="activeSessions[1].device" :description="activeSessions[1].location">
                <template #icon>
                    <SvgIcon name="mobile" class="size-5" />
                </template>
                <template #label>
                    <div class="text-xs text-secondary">{{ activeSessions[1].ip }}</div>
                </template>
                <template #action>
                    <Button variant="secondary" size="sm" @click="terminateSession(1)">
                        <span class="uppercase text-mono-12">TERMINATE SESSION</span>
                        <SvgIcon name="chevron-right" class="size-5" />
                    </Button>
                </template>
            </SettingItem>

            <SettingItem :value="activeSessions[2].device" :description="activeSessions[2].location">
                <template #icon>
                    <SvgIcon name="desktop" class="size-5" />
                </template>
                <template #label>
                    <div class="text-xs text-secondary">{{ activeSessions[2].ip }}</div>
                </template>
                <template #action>
                    <Button variant="secondary" size="sm" @click="terminateSession(2)">
                        <span class="uppercase text-mono-12">TERMINATE SESSION</span>
                        <SvgIcon name="chevron-right" class="size-5" />
                    </Button>
                </template>
            </SettingItem>
        </div>

        <Passkeys ref="passKeyRef" />
        <ChangeEmail ref="changeMailRef" />
        <ChangePassword ref="changePasswordRef" />
        <ChangeCountry ref="changeCountryRef" />
        <ChangePhoneNumber ref="changePhoneRef" />
        <TerminateSession ref="terminateSessionRef" />
        <DisconnectApp ref="authAppRef" />

    </div>
</template>