<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import SpecialOffer from "./sections/SpecialOffer.vue";
import Transactions from "./sections/Transactions.vue";
import IEO from "./sections/IEO.vue";

</script>

<template>
    <div class="p-4 space-y-6">
        <SpecialOffer />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Transactions class="col-span-2" />
            <IEO class="col-span-1" />
        </div>
    </div>
</template>
