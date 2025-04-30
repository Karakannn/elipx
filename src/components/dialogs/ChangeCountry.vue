<script setup>
import { ref, computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Input } from '@/components/ui/input'
import BaseDialog from './BaseDialog.vue'

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const modalRef = ref(null)

const searchQuery = ref('')

const countries = ref([
  {
    name: 'Great Britain',
    language: 'English',
    flag: '🇬🇧',
    code: 'gb'
  },
  {
    name: 'Italia',
    language: 'Italiano',
    flag: '🇮🇹',
    code: 'it'
  },
  {
    name: 'Spain',
    language: 'Espanol',
    flag: '🇪🇸',
    code: 'es'
  },
  {
    name: 'Ukraine',
    language: 'Українська',
    flag: '🇺🇦',
    code: 'ua'
  },
  {
    name: 'Poland',
    language: 'Polski',
    flag: '🇵🇱',
    code: 'pl'
  },
  {
    name: 'China',
    language: '中文',
    flag: '🇨🇳',
    code: 'cn'
  }
])

const filteredCountries = computed(() => {
  if (!searchQuery.value) return countries.value
  
  const query = searchQuery.value.toLowerCase()
  return countries.value.filter(country => 
    country.name.toLowerCase().includes(query) || 
    country.language.toLowerCase().includes(query)
  )
})

const selectCountry = (country) => {
  console.log(`Ülke seçildi: ${country.name}`)
  isOpen.value = false
}

defineExpose({
  openModal: () => {
    modalRef.value.open()
  }
})
</script>

<template>
  <BaseDialog
    ref="modalRef"
    v-model="isOpen"
    title="Change country"
    maxWidth="550px"
  >
    <template #header>
      <div class="flex justify-between items-center w-full">
        <h2 class="text-xl font-semibold">Change country</h2>
        <button @click="isOpen = false" class="text-gray-500 text-xl">
          ×
        </button>
      </div>
    </template>
    
    <div class="p-4">
      <div class="relative mb-4">
        <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <Input
          v-model="searchQuery"
          placeholder="Search country"
          class="pl-10 py-6 rounded-full bg-gray-50 w-full"
        />
      </div>
      
      <div class="space-y-2">
        <div 
          v-for="country in filteredCountries" 
          :key="country.code"
          class="p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-lg"
          @click="selectCountry(country)"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border">
              <div v-if="country.code === 'gb'" class="bg-blue-500 w-full h-full flex items-center justify-center">
                <span class="text-lg">🇬🇧</span>
              </div>
              <div v-else-if="country.code === 'it'" class="bg-white w-full h-full flex items-center justify-center">
                <span class="text-lg">🇮🇹</span>
              </div>
              <div v-else-if="country.code === 'es'" class="bg-yellow-400 w-full h-full flex items-center justify-center">
                <span class="text-lg">🇪🇸</span>
              </div>
              <div v-else-if="country.code === 'ua'" class="bg-blue-400 w-full h-full flex items-center justify-center">
                <span class="text-lg">🇺🇦</span>
              </div>
              <div v-else-if="country.code === 'pl'" class="bg-red-500 w-full h-full flex items-center justify-center">
                <span class="text-lg">🇵🇱</span>
              </div>
              <div v-else-if="country.code === 'cn'" class="bg-red-600 w-full h-full flex items-center justify-center">
                <span class="text-lg">🇨🇳</span>
              </div>
            </div>
            <div>
              <p class="font-medium">{{ country.name }}</p>
              <p class="text-gray-500">{{ country.language }}</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </div>
      </div>
    </div>
  </BaseDialog>
</template>