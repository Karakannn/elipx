<script setup>
import { ref, onMounted, nextTick, computed, watch } from 'vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Account from './components/Account.vue';
import Security from './components/Security.vue';
import DashboardCustomization from './components/DashboardCustomization.vue';
import ReferralProgram from './components/ReferralProgram.vue';
import Notification from './components/Notification.vue';
import AccountVerified from './components/AccountVerified.vue';
import SvgIcon from '@/components/ui/svg-icon/SvgIcon.vue';

const tabs = ref([
    { value: 'account', icon: 'user', title: 'Account' },
    { value: 'security', icon: 'security', title: 'Security' },
    { value: 'dashboard-customization', icon: 'activity', title: 'Dashboard Customization' },
    { value: 'referral-program', icon: 'wallet', title: 'Referral Program' },
    { value: 'notification', icon: 'bell', title: 'Notification' }
]);

const container = ref(null);
const indicator = ref(null);
const activeTab = ref('account');

const activeTabTitle = computed(() => {
    const tab = tabs.value.find(t => t.value === activeTab.value);
    return tab ? tab.title : '';
});

onMounted(() => {
    const updateIndicator = () => {
        const activeTabEl = container.value?.querySelector('[data-state="active"]');
        if (!activeTabEl || !indicator.value) return;

        const tabDiv = activeTabEl.querySelector('.custom-tab-trigger');
        if (!tabDiv) return;

        const tabRect = tabDiv.getBoundingClientRect();
        const containerRect = container.value.getBoundingClientRect();

        indicator.value.style.width = `${tabDiv.offsetWidth}px`;
        indicator.value.style.transform = `translateX(${tabRect.left - containerRect.left}px)`;
    };

    nextTick(updateIndicator);

    window.addEventListener('resize', updateIndicator);

    new MutationObserver(() => nextTick(updateIndicator)).observe(
        container.value,
        { attributes: true, subtree: true, attributeFilter: ['data-state'] }
    );
});
</script>

<template>
    <div class="space-y-1">
        <AccountVerified />
        <Card>
            <CardHeader class="p-4 border-b">
                <CardTitle class="text-h4">{{ activeTabTitle }}</CardTitle>
            </CardHeader>
            <CardContent class="p-0">
                <Tabs v-model="activeTab" default-value="account" class="pb-0">
                    <div class="relative" ref="container">
                        <div class="border-b w-full px-2 overflow-x-auto">
                            <TabsList class="border-b space-x-4 overflow-x-auto">
                                <TabsTrigger v-for="tab in tabs" :key="tab.value" class="p-0" :value="tab.value">
                                    <div class="custom-tab-trigger">
                                        <SvgIcon :name="tab.icon" class="size-4" />
                                        <span class="text-mono-12">{{ tab.title }}</span>
                                    </div>
                                </TabsTrigger>
                            </TabsList>
                            <div ref="indicator" class="custom-tab-indicator"></div>
                        </div>
                    </div>
                    <TabsContent value="account">
                        <Account />
                    </TabsContent>
                    <TabsContent value="security">
                        <Security />
                    </TabsContent>
                    <TabsContent value="dashboard-customization">
                        <DashboardCustomization />
                    </TabsContent>
                    <TabsContent value="referral-program">
                        <ReferralProgram />
                    </TabsContent>
                    <TabsContent value="notification">
                        <Notification />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    </div>
</template>

<style>
[data-state="active"]::after {
    display: none !important;
}
</style>