<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Account from './components/Account.vue';
import Security from './components/Security.vue';
import DashboardCustomization from './components/DashboardCustomization.vue';
import ReferralProgram from './components/ReferralProgram.vue';
import Notification from './components/Notification.vue';
import AccountVerified from './components/AccountVerified.vue';
import SvgIcon from '@/components/ui/svg-icon/SvgIcon.vue';

const container = ref(null), indicator = ref(null);

onMounted(() => {
    const updateIndicator = () => {
        const activeTab = container.value?.querySelector('[data-state="active"]');
        if (!activeTab || !indicator.value) return;

        const tabDiv = activeTab.querySelector('.custom-tab-trigger');
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
                <CardTitle class="text-h4">Account</CardTitle>
            </CardHeader>
            <CardContent class="p-0">
                <Tabs default-value="account" class="pb-0">
                    <div class="relative" ref="container">
                        <div class="border-b w-full px-2 ">

                            <TabsList class="border-b space-x-4">
                                <TabsTrigger class="p-0" value="account">
                                    <div class="custom-tab-trigger">
                                        <SvgIcon name="user" class="size-4" />
                                        <span class="text-mono-12">account</span>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger class="p-0" value="security">
                                    <div class="custom-tab-trigger">
                                        <SvgIcon name="security" class="size-4" />
                                        <span class="text-mono-12">security</span>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger class="p-0" value="dashboard-customization">
                                    <div class="custom-tab-trigger">
                                        <SvgIcon name="activity" class="size-4" />
                                        <span class="text-mono-12">Dashboard Customization</span>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger class="p-0" value="referral-program">
                                    <div class="custom-tab-trigger">
                                        <SvgIcon name="wallet" class="size-4" />
                                        <span class="text-mono-12">Referral program</span>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger class="p-0" value="notification">
                                    <div class="custom-tab-trigger">
                                        <SvgIcon name="wallet" class="size-4" />
                                        <span class="text-mono-12">Notification</span>
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