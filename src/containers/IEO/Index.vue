<script setup>
import { ref } from "vue";
import { HomeIcon, PlusIcon } from "lucide-vue-next";
import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import SvgIcon from "@/components/ui/svg-icon/SvgIcon.vue";

const activeTab = ref("my-transactions");
</script>

<template>
  <Card>
    <CardHeader class="p-4 pt-9 border-b">
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <SvgIcon name="ellipx_coin" class="size-7" />
          <div class="flex items-end gap-1">
            <span class="text-h3">ELX</span>
            <span class="text-caption-12 text-secondary">EllipX</span>
          </div>
        </div>
        <!-- TODO: make sm paddings -->
        <Button variant="secondary" size="sm" class="uppercase text-mono-10">Private Sale</Button>
      </div>
    </CardHeader>
    <CardContent class="p-0">
      <div class="grid md:grid-cols-2">
        <div class="border-r space-y-6 p-4">
          <div class="space-y-4">
            <div class="text-caption-12 text-secondary pb-2 border-b">Token price</div>
            <div class="text-number">0.030$</div>

            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <div class="text-caption-12 text-secondary">Start</div>
                <div class="text-mono-12">20 MAY 2025</div>
              </div>
              <div class="space-y-1.5">
                <div class="text-caption-12 text-secondary">End</div>
                <div class="text-mono-12">28 MAY 2025</div>
              </div>
            </div>
          </div>

          <div class="space-y-5">
            <div class="text-mono-14">ALLOCATION</div>
            <div class="space-y-3">
              <!-- TODO: gray image not showing -->
              <Progress :model-value="50" />

              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div class="w-2 h-2 rounded-full bg-icon-green mr-2"></div>
                  <span class="text-mono-12">IN PROGRESS</span>
                </div>
                <div class="text-mono-12">25,000,000 ELX / 50%</div>
              </div>
            </div>
          </div>

          <!-- TODO: check button size -->
          <Button>
            <SvgIcon name="plus" class="size-5" />
            <span>Participate in IEO</span>
          </Button>
        </div>

        <div class="p-4 space-y-6">
          <Tabs v-model="activeTab" class="space-y-6">
            <TabsList class="border-b flex gap-4 justify-start">
              <TabsTrigger value="my-transactions" class="text-mono-12 tab-trigger"> 1 ROUND </TabsTrigger>
              <TabsTrigger value="all-transactions" class="tab-trigger"> 2 ROUND</TabsTrigger>
              <TabsTrigger value="all-transactions" class="tab-trigger"> 3 ROUND</TabsTrigger>
            </TabsList>

            <TabsContent value="my-transactions">
              <div class="space-y-6">
                <h2 class="text-paragraph-14">Token Private Sale Details</h2>

                <!-- Info Cards -->
                <div class="grid md:grid-cols-2 gap-4 mb-6">
                  <!-- Token For Sale Card -->
                  <div class="rounded-[12px] p-6 space-y-4" style="background: url('/public/ieo-bg.png'), rgba(0, 230, 255, 0.68); background-size: cover;">
                    <div class="text-mono-12 text-white">TOKEN FOR SALE</div>
                    <div class="text-h3 text-white">50,000,000 ELX (5%)</div>
                  </div>

                  <!-- Accepted Currencies Card -->
                  <div class="rounded-[12px] p-6 space-y-4" style="background: url('/public/ieo-bg.png'), rgba(0, 230, 255, 0.68); background-size: cover;">
                    <div class="text-mono-12 text-white">ACCEPTED</div>
                    <div class="text-h3 text-white">BTC, ETH, BSC, USDT</div>
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-4 mb-6">
                  <div class="col-span-1 bg-dialog-window p-4 rounded-[12px] space-y-3 border border-border">
                    <div class="text-caption-12 text-secondary">Distribution:</div>
                    <div class="text-mono-12">
                      100% LOCKED FOR 12 MONTHS<br />
                      + 12-MONTH LINEAR VESTING
                    </div>
                  </div>

                  <div class="col-span-1 bg-dialog-window p-4 rounded-[12px] space-y-3 border border-border">
                    <div class="text-caption-12 text-secondary">Private Price:</div>
                    <div class="text-mono-12">$0.030</div>
                  </div>

                  <div class="col-span-1 bg-dialog-window p-4 rounded-[12px] space-y-3 border border-border">
                    <div class="text-caption-12 text-secondary">Limits:</div>
                    <div class="text-mono-12">
                      YOU CAN PARTICIPATE WITH<br />
                      A MINIMUM OF $100 AND A<br />
                      MAXIMUM OF $5,000.
                    </div>
                  </div>
                </div>

                <div>
                  <div class="text-caption-12 text-secondary border-b pb-2">Status of user allocation</div>

                  <div class="flex justify-between py-2.5 border-b">
                    <div class="text-caption-12">You've purchased:</div>
                    <div class="text-mono-12 text-right">17,500 ELX</div>
                  </div>

                  <div class="flex justify-between py-2.5 border-b">
                    <div class="text-caption-12">TGE Address:</div>
                    <div class="text-mono-12 text-right">0XA8C...12DE</div>
                  </div>

                  <div class="flex justify-between py-2.5 border-b">
                    <div class="text-caption-12">Status:</div>
                    <div class="text-mono-12 text-right">LOCKED UNTIL TGE</div>
                  </div>
                </div>

                <div>
                  <div class="text-caption-12 text-secondary border-b pb-2">Vesting/lock period info</div>

                  <div class="flex justify-between py-2.5 border-b">
                    <div class="text-caption-12">TGE unlock:</div>
                    <div class="text-mono-12 text-right">0%</div>
                  </div>

                  <div class="flex justify-between py-2.5 border-b">
                    <div class="text-caption-12">TGE lock:</div>
                    <div class="text-mono-12 text-right">100% LOCKED FOR 12 MONTHS (17,500 ELX)</div>
                  </div>
                  <div class="flex justify-between py-2.5 border-b">
                    <div class="text-caption-12">Then:</div>
                    <div class="text-mono-12 text-right">12-MONTH LINEAR VESTING</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="all-transactions"> sa </TabsContent>
          </Tabs>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>
/* Custom styles if needed */
</style>
