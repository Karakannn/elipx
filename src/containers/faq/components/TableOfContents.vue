<script setup>

const tableOfContents = [
  {
    label: "Table 1",
    children: [{ label: "Table 1.1" }, { label: "Table 1.2" }, { label: "Table 1.3" }],
  },
  { label: "Table 2", children: [] },
  {
    label: "Table 3",
    children: [{ label: "Table 3.1" }, { label: "Table 3.2" }],
  },
  { label: "Table 4", children: [] },
  { label: "Table 5", children: [] },
];

</script>

<template>
    <div class="w-full lg:w-[288px] shrink-0">
      <div class="bg-card rounded-lg shadow-sm">
        <h3 class="text-h4 p-4 border-b">Table of Contents</h3>

        <div class="space-y-4 p-4">
          <div v-for="(tocItem, tocIndex) in tableOfContents" :key="tocIndex">
            <div class="flex items-center gap-1 pb-3 border-b ">
              <div class="min-w-[4px] h-[4px] rounded-full bg-secondary mr-2"></div>
              <span class="text-paragraph-14">{{ tocItem.label }}</span>
            </div>

            <div v-if="tocItem.children && tocItem.children.length > 0" class="pl-4">
              <div
                v-for="(childItem, childIndex) in tocItem.children"
                :key="childIndex"
                class="flex items-center gap-1 py-3 cursor-pointer border-b "
              >
                <div class="min-w-[4px] h-[4px] rounded-full bg-secondary mt-1 mr-2"></div>
                <span class="text-sm text-secondary">{{ childItem.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>