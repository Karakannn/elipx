<template>
    <div class="bg-white rounded-lg shadow-sm p-6 w-full max-w-[500px] mx-auto">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">IEO</h1>
            <button class="text-gray-500 flex items-center text-sm">
                View Details
                <ChevronRight class="h-4 w-4 ml-1" />
            </button>
        </div>

        <div class="flex gap-2 mb-6 overflow-x-auto">
            <button class="flex items-center gap-1 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
                <Star class="h-4 w-4" />
                ALL
            </button>
            <button
                class="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
                <Home class="h-4 w-4" />
                RELEASE
            </button>
            <button
                class="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
                <Clock class="h-4 w-4" />
                COMING SOON
            </button>
            <button
                class="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
                <CheckCircle class="h-4 w-4" />
                COMPLETED
            </button>
        </div>

        <!-- Binance Exchange -->
        <div class="mb-6">
            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                    <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=40&width=40&query=binance+logo"
                            alt="Binance" class="w-6 h-6" />
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
                    <div class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center mr-3">
                        <span class="text-white text-xs">bybit</span>
                    </div>
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

<script setup>
import { ChevronRight, Star, Home, Clock, CheckCircle } from 'lucide-vue-next';
</script>

<style scoped>
/* Additional custom styles if needed */
</style>