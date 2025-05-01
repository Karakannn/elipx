<script setup>
import { ref, computed } from "vue";
import { useMediaQuery } from "@vueuse/core";
import { Input } from "@/components/ui/input";
import BaseDialog from "./BaseDialog.vue";
import { Button } from "@/components/ui/button";
import SvgIcon from "../ui/svg-icon/SvgIcon.vue";

const isOpen = ref(false);
const isDesktop = useMediaQuery("(min-width: 768px)");
const modalRef = ref(null);

const searchQuery = ref("");

const countries = ref([
  {
    name: "Great Britain",
    language: "English",
    icon: "united-kingdom",
    code: "gb",
  },
  {
    name: "Italia",
    language: "Italiano",
    icon: "italy",
    code: "it",
  },
  {
    name: "Spain",
    language: "Espanol",
    icon: "spain",
    code: "es",
  },
  {
    name: "Ukraine",
    language: "Українська",
    icon: "ukraine",
    code: "ua",
  },
  {
    name: "Poland",
    language: "Polski",
    icon: "poland",
    code: "pl",
  },
  {
    name: "China",
    language: "中文",
    icon: "china",
    code: "cn",
  },
]);

const filteredCountries = computed(() => {
  if (!searchQuery.value) return countries.value;

  const query = searchQuery.value.toLowerCase();
  return countries.value.filter((country) => country.name.toLowerCase().includes(query) || country.language.toLowerCase().includes(query));
});

const selectCountry = (country) => {
  isOpen.value = false;
};

defineExpose({
  openModal: () => {
    modalRef.value.open();
  },
});
</script>

<template>
  <BaseDialog ref="modalRef" v-model="isOpen" title="Change country" maxWidth="412px">
    <template #header>
      <h2 class="text-h4">Change country</h2>
    </template>

    <div class="px-1 pt-0 pb-4 space-y-4">
      <div class="relative px-3">
        <div class="absolute inset-y-0 left-7 flex items-center pointer-events-none">
          <SvgIcon name="search" class="size-5" />
        </div>
        <Input v-model="searchQuery" placeholder="Search country" class="pl-10 h-10 rounded-full w-full" />
      </div>

      <div class="space-y-1">
        <div
          v-for="country in filteredCountries"
          :key="country.code"
          class="py-2 flex items-center justify-between cursor-pointer px-3 hover:bg-gray-100 rounded-lg"
          @click="selectCountry(country)">
          <div class="flex items-center gap-3">
            <SvgIcon :name="country.icon" class="size-8" />
            <div>
              <p class="text-paragraph-16">{{ country.name }}</p>
              <p class="text-paragraph-14 text-secondary">{{ country.language }}</p>
            </div>
          </div>
          <SvgIcon name="chevron-right" class="size-8" />
        </div>
      </div>
    </div>
  </BaseDialog>
</template>
