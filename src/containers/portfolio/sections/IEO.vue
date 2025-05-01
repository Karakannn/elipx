<script setup>
import { Button } from "@/components/ui/button";
import { SvgIcon } from "@/components/ui/svg-icon";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardAction,
} from '@/components/ui/card'

</script>

<template>
    <Card>
        <CardHeader class="p-4 border-b">
            <CardTitle class="text-h4">IEO</CardTitle>
            <CardAction>
                <Button variant="link-secondary" class="p-0 flex ">
                    <span class="text-caption-12">View Details</span>
                    <SvgIcon name="chevron-right" class="size-4" />
                </Button>
            </CardAction>
        </CardHeader>
        <CardContent class="space-y-6">
            <div class="flex gap-2 text-mono-12 overflow-x-auto">

                <Button :data-active="true" class="h-7 px-2" variant="tertiary">
                    <SvgIcon name="fav" class="size-4" />
                    ALL
                </Button>
                <Button class="h-7 px-2" variant="tertiary">
                    <SvgIcon name="fire" class="size-4" />
                    RELEASE
                </Button>
                <Button class="h-7 px-2" variant="tertiary">
                    <SvgIcon name="new" class="size-4" />
                    COMING SOON
                </Button>
                <Button class="h-7 px-2" variant="tertiary">
                    <SvgIcon name="check_circle" class="size-4" />
                    COMPLETED
                </Button>
            </div>

            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center gap-2">
                    <SvgIcon name="binance" class="size-6" />
                    <span class=" text-paragraph-14">Binance</span>
                </div>
                <div class="flex items-center">
                    <span class="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                    <span class="text-mono-12">IN PROGRESS</span>
                </div>
            </div>

            <div class="flex justify-between mb-4">
                <div class="space-y-1.5">
                    <div class="text-secondary text-caption-12">Start</div>
                    <div class="text-mono-12">20 MAY 2025</div>
                </div>
                <div class="text-right space-y-1.5">
                    <div class="text-secondary text-caption-12">End</div>
                    <div class="text-mono-12">28 MAY 2025</div>
                </div>
            </div>

            <div>

                <div class="text-secondary text-caption-12">Token Info</div>

                <Separator class="my-2" />

                <div class="space-y-3">
                    <div class=" flex justify-between">
                        <div class="text-caption-12">Token Price</div>
                        <div class="text-mono-12">0.45$</div>
                    </div>
                    <Separator />

                    <div class=" flex justify-between">
                        <div class="text-caption-12">Tokens for Sale</div>
                        <div class="text-mono-12">200,000 ELX</div>
                    </div>
                    <Separator />

                    <div class=" flex justify-between">
                        <div class="text-caption-12">Total Supply</div>
                        <div class="text-mono-12">10,000,000 ELX</div>
                    </div>
                </div>
            </div>


            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center gap-2">
                    <SvgIcon name="bybit" class="size-6" />
                    <span class=" text-paragraph-14">ByBit</span>
                </div>
                <div class="flex items-center">
                    <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    <span class="text-mono-12">COMPLETED</span>
                </div>
            </div>

            <div class="flex justify-between mb-4">
                <div class="space-y-1.5">
                    <div class="text-secondary text-caption-12">Start</div>
                    <div class="text-mono-12">16 APRIL 2025</div>
                </div>
                <div class="text-right space-y-1.5">
                    <div class="text-secondary text-caption-12">End</div>
                    <div class="text-mono-12">20 APRIL 2025</div>
                </div>
            </div>

        </CardContent>

    </Card>
</template>



<style scoped>
/* Additional custom styles if needed */
</style>