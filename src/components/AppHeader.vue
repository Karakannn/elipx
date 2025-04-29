<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { SvgIcon } from "@/components/ui/svg-icon";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const links = [
    {
        name: 'Portfolio',
        href: '/',
    },
    {
        name: 'IEO',
        href: '/about',
    },
    {
        name: 'Purchase',
        href: '/purchase',
    },
    {
        name: 'Transactions',
        href: '/transactions',
    },
    {
        name: 'Purchase',
        href: '/purchase',
    },
    {
        name: 'Support&Documentation',
        href: '/support',
    },
    {
        name: 'Announcements',
        href: '/announcements',
    },
    {
        name: 'Referral program',
        href: '/referral program',
    },
]
</script>

<template>
    <header class="h-14 px-4 pt-3">
        <div class="flex gap-[28px] items-center w-full">
            <div class="flex-1 flex items-center gap-4">
                <img src="/public/logo.svg" alt="">

                <div class="flex gap-1">
                    <template v-for="(link, key, index) in links" :key="link.name">
                        <Button variant="header" class="text-mono-12 font-mono uppercase">
                            {{ link.name }}
                        </Button>
                    </template>
                </div>

            </div>
            <div class="space-x-1">
                <Button variant="header" class="text-mono-12 font-mono uppercase gap-1">
                    DEPOSIT
                    <SvgIcon name="plus" />
                </Button>
                <Button variant="header" class="text-mono-12 font-mono uppercase gap-1">
                    WITHDRAWAL
                    <SvgIcon name="arrow-up-right" />
                </Button>
            </div>

            <div class="flex gap-2.5 items-center">
                <div class="flex items-center gap-2.5">
                    <Button size="icon" variant="header-ghost">
                        <SvgIcon name="support" />
                    </Button>
                    <Separator orientation="vertical" class="bg-border-on-sunken" />
                    <Button size="icon" variant="header-ghost">
                        <SvgIcon name="bell" />
                    </Button>
                </div>

                <Avatar>
                    <AvatarImage src="/public/avatar.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    </header>
</template>
