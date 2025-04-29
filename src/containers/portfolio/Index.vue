<script setup lang="ts">
import { Separator } from "@/components/ui/separator";

</script>

<template>
    <div class="p-4">

        <div class="flex flex-col gap-1">
            <h1 class="text-h3 text-primary font-[450]">
                <span class="text-text-muted font-[450]">Get Started,</span>
                Jason
            </h1>
            <h1 class="text-h3 font-[450]">
                Complete <span class="text-text-muted font-[450]">your life ELX Dashboard</span>
            </h1>
        </div>

        <div>
            <!-- TODO:Metamask -->

            <div class="space-y-3">
                <h5 class="text-caption-12 text-text-secondary">Estimated Balance</h5>
                <Seperator class="bg-red-800 h-full w-full" />
            </div>

        </div>


    </div>
</template>
