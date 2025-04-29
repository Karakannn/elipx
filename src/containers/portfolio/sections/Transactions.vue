<script setup lang="ts">
import type {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
} from '@tanstack/vue-table'
import { SvgIcon } from "@/components/ui/svg-icon";
import { valueUpdater } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    FlexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useVueTable,
} from '@tanstack/vue-table'
import {
    ArrowUp,
    ArrowDown,
    Search,
    Copy,
    ChevronLeft,
    ChevronRight
} from 'lucide-vue-next'
import { h, ref } from 'vue'



const data = [
    {
        id: '1',
        type: 'Withdraw',
        beneficiary: 'John Doe',
        avatarInitial: 'J',
        avatarColor: 'linear-gradient(90deg, #C699FE 0%, #6573EF 100%)',
        asset: 'USDT (Tether)',
        txid: '0x487a...aeef',
        date: '15/12/24',
        time: '14:23:56',
        status: 'IN PROGRESS',
        amountELX: '-254 ELX',
        amountUSD: '1,052.25'
    },
    {
        id: '2',
        type: 'Received',
        beneficiary: 'John Doe',
        avatarInitial: 'J',
        avatarColor: 'linear-gradient(90deg, #FF918F 0%, #FF85B8 100%)',
        asset: 'USDT (Tether)',
        txid: '0x1asd...6789',
        date: '15/12/24',
        time: '14:23:56',
        status: 'COMPLETED',
        amountELX: '-406.515 ELX',
        amountUSD: '4,008.01'
    },
    {
        id: '3',
        type: 'Buy',
        beneficiary: 'John Doe',
        avatarInitial: 'J',
        avatarColor: 'linear-gradient(90deg, #62E9B7 0%, #31C7AE 100%)',
        asset: 'USDT (Tether)',
        txid: '0x487a...aeef',
        date: '15/12/24',
        time: '14:23:56',
        status: 'CANCELED',
        amountELX: '-14 ELX',
        amountUSD: '120'
    },
    {
        id: '4',
        type: 'TGE',
        beneficiary: 'John Doe',
        avatarInitial: 'J',
        avatarColor: 'linear-gradient(90deg, #8ED5F5 0%, #57B1F1 100%)',
        asset: 'USDT (Tether)',
        txid: '0x487a...aeef',
        date: '15/12/24',
        time: '14:23:56',
        status: 'REFUND',
        amountELX: '-58 ELX',
        amountUSD: '184.53'
    },
    {
        id: '5',
        type: 'Withdraw',
        beneficiary: 'John Doe',
        avatarInitial: 'J',
        avatarColor: 'linear-gradient(90deg, #C699FE 0%, #6573EF 100%)',
        asset: 'USDT (Tether)',
        txid: '0x487a...aeef',
        date: '15/12/24',
        time: '14:23:56',
        status: 'PENDING',
        amountELX: '-74 ELX',
        amountUSD: '265'
    },
    {
        id: '6',
        type: 'Withdraw',
        beneficiary: 'John Doe',
        avatarInitial: 'J',
        avatarColor: 'linear-gradient(90deg, #FF918F 0%, #FF85B8 100%)',
        asset: 'USDT (Tether)',
        txid: '0x1asd...6789',
        date: '15/12/24',
        time: '14:23:56',
        status: 'COMPLETED',
        amountELX: '-100 ELX',
        amountUSD: '300'
    }
]

