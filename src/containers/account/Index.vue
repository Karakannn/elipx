<script setup>
import { ref } from 'vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Account from './components/Account.vue';
import DashboardCustomization from './components/DashboardCustomization.vue';
import Notification from './components/Notification.vue';
import ReferralProgram from './components/ReferralProgram.vue';
import AccountVerified from './components/AccountVerified.vue';
import Security from './components/Security.vue';
import { SvgIcon } from "@/components/ui/svg-icon";

</script>

<template>

    <div class="space-y-1">
        <AccountVerified />

        <Card>
            <CardHeader class="p-4 border-b">
                <CardTitle class="text-h4">Account</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4 p-0">
                <Tabs default-value="account" class="gap-0">
                    <TabsList class="space-x-1 border-b w-full">
                        <TabsTrigger asChild value="account">
                            <Button class="px-2 py-2" variant="tertiary">
                                <SvgIcon name="fire" class="size-4" />
                                <span class="text-[12px]">account</span>
                            </Button>
                        </TabsTrigger>
                        <TabsTrigger asChild value="security">
                            <Button class="px-2 py-2" variant="tertiary">
                                <SvgIcon name="new" class="size-4" />
                                <span class="text-[12px]">security</span>
                            </Button>
                        </TabsTrigger>

                        <TabsTrigger asChild value="dashboard-customization">
                            <Button class="px-2 py-2" variant="tertiary">
                                <SvgIcon name="new" class="size-4" />
                                <span class="text-[12px]">Dashboard Customization</span>
                            </Button>
                        </TabsTrigger>


                        <TabsTrigger asChild value="referral-program">
                            <Button class="px-2 py-2" variant="tertiary">
                                <SvgIcon name="new" class="size-4" />
                                <span class="text-[12px]">Referral program</span>
                            </Button>
                        </TabsTrigger>

                        <TabsTrigger asChild value="notification">
                            <Button class="px-2 py-2" variant="tertiary">
                                <SvgIcon name="new" class="size-4" />
                                <span class="text-[12px]">Notification</span>
                            </Button>
                        </TabsTrigger>

                    </TabsList>
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
