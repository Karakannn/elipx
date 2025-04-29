<script setup>
import { Button } from "@/components/ui/button";
import { SvgIcon } from "@/components/ui/svg-icon";

</script>

<template>
    <div class="bg-white rounded-lg shadow-sm p-6 w-full max-w-[500px] mx-auto">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">IEO</h1>
            <button class="text-gray-500 flex items-center text-sm">
                View Details
                <ChevronRight class="h-4 w-4 ml-1" />
            </button>
        </div>

        <div class="flex gap-2 text-mono-12 font-mono overflow-x-auto">
            <Button class="px-2 py-2.5" variant="tertiary">
                <SvgIcon name="fav" class="size-4" />
                ALL
            </Button>
            <Button class="px-2 py-2.5" variant="tertiary">
                <SvgIcon name="fire" class="size-4" />
                RELEASE
            </Button>
            <Button class="px-2 py-2.5" variant="tertiary">
                <SvgIcon name="new" class="size-4" />
                COMING SOON
            </Button>
            <Button class="px-2 py-2.5" variant="tertiary">
                <SvgIcon name="check_circle" class="size-4" />
                COMPLETED
            </Button>
        </div>

        <!-- Binance Exchange -->
        <div class="mb-6">
            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                    <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <SvgIcon name="binance" class="size-4" />

                    </div>
                    <span class="font-medium">Binance</span>
                </div>
                <div class="flex items-center">
                    <span class="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                    <span class="text-amber-500 text-sm font-medium">IN PROGRESS</span>
                </div>
            </div>

            <div class="flex justify-between mb-4">
                <div>
                    <div class="text-gray-500 text-sm mb-1">Start</div>
                    <div class="font-medium">20 MAY 2025</div>
                </div>
                <div class="text-right">
                    <div class="text-gray-500 text-sm mb-1">End</div>
                    <div class="font-medium">28 MAY 2025</div>
                </div>
            </div>

            <div class="mb-2">
                <div class="text-gray-500 text-sm mb-1">Token Info</div>
            </div>

            <div class="border-t border-gray-100 py-3 flex justify-between">
                <div class="text-gray-800">Token Price</div>
                <div class="font-medium">0.45$</div>
            </div>

            <div class="border-t border-gray-100 py-3 flex justify-between">
                <div class="text-gray-800">Tokens for Sale</div>
                <div class="font-medium">200,000 ELX</div>
            </div>

            <div class="border-t border-gray-100 py-3 flex justify-between">
                <div class="text-gray-800">Total Supply</div>
                <div class="font-medium">10,000,000 ELX</div>
            </div>
        </div>

        <!-- ByBit Exchange -->
        <div class="border-t border-gray-200 pt-6">
            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                    <SvgIcon name="bybit" class="size-4" />
                    <span class="font-medium">ByBit</span>
                </div>
                <div class="flex items-center">
                    <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    <span class="text-green-500 text-sm font-medium">COMPLETED</span>
                </div>
            </div>

            <div class="flex justify-between mb-4">
                <div>
                    <div class="text-gray-500 text-sm mb-1">Start</div>
                    <div class="font-medium">16 APRIL 2025</div>
                </div>
                <div class="text-right">
                    <div class="text-gray-500 text-sm mb-1">End</div>
                    <div class="font-medium">20 APRIL 2025</div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
/* Additional custom styles if needed */
</style>