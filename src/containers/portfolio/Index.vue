<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import SpecialOffer from "./sections/SpecialOffer.vue";
import Transactions from "./sections/Transactions.vue";
import IEO from "./sections/IEO.vue";
import IEODetail from "./sections/IEODetail.vue";
import Announcements from "./sections/Announcements.vue";
import MyTokenAllocation from "./sections/MyTokenAllocation.vue";
import Allocation from "./sections/Allocation.vue";
import PurchaseSummary from "./sections/PurchaseSummary.vue";
import IEOTimeline from "./sections/IEOTimeline.vue";
import TokenomicsOverview from "./sections/TokenomicsOverview.vue";
</script>

<template>
    <div class="sm:p-4 space-y-6">
        <SpecialOffer />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="col-span-2 flex flex-col space-y-4">
                <Transactions />
                <IEO />
                <Announcements/>
                <MyTokenAllocation/>
                <Allocation />
                <PurchaseSummary />
                <IEOTimeline />
                <TokenomicsOverview />
            </div>
            <div class="hidden sm:flex col-span-1 flex-col space-y-4">
                <IEO />
                <Announcements/>
                <MyTokenAllocation/>
                <Allocation />
                <PurchaseSummary />
                <IEOTimeline />
                <TokenomicsOverview />
            </div>
        </div>
    </div>
</template>

<style></style>
