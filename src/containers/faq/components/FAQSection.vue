<template>
  <div v-for="(section, sectionIndex) in faqSections" :key="sectionIndex" class="mb-8">
    <h2 class="text-base font-medium text-gray-700 mb-4">{{ section.title }}</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="(item, itemIndex) in section.items" :key="itemIndex" class="w-full">
        <div class="border rounded-lg overflow-hidden" :class="{ 'border-gray-300': item.id === expandedItem }">
          <button @click="toggleItem(item.id)" class="w-full flex justify-between items-center p-4 text-left">
            <span class="font-medium">{{ item.question }}</span>
            <!--    <ChevronDownIcon 
                    class="h-5 w-5 text-gray-500 transition-transform duration-200"
                    :class="{ 'transform rotate-180': item.id === expandedItem }"
                  /> -->
          </button>

          <div v-if="item.id === expandedItem" class="px-4 pb-4">
            <p v-if="item.answer" class="text-gray-700">{{ item.answer }}</p>
            <div v-else>
              <p class="text-gray-700 mb-2">You will receive your ELX tokens at the Token Generation Event (TGE), which is scheduled for May 28, 2025.</p>
              <p class="text-gray-700 mb-2">
                If you participated in the Public Sale, you'll get 20% of your tokens unlocked at TGE, while the remaining 80% will be locked for 6 months and
                then released gradually over 12 months.
              </p>
              <p class="text-gray-700">
                If you participated in the Private Sale, your tokens will be fully locked for 12 months after TGE, followed by 12-month linear vesting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const expandedItem = ref("faq-1-1");

const faqSections = [
  {
    title: "Two-Factor Authentication (2FA)",
    items: [
      { id: "faq-1-1", question: "When will I receive my ELX tokens?", answer: "" },
      {
        id: "faq-1-2",
        question: "Why don't I see tokens in my wallet?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
      {
        id: "faq-1-3",
        question: "When will I receive my ELX tokens?",
        answer: "You will receive your ELX tokens at the Token Generation Event (TGE), which is scheduled for May 28, 2025.",
      },
      {
        id: "faq-1-4",
        question: "Why don't I see tokens in my wallet?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
      {
        id: "faq-1-5",
        question: "When will I receive my ELX tokens?",
        answer: "You will receive your ELX tokens at the Token Generation Event (TGE), which is scheduled for May 28, 2025.",
      },
      {
        id: "faq-1-6",
        question: "Why don't I see tokens in my wallet?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
    ],
  },
  {
    title: "Two-Factor Authentication (2FA)",
    items: [
      {
        id: "faq-2-1",
        question: "When will I receive my ELX tokens?",
        answer: "You will receive your ELX tokens at the Token Generation Event (TGE), which is scheduled for May 28, 2025.",
      },
      {
        id: "faq-2-2",
        question: "Why don't I see tokens in my wallet?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
      {
        id: "faq-2-3",
        question: "When will I receive my ELX tokens?",
        answer: "You will receive your ELX tokens at the Token Generation Event (TGE), which is scheduled for May 28, 2025.",
      },
      {
        id: "faq-2-4",
        question: "Why don't I see tokens in my wallet?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
      {
        id: "faq-2-5",
        question: "When will I receive my ELX tokens?",
        answer: "You will receive your ELX tokens at the Token Generation Event (TGE), which is scheduled for May 28, 2025.",
      },
      {
        id: "faq-2-6",
        question: "Why don't I see tokens in my wallet?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
    ],
  },
  {
    title: "Two-Factor Authentication (2FA)",
    items: [
      {
        id: "faq-3-1",
        question: "When will I receive my ELX tokens?",
        answer: "You will receive your ELX tokens at the Token Generation Event (TGE), which is scheduled for May 28, 2025.",
      },
      {
        id: "faq-3-2",
        question: "Why don't I see tokens in my wallet?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
      {
        id: "faq-3-3",
        question: "When will I receive my ELX tokens?",
        answer: "You will receive your ELX tokens at the Token Generation Event (TGE), which is scheduled for May 28, 2025.",
      },
      {
        id: "faq-3-4",
        question: "Why don't I see tokens in my wallet?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
      {
        id: "faq-3-5",
        question: "When will I receive my ELX tokens?",
        answer: "You will receive your ELX tokens at the Token Generation Event (TGE), which is scheduled for May 28, 2025.",
      },
      {
        id: "faq-3-6",
        question: "Why don't I see tokens in my wallet?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
    ],
  },
];

function toggleItem(id) {
  if (expandedItem.value === id) {
    expandedItem.value = null;
  } else {
    expandedItem.value = id;
  }
}
</script>

<style scoped>
:deep(.border-primary) {
  border-color: #0ea5e9;
}

:deep(.text-primary) {
  color: #0ea5e9;
}
</style>
