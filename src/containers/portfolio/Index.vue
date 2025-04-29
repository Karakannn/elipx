<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import SpecialOffer from "./sections/SpecialOffer.vue";
import Transactions from "./sections/Transactions.vue";

</script>

<template>
    <div class="p-4 space-y-6">
        <SpecialOffer />
        <div class="grid grid-cols-3">
            <Transactions class="col-span-2" />
        </div>
    </div>
</template>
