<template>
  <h2 class="text-3xl font-bold mb-6">Submit a ticket</h2>

  <form @submit.prevent="submitTicket" class="space-y-6 mb-8">
    <div class="space-y-2">
      <label class="text-sm font-medium flex items-center"> Subject <span class="text-red-500 ml-0.5">*</span> </label>
      <input
        v-model="ticketForm.subject"
        type="text"
        placeholder="Enter a brief subject"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        required
      />
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium flex items-center"> Category <span class="text-red-500 ml-0.5">*</span> </label>
      <div class="relative">
        <select
          v-model="ticketForm.category"
          class="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        >
          <option value="" disabled>Select</option>
          <option value="account">Account</option>
          <option value="wallet">Wallet</option>
          <option value="kyc">KYC</option>
          <option value="technical">Technical</option>
          <option value="other">Other</option>
        </select>
        <ChevronDownIcon class="absolute right-3 top-2.5 h-5 w-5 text-gray-500 pointer-events-none" />
      </div>
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium flex items-center"> Message <span class="text-red-500 ml-0.5">*</span> </label>
      <textarea
        v-model="ticketForm.message"
        placeholder="Describe your issue or question in detail"
        rows="4"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        required
      ></textarea>
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium flex items-center"> Attachments <span class="text-red-500 ml-0.5">*</span> </label>
      <div @click="triggerFileInput" class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
        <PaperclipIcon class="h-5 w-5 text-gray-500" />
        <span class="text-gray-700">Add file</span>
      </div>
      <input ref="fileInput" type="file" @change="handleFileChange" class="hidden" multiple />
      <div v-if="ticketForm.files.length > 0" class="mt-2 space-y-1">
        <div v-for="(file, index) in ticketForm.files" :key="index" class="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
          <div class="flex items-center gap-2">
            <FileIcon class="h-4 w-4 text-gray-500" />
            <span class="text-sm truncate max-w-xs">{{ file.name }}</span>
          </div>
          <button @click.prevent="removeFile(index)" class="text-gray-500 hover:text-red-500">
            <XIcon class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    <button type="submit" class="bg-primary text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors">
      SUBMIT TICKET
      <ArrowRightIcon class="h-4 w-4" />
    </button>
  </form>

  <!-- Existing Tickets -->
  <div class="space-y-4">
    <div v-for="(ticket, index) in tickets" :key="index" class="border-t pt-4">
      <div class="text-xs text-gray-500 mb-2">Ticket# {{ ticket.id }}</div>

      <div class="flex items-start justify-between">
        <div class="space-y-1">
          <div class="font-medium">{{ ticket.subject }}</div>
          <div class="text-sm text-gray-600">{{ ticket.details }}</div>
        </div>

        <div class="flex items-center gap-2">
          <div
            class="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
            :class="{
              'bg-amber-100 text-amber-800': ticket.status === 'IN PROGRESS',
              'bg-green-100 text-green-800': ticket.status === 'COMPLETED',
            }"
          >
            <span
              class="w-1.5 h-1.5 rounded-full"
              :class="{
                'bg-amber-500': ticket.status === 'IN PROGRESS',
                'bg-green-500': ticket.status === 'COMPLETED',
              }"
            ></span>
            {{ ticket.status }}
          </div>
          <div class="text-xs text-gray-500">{{ ticket.date }}</div>
        </div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <img :src="`/placeholder.svg?height=32&width=32&query=avatar`" alt="User avatar" class="w-full h-full object-cover" />
          </div>
          <span class="text-sm">John Doe</span>
        </div>

        <button class="flex items-center gap-1 text-xs font-medium text-gray-700 border border-gray-300 rounded px-3 py-1 hover:bg-gray-50">
          OPEN TICKET
          <ChevronRightIcon class="h-3 w-3" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowRightIcon, ChevronDownIcon, ChevronRightIcon, FileIcon, PaperclipIcon, XIcon } from "lucide-vue-next";

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
  // Reset the input to allow selecting the same file again
  event.target.value = null;
}

function removeFile(index) {
  ticketForm.value.files.splice(index, 1);
}

function submitTicket() {
  // Here you would typically send the form data to your backend
  console.log("Submitting ticket:", ticketForm.value);

  // Add the new ticket to the list (for demo purposes)
  tickets.value.unshift({
    id: `2023-CS${Math.floor(Math.random() * 1000)}`,
    subject: ticketForm.value.subject,
    details: ticketForm.value.category,
    status: "IN PROGRESS",
    date: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "short" }).toUpperCase(),
  });

  // Reset the form
  ticketForm.value = {
    subject: "",
    category: "",
    message: "",
    files: [],
  };

  // Show success message (in a real app)
  alert("Ticket submitted successfully!");
}
</script>

<style scoped>
:deep(.border-primary) {
  border-color: #0ea5e9;
}

:deep(.text-primary) {
  color: #0ea5e9;
}

:deep(.bg-primary) {
  background-color: #0ea5e9;
}

:deep(.ring-primary) {
  --tw-ring-color: #0ea5e9;
}

:deep(.bg-primary\/90) {
  background-color: rgba(14, 165, 233, 0.9);
}
</style>
