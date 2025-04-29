<script setup>
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const chartCanvas = ref(null);
let chart = null;

const legendItems = [
    { color: '#2563eb', label: 'PRIVATE SALE 30% ELX (30%)' },
    { color: '#dbeafe', label: 'PUBLIC SALE 10% ELX (10%)' },
    { color: '#1d4ed8', label: 'TEAM & ADVISORS 15% ELX (15%)' },
    { color: '#93c5fd', label: 'ECOSYSTEM & REWARDS 20% ELX (20%)' },
    { color: '#374151', label: 'LIQUIDITY & DEX 20% ELX (20%)' },
    { color: '#d1d5db', label: 'TREASURY 5% ELX (5%)' }
];

onMounted(() => {
    if (chartCanvas.value) {
        const ctx = chartCanvas.value.getContext('2d');

        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    'PRIVATE SALE',
                    'PUBLIC SALE',
                    'TEAM & ADVISORS',
                    'ECOSYSTEM & REWARDS',
                    'LIQUIDITY & DEX',
                    'TREASURY'
                ],
                datasets: [{
                    data: [30, 10, 15, 20, 20, 5],
                    backgroundColor: [
                        'rgba(45, 46, 50, 1)', // blue-600 (PRIVATE SALE)
                        'rgba(0, 84, 246, 1)', // blue-200 (PUBLIC SALE)
                        'rgba(145, 196, 255, 1)', // blue-700 (TEAM & ADVISORS)
                        'rgba(212, 226, 255, 1)', // blue-300 (ECOSYSTEM & REWARDS)
                        '#374151', // gray-700 (LIQUIDITY & DEX)
                        '#d1d5db', // gray-300 (TREASURY)
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                return `${label}: ${value}%`;
                            }
                        }
                    }
                }
            }
        });
    }
});

</script>
<template>
    <Card>
        <CardHeader class="p-4 border-b">
            <CardTitle class="text-h4">Tokenomics Overview</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">

            <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                    <canvas ref="chartCanvas" height="300"></canvas>
                </div>

                <div class="w-full md:w-1/2 pl-0 md:pl-8">
                    <div class="space-y-2">
                        <div v-for="(item, index) in legendItems" :key="index" class="flex items-center">
                            <div class="w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: item.color }"></div>
                            <span class="text-xs">{{ item.label }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>



<style scoped>
/* Additional custom styles if needed */
</style>