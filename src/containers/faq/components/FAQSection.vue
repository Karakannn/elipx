<template>
  <div v-for="(section, sectionIndex) in faqSections" :key="sectionIndex" class="">
    <h2 class="text-caption-12 text-secondary pt-5 pb-4">{{ section.title }}</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
      <div v-for="(item, itemIndex) in section.items" :key="itemIndex" class="w-full pb-4">
        <Collapsible class="py-[13px] px-5 border border-border rounded-full data-[state=open]:rounded-[12px]">
          <CollapsibleTrigger :as-child="true" class="flex cursor-pointer w-full">
            <div class="flex justify-between gap-4 items-center">
              <div class="text-paragraph-14 flex-1 text-left">{{ item.question }}</div>
              <SvgIcon name="chevron-right" class="rotate-90 size-5" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div class="pt-4 text-caption-12 text-secondary">{{ item.answer }}</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import SvgIcon from "@/components/ui/svg-icon/SvgIcon.vue";
const faqSections = [
  {
    title: "Two-Factor Authentication (2FA)",
    items: [
      {
        id: "faq-1-1",
        question: "When will I receive my ELX tokens?",
        answer:
          "Tokens will be visible in your wallet after the Token Generation Event (TGE). If you still don't see them after TGE, please make sure you've added the correct token contract to your wallet.",
      },
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
</script>

<style scoped>
:deep(.border-primary) {
  border-color: #0ea5e9;
}

:deep(.text-primary) {
  color: #0ea5e9;
}
</style>
