<script setup>
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from '@/components/ui/carousel'
import { SvgIcon } from "@/components/ui/svg-icon";
import { Button } from "@/components/ui/button";

</script>

<template>
    <div class="flex-1  relative rounded-[12px] overflow-hidden">
        <Carousel class="w-full h-full">
            <CarouselContent class="h-full">
                <CarouselItem class="flex justify-between"
                    style="background: url('/public/slider-bg.png') , rgba(0, 230, 255, 0.68);" v-for="(_, index) in 5"
                    :key="index">

                    <div class="p-6 flex flex-col gap-4">
                        <span class="text-primary-inverse text-mono-12 font-mono">IEO is Live</span>
                        <span class=" text-h3 text-primary-inverse max-w-[370px]">Public Sale is now open at $0.045 per token. Secure your spot before the allocation fills
                            up.</span>
                        <Button variant="header-button" class="w-min bg-primary-inverse px-4">
                            <span class="text-mono-12 font-mono">Go to IEO</span>
                            <SvgIcon name="chevron-right" />
                        </Button>
                    </div>
                    <div class="flex justify-end items-center h-full">
                        <img class="ml-auto" src="/public/slider-image.png" alt="">
                    </div>
                </CarouselItem>
            </CarouselContent>

            <CarouselDots class="absolute bottom-4 -translate-x-1/2 left-1/2" />
        </Carousel>
    </div>
</template>
