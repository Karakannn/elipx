<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const modalRef = ref(null)
const passkeys = ref([
    {
        type: 'FACE ID',
        status: 'On',
        icon: 'face-id',
        devices: [],
        canAdd: true
    },
    {
        type: 'TOUCH ID',
        status: 'Off',
        icon: 'touch-id',
        devices: [],
        canAdd: true
    },
    {
        type: 'PIN CODE',
        status: 'On',
        icon: 'pin-code',
        devices: [],
        canAdd: false,
        canChange: true
    }
])

const devices = ref([
    {
        id: '86.15.90.a51',
        name: 'CHROME 131, MACBOOK PRO M1 PRO',
        location: 'Krakow, Poland',
        date: '07.02.2025'
    },
    {
        id: '86.15.90.a51',
        name: 'CHROME 12, IPHONE 15 PRO MAX',
        location: 'Krakow, Poland',
        date: 'online'
    }
])

const disconnectDevice = (deviceId) => {
    console.log(`Cihaz bağlantısı kesildi: ${deviceId}`)
}

const addDevice = (passkeyType) => {
    console.log(`${passkeyType} için yeni cihaz ekleniyor`)
}

const changePasskey = (passkeyType) => {
    console.log(`${passkeyType} değiştiriliyor`)
}

defineExpose({
    openModal: () => {
        modalRef.value.open()
    }
})
</script>

<template>
    <BaseDialog ref="modalRef" v-model="isOpen" title="Passkeys" maxWidth="500px">
        <template #header>
            <h2 class="text-xl font-semibold">Passkeys</h2>
        </template>

        <div class="divide-y">
            <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" class="w-full h-full">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="12" cy="10" r="3" />
                                <path d="M7 16c0-1.5 1.5-3 5-3s5 1.5 5 3" />
                            </svg>
                        </div>
                        <div>
                            <p class="font-bold uppercase text-sm">Face ID</p>
                            <p class="text-gray-500 text-xs">On</p>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <Button variant="secondary" size="sm" class="rounded-full text-xs bg-gray-100">
                            DISCONNECT
                        </Button>
                        <Button variant="secondary" size="sm"
                            class="rounded-full text-xs bg-gray-100 flex items-center gap-1">
                            ADD
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" class="w-4 h-4">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </Button>
                    </div>
                </div>

                <div class="ml-9 mt-3 mb-1">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-xs text-gray-500">86.15.90.a51</p>
                            <p class="text-sm font-medium">CHROME 131, MACBOOK PRO M1 PRO</p>
                            <p class="text-xs text-gray-500">Krakow, Poland - 07.02.2025</p>
                        </div>
                        <Button variant="secondary" size="sm" class="rounded-full text-xs bg-gray-100">
                            DISCONNECT
                        </Button>
                    </div>
                </div>

                <div class="ml-9 mt-3">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-xs text-gray-500">86.15.90.a51</p>
                            <p class="text-sm font-medium">CHROME 12, IPHONE 15 PRO MAX</p>
                            <p class="text-xs text-gray-500">Krakow, Poland - online</p>
                        </div>
                        <Button variant="secondary" size="sm" class="rounded-full text-xs bg-gray-100">
                            DISCONNECT
                        </Button>
                    </div>
                </div>
            </div>

            <div class="p-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" class="w-full h-full">
                                <path
                                    d="M12 11c1.33 0 2.25-1.17 2.25-2.5S13.33 6 12 6s-2.25 1.17-2.25 2.5S10.67 11 12 11z" />
                                <path d="M6 17.5c0-2.76 2.69-5 6-5s6 2.24 6 5" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>
                        <div>
                            <p class="font-bold uppercase text-sm">Touch ID</p>
                            <p class="text-gray-500 text-xs">Off</p>
                        </div>
                    </div>
                    <Button variant="secondary" size="sm"
                        class="rounded-full text-xs bg-gray-100 flex items-center gap-1">
                        ADD
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" class="w-4 h-4">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </Button>
                </div>
            </div>

            <div class="p-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" class="w-full h-full">
                                <circle cx="8" cy="8" r="1" />
                                <circle cx="12" cy="8" r="1" />
                                <circle cx="16" cy="8" r="1" />
                                <circle cx="8" cy="12" r="1" />
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="16" cy="12" r="1" />
                                <circle cx="8" cy="16" r="1" />
                                <circle cx="12" cy="16" r="1" />
                                <circle cx="16" cy="16" r="1" />
                            </svg>
                        </div>
                        <div>
                            <p class="font-bold uppercase text-sm">PIN CODE</p>
                            <p class="text-gray-500 text-xs">On</p>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <Button variant="secondary" size="sm" class="rounded-full text-xs bg-gray-100">
                            DISCONNECT
                        </Button>
                        <Button variant="secondary" size="sm"
                            class="rounded-full text-xs bg-gray-100 flex items-center gap-1">
                            CHANGE
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" class="w-4 h-4">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </BaseDialog>
</template>