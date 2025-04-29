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

</script>

<template>
    <div class="p-4 space-y-6">
        <SpecialOffer />
        <!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Transactions class="col-span-2" />
            <IEO class="col-span-1" />
        </div>
 -->
        <!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <IEODetail class="col-span-2" />
            <Announcements class="col-span-1" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Announcements class="col-span-2" />
        </div> -->

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!-- <MyTokenAllocation class="col-span-2" /> -->
            <!--    <Allocation class="col-span-2" /> -->
            <PurchaseSummary class="col-span-2" />
        </div>
    </div>
</template>