const columns: ColumnDef[] = [
    {
        accessorKey: 'type',
        header: 'TYPE',
        cell: ({ row }) => {
            const type = row.getValue('type') as string
            const isReceived = type === 'Received'

            return h('div', { class: 'flex items-center gap-2' }, [
                h(Button, {
                    variant: 'header',
                    size: 'icon',
                }, [
                    h(SvgIcon, { name: 'arrow-up' })
                ]),
                h('span', { class: "text-paragraph-14" }, type)
            ])
        },
    },
    {
        accessorKey: 'beneficiary',
        header: 'BENEFICIARY',
        cell: ({ row }) => {
            const transaction = row.original

            console.log(transaction.avatarColor);

            return h('div', { class: 'flex items-center gap-2' }, [
                h('div', {
                    class: 'w-[28px] h-[28px] rounded-full flex items-center justify-center text-white',
                    style: { background: `${transaction.avatarColor}` }
                }, h(SvgIcon, { name: 'user', class: "size-4" }, transaction.beneficiary)),

                h('span', { class: 'text-paragraph-14' }, transaction.beneficiary)

            ])
        },
    },
    {
        accessorKey: 'asset',
        header: 'ASSET',
        cell: ({ row }) => {
            const transaction = row.original

            return (
                h('span', { class: 'text-mono-12 font-mono' }, transaction.asset)
            )
        },
    },
    {
        accessorKey: 'txid',
        header: 'TXID',
        cell: ({ row }) => {
            const txid = row.getValue('txid') as string

            return h('div', { class: 'flex items-center' }, [
                h('span', {class:"text-mono-12 font-mono"}, txid),
                h('button', { class: 'ml-1' }, [
                    h(Copy, { class: 'h-4 w-4 text-gray-400' })
                ])
            ])
        },
    },
    {
        accessorKey: 'date',
        header: 'DATE/TIME',
        cell: ({ row }) => {
            const date = row.getValue('date') as string
            const time = row.original.time

            return h('div', { class: 'flex flex-col text-mono-12 font-mono' }, [
                h('span', {}, date),
                h('span', {}, time)
            ])
        },
    },
    {
        accessorKey: 'status',
        header: 'STATUS',
        cell: ({ row }) => {
            const status = row.getValue('status') as string
            let dotColor = 'bg-gray-500'
            let textColor = 'text-gray-500'

            switch (status) {
                case 'IN PROGRESS':
                    dotColor = 'bg-amber-500'
                    break
                case 'COMPLETED':
                    dotColor = 'bg-green-500'
                    break
                case 'CANCELED':
                    dotColor = 'bg-red-500'
                    break
                case 'REFUND':
                    dotColor = 'bg-emerald-500'
                    break
                case 'PENDING':
                    dotColor = 'bg-blue-500'
                    break
            }

            return h('div', { class: 'flex items-center' }, [
                h('span', { class: `w-2 h-2 rounded-full mr-2 ${dotColor}` }),
                h('span', { class: "text-mono-12 font-mono" }, status)
            ])
        },
    },
    {
        /* TODO: make amount right */
        accessorKey: 'amountELX',
        header: 'AMOUNT',
        cell: ({ row }) => {
            const amountELX = row.getValue('amountELX') as string
            const amountUSD = row.original.amountUSD

            return h('div', { class: 'flex flex-col items-end gap-1' }, [
                h('span', {class:"text-caption-12"}, amountELX),
                h('span', { class: 'text-mono-12 font-mono text-text-secondary' }, `$ ${amountUSD}`)
            ])
        },
    },
]

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const activeTab = ref('my-transactions')

const table = useVueTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
    state: {
        get sorting() { return sorting.value },
        get columnFilters() { return columnFilters.value },
        get columnVisibility() { return columnVisibility.value },
    },
})

</script>

<template>
    <div class="bg-white rounded-lg shadow-sm p-4 w-full">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-h4 font-medium">Transactions</h1>
            <Button variant="header" size="icon">
                <SvgIcon name="search" class="size-4" />
            </Button>
        </div>

        <Tabs v-model="activeTab" class="gap-0">
            <TabsList class="border-b flex gap-4 justify-start">
                <TabsTrigger value="my-transactions"
                    class="text-mono-12 font-mono py-3 text-sm relative data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-border-accent ">
                    MY TRANSACTION
                </TabsTrigger>
                <TabsTrigger value="all-transactions"
                    class="py-3 text-sm relative data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-border-accent">
                    See <span class=" text-border-accent">All Transactions</span>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="my-transactions">
                <div class="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead v-for="column in table.getAllColumns()" :key="column.id"
                                    class="text-mono-10 font-mono text-text-secondary uppercase p-4 text-[10px]">
                                    <FlexRender v-if="!column.columnDef.header" :render="column.columnDef.header"
                                        :props="column.getContext()" />
                                    <template v-else>{{ column.columnDef.header }}</template>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="row in table.getRowModel().rows" :key="row.id" class="border-t">
                                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id" class="py-4">
                                    <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </TabsContent>

            <TabsContent value="all-transactions">
                <div class="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead v-for="column in table.getAllColumns()" :key="column.id"
                                    class="text-xs text-gray-500 uppercase font-medium">
                                    <FlexRender v-if="!column.columnDef.header" :render="column.columnDef.header"
                                        :props="column.getContext()" />
                                    <template v-else>{{ column.columnDef.header }}</template>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="row in table.getRowModel().rows" :key="row.id" class="border-t">
                                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id" class="py-4">
                                    <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </TabsContent>
        </Tabs>

        <div class="flex justify-between items-center p-4 text-sm">
            <div class="text-text-secondary font-mono text-mono-10">SHOWING 11 OF 15</div>
            <div class="flex items-center space-x-2">
                <button class="p-1 rounded hover:bg-gray-100" :disabled="!table.getCanPreviousPage()"
                    @click="table.previousPage()">
                    <ChevronLeft class="h-5 w-5" />
                </button>
                <Button class=" bg-border-accent !rounded-xl px-4 py-2.5 "
                    @click="table.setPageIndex(0)">
                    1
                </Button>
                <Button variant="ghost" class=" hover:bg-gray-100 !rounded-xl px-4 py-2.5"
                    @click="table.setPageIndex(1)">
                    2
                </Button>
                <button class="p-1 rounded hover:bg-gray-100" :disabled="!table.getCanNextPage()"
                    @click="table.nextPage()">
                    <ChevronRight class="h-5 w-5" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
:deep(.table) {
    width: 100%;
}

:deep(th) {
    font-weight: 500;
    text-align: left;
    padding-bottom: 1rem;
}

:deep(td) {
    vertical-align: middle;
}
</style>