<script setup>
import { ref } from "vue";
import { ArrowRightIcon, ChevronDownIcon, ChevronRightIcon, FileIcon, PaperclipIcon, XIcon } from "lucide-vue-next";
import Input from "@/components/ui/input/Input.vue";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SvgIcon } from "@/components/ui/svg-icon";
import Button from "@/components/ui/button/Button.vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fileInput = ref(null);
const ticketForm = ref({
  subject: "",
  category: "",
  message: "",
  files: [],
});

const tickets = ref([
  {
    id: "2023-CS123",
    subject: "My passport is not being checked...",
    details: "KYC",
    status: "IN PROGRESS",
    date: "24 FEB",
  },
  {
    id: "2023-CS123",
    subject: "When I try to connect my wallet, nothing happens...",
    details: "Can't connect MetaMask",
    status: "COMPLETED",
    date: "18 FEB",
  },
  {
    id: "2023-CS123",
    subject: "My passport is not being checked...",
    details: "KYC",
    status: "IN PROGRESS",
    date: "24 FEB",
  },
]);

function triggerFileInput() {
  fileInput.value.click();
}

function handleFileChange(event) {
  const newFiles = Array.from(event.target.files);
  ticketForm.value.files = [...ticketForm.value.files, ...newFiles];
  event.target.value = null;
}

function removeFile(index) {
  ticketForm.value.files.splice(index, 1);
}

function submitTicket() {

  tickets.value.unshift({
    id: `2023-CS${Math.floor(Math.random() * 1000)}`,
    subject: ticketForm.value.subject,
    details: ticketForm.value.category,
    status: "IN PROGRESS",
    date: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "short" }).toUpperCase(),
  });

  ticketForm.value = {
    subject: "",
    category: "",
    message: "",
    files: [],
  };

  alert("Ticket submitted successfully!");
}
</script>

<template>
  <div class="flex flex-col">
    <form @submit.prevent="submitTicket" class="space-y-8 p-4 border-b ">
      <h2 class="text-h1">Submit a ticket</h2>

      <div class="space-y-2 relative">
        <label class="absolute bg-card -translate-y-1/2 px-3 py-1 text-caption-12 text-secondary"> Subject <span class="text-red-500 ml-0.5">*</span> </label>
        <Input v-model="ticketForm.subject" type="text" placeholder="Enter a brief subject" class="w-full" required />
      </div>

      <div class="space-y-2 relative">
        <label class="absolute bg-card -translate-y-1/2 px-3 py-1 text-caption-12 text-secondary"> Category <span class="text-red-500 ml-0.5">*</span> </label>

        <Select v-model="ticketForm.category" required>
          <SelectTrigger class="w-full px-5 !h-[52px] rounded-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="select"> Select </SelectItem>
              <SelectItem value="account"> Account </SelectItem>
              <SelectItem value="wallet"> Wallet </SelectItem>
              <SelectItem value="kyc"> KYC </SelectItem>
              <SelectItem value="technical"> Technical </SelectItem>
              <SelectItem value="other"> Other </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div class="space-y-2 relative">
        <label class="absolute bg-card -translate-y-1/2 px-3 py-1 text-caption-12 text-secondary"> Message <span class="text-red-500 ml-0.5">*</span> </label>
        <Input v-model="ticketForm.message" type="text" placeholder="Describe your issue or question in detail" class="w-full" required />
      </div>

      <div class="space-y-2 relative">
        <label class="absolute bg-card -translate-y-1/2 px-3 py-1 text-caption-12 text-secondary">
          Attachments <span class="text-red-500 ml-0.5">*</span>
        </label>

        <div @click="triggerFileInput" class="flex items-center gap-2 border border-gray-300 cursor-pointer w-full px-5 !h-[52px] rounded-full">
          <SvgIcon name="attach" class="size-5" />
          <span class="text-paragraph-14">Add file</span>
        </div>
        <input ref="fileInput" type="file" @change="handleFileChange" class="hidden" multiple />
        <div v-if="ticketForm.files.length > 0" class="mt-2 space-y-1">
          <div v-for="(file, index) in ticketForm.files" :key="index" class="flex items-center justify-between bg-secondary/10 px-3 py-2 rounded-md">
            <div class="flex items-center gap-2">
              <FileIcon class="h-4 w-4 text-gray-500" />
              <span class="text-sm truncate max-w-xs">{{ file.name }}</span>
            </div>
            <button @click.prevent="removeFile(index)" class="text-gray-500 hover:text-red-500">
              <XIcon class="size-4 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      <Button size="lg">
        <span class="text-mono-12">SUBMIT TICKET</span>
        <SvgIcon name="chevron-right" class="size-5" />
      </Button>
    </form>

    <div v-for="(ticket, index) in tickets" :key="index" class="px-4">
      <div class="py-5 text-caption-12 text-secondary">Ticket# {{ ticket.id }}</div>

      <div class="space-y-1 w-full py-4 border-b ">
        <div class="flex justify-between gap-4 items-center w-full">
          <div class="flex gap-4 items-center">
            <div class="text-paragraph-14">{{ ticket.subject }}</div>

            <div class="flex items-center gap-2 text-mono-12">
              <span
                class="w-1.5 h-1.5 rounded-full"
                :class="{
                  'bg-amber-500': ticket.status === 'IN PROGRESS',
                  'bg-green-500': ticket.status === 'COMPLETED',
                }"
              ></span>
              {{ ticket.status }}
            </div>
          </div>
          <div class="text-mono-12 text-secondary">{{ ticket.date }}</div>
        </div>
        <div class="text-caption-12 text-secondary">{{ ticket.details }}</div>
      </div>

      <div class="flex items-center justify-between py-3">
        <div class="flex items-center gap-2">
          <Avatar class="shrink-0">
            <AvatarImage src="/public/avatar.png" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span class="text-sm">John Doe</span>
        </div>

        <Button variant="secondary" class="!text-primary">
          <span class="text-mono-12">OPEN TICKET</span>
          <SvgIcon name="chevron-right" class="size-5" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
