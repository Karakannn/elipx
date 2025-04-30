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
                    style="background: url('/public/slider-bg.png') , rgba(0, 230, 255, 0.68); background-size: cover;" v-for="(_, index) in 5"
                    :key="index">

                    <div class="p-6 w-full flex flex-col gap-4 relative z-20">
                        <span class="text-primary-inverse text-mono-12">IEO IS LIVE</span>
                        <span class="text-h4 sm:text-h3 text-primary-inverse max-w-[260px] sm:max-w-[370px]">Public Sale is now open at $0.045 per token. Secure your spot before the allocation fills
                            up.</span>
                        <Button variant="header-button" class="w-full sm:w-min bg-primary-inverse px-4 mb-10 sm:mb-0">
                            <span class="text-mono-12">Go to IEO</span>
                            <SvgIcon name="chevron-right" />
                        </Button>
                    </div>
                    <div class="absolute sm:relative w-1/2 sm:w-full top-0 -right-12 sm:top-auto sm:right-auto flex justify-end items-center h-full">
                        <img class="ml-auto" src="/public/slider-image.png" alt="">
                    </div>
                </CarouselItem>
            </CarouselContent>

            <CarouselDots class="absolute bottom-4 -translate-x-1/2 left-1/2" />
        </Carousel>
    </div>
</template>
