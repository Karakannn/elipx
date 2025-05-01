<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import BaseDialog from './BaseDialog.vue'
import SvgIcon from '@/components/ui/svg-icon/SvgIcon.vue'
import SettingItem from '@/components/SettingItem.vue'

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const modalRef = ref(null)
const passkeys = ref([
    {
        label: false,
        title: 'FACE ID',
        description: 'On',
        icon: 'face-id',

        canAdd: true,
        canDisconnect: true
    },

    {
        label: '85.15.90.451',
        title: 'Chrome 131, MacBook Pro M1 Pro',
        description: 'Krakow, Poland - 07.02.2025',
        icon: false,
        canDisconnect: true
    },

    {
        label: '85.15.90.451',
        title: 'Chrome 12, iPhone 15 Pro Max',
        description: 'Krakow, Poland - online',
        icon: false,
        canDisconnect: true
    },

    {
        label: false,
        title: 'TOUCH ID',
        description: 'Off',
        icon: 'fingerprint',
        devices: [],
        canAdd: true,
        canDisconnect: false
    },
    {
        label: false,
        title: 'PIN CODE',
        description: 'On',
        icon: 'pin',
        devices: [],
        canAdd: false,
        canChange: true,
        canDisconnect: true
    }
])

const disconnectDevice = (passkeyIndex, deviceIndex) => {
    console.log(`Cihaz bağlantısı kesildi: ${passkeys.value[passkeyIndex].devices[deviceIndex].id}`)
}

const disconnectPasskey = (passkeyIndex) => {
    console.log(`Passkey bağlantısı kesildi: ${passkeys.value[passkeyIndex].type}`)
}

const addDevice = (passkeyIndex) => {
    console.log(`${passkeys.value[passkeyIndex].type} için yeni cihaz ekleniyor`)
}

const changePasskey = (passkeyIndex) => {
    console.log(`${passkeys.value[passkeyIndex].type} değiştiriliyor`)
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

        <div class="px-5">
            <SettingItem class="!py-3.5" v-for="(item) in passkeys" :label="item.label" :value="item.title"
                :description="item.description" :key="item.type">
                <template v-if="item.icon" #icon>
                    <SvgIcon :name="item.icon" class="size-6" />
                </template>
                <template #action>
                    <div class="flex gap-2">
                        <Button class="text-mono-12" v-if="item.canDisconnect" variant="secondary" size="sm"
                            @click="disconnectPasskey(0)">
                            DISCONNECT
                        </Button>
                        <Button v-if="item.canAdd" variant="secondary" size="sm" class="text-mono-12"
                            @click="addDevice(0)">
                            ADD
                            <SvgIcon name="chevron-right" class="size-4" />
                        </Button>

                        <Button v-if="item.canChange" variant="secondary" size="sm" class="text-mono-12"
                            @click="addDevice(0)">
                            CHANGE
                            <SvgIcon name="chevron-right" class="size-4" />
                        </Button>
                    </div>
                </template>
            </SettingItem>
        </div>
    </BaseDialog>
</template>