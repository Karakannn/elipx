<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SvgIcon } from "@/components/ui/svg-icon";

</script>
<template>

    <Card>
        <CardContent class="py-3 px-4">
            <div class="flex items-center gap-3 border-b ">
                <SvgIcon name="verified" class="size-5" />
                <div class="space-y-0.5">
                    <div class="flex gap-2 items-center">
                        <span class="text-caption-12">Account Verified</span>
                        <span class="bg-secondary/10 pt-[3px] px-1.5 pb-0.5 text-mono-10 rounded-[8px]">JANUARY 31,
                            2028</span>
                    </div>
                    <div class="text-caption-10 text-secondary">Use this identifier when sharing it with third parties
                        to ensure
                        your account remains secure.</div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>