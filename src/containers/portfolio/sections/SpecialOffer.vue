<script setup lang="ts">

import SpecialOfferCarousel from "../components/SpecialOfferCarousel.vue";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SvgIcon } from "@/components/ui/svg-icon";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
</script>

<template>
 <div class="flex flex-col lg:flex-row lg:gap-16">
    <div class="space-y-4 lg:max-w-xl p-4 pb-0">
        <div class="text-h4 sm:text-h3 font-[450] flex items-center gap-1 flex-wrap">
                <span class="text-muted font-[450]">Get Started,</span>
                <span>Jason</span>
                <Avatar class="mx-1">
                    <AvatarImage src="/public/avatar.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
               <div class="w-full flex items-center">
                <span>Complete</span>
                <SvgIcon name="gg_check-o" class="size-6 mr-3" />
                <span class="text-muted font-[450]">your life ELX Dashboard</span> 
               </div>
        </div>

        <div class="space-y-4">

            <Select defaultValue="test">
                <SelectTrigger class="rounded-full bg-on-sunken border-none cursor-pointer">
                    <SvgIcon name="metamask" class="size-6" />
                    <SelectValue class="text-mono-12 uppercase" placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="test">
                            0xAbC1...92De (Verified)
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <div class="space-y-3 mb-4">
                <h5 class="text-caption-12 text-secondary">Estimated Balance</h5>
                <Separator />
                <div class="flex gap-2">
                    <h1 class="text-balance">200.<span class="text-muted">40</span></h1>
                    <div class="flex flex-col h-full gap-2 justify-between">
                        <Button variant="secondary" class="h-min w-min px-2 py-2">
                            <SvgIcon name="logo" />
                            <span class="text-mono-12">ELX</span>
                        </Button>

                        <div class="flex gap-2 items-center">
                            <span class="text-mono-10">~$50</span>
                            <SvgIcon name="refresh" class="size-3 cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div class="flex gap-3 w-full border-t -on-sunken">

                    <div class="space-y-1.5 flex-1 pt-3 border-r -on-sunken">
                        <h5 class=" text-secondary text-caption-12">Token Price:</h5>
                        <span class=" text-mono-12">0.2715$</span>
                    </div>

                    <div class="space-y-1.5 flex-1 pt-3 ">
                        <h5 class=" text-secondary text-caption-12">Locked Token:</h5>
                        <span class=" text-mono-12">248 ELX</span>
                    </div>

                    <div class="space-y-1.5 flex-1 pt-3 border-r -on-sunken">
                        <h5 class=" text-secondary text-caption-12">IEO Date</h5>
                        <span class=" text-mono-12">28 may 2025</span>
                    </div>
                </div>

                <div class="space-x-4">
                    <Button class="text-mono-12 uppercase gap-1">
                        DEPOSIT
                        <SvgIcon name="plus" />
                    </Button>
                    <Button variant="secondary" class="text-mono-12 uppercase gap-1">
                        WITHDRAWAL
                        <SvgIcon name="arrow-up-right" />
                    </Button>
                </div>
            </div>

        </div>
    </div>

    <SpecialOfferCarousel/>
 </div>
</template>