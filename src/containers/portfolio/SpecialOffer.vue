<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SvgIcon } from "@/components/ui/svg-icon";

</script>

<template>
    <div class="flex flex-col gap-1">
        <div class="text-h3 text-primary font-[450] flex items-center gap-1">
            <span class="text-text-muted font-[450]">Get Started,</span>
            <span>Jason</span>
            <Avatar>
                <AvatarImage src="/public/avatar.png" alt="@unovue" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        <div class="text-h3 font-[450] flex gap-1 items-center">
            <div class="flex items-center gap-1">
                <span>Complete</span>
                <SvgIcon name="gg_check-o" class="size-6" />
            </div>
            <span class="text-text-muted font-[450]">your life ELX Dashboard</span>
        </div>
    </div>

    <div>
        <!-- TODO:Metamask -->

        <div class="space-y-3">
            <h5 class="text-caption-12 text-text-secondary">Estimated Balance</h5>
            <Seperator class="bg-red-800 h-full w-full" />
        </div>

    </div>
</template>