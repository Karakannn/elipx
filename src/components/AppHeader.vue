<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { Button } from "@/components/ui/button";
import { SvgIcon } from "@/components/ui/svg-icon";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRoute } from "vue-router";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useColorMode } from "@vueuse/core";

const route = useRoute();

const isMenuOpen = ref(false);
const navContainer = ref<HTMLElement | null>(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const mode = useColorMode();

// Function to toggle theme
const toggleTheme = (theme: "light" | "dark") => {
  mode.value = theme;
  localStorage.setItem("theme", theme);
};

const handleDragStart = (e: MouseEvent | TouchEvent) => {
  if (!navContainer.value) return;

  isDragging.value = true;
  navContainer.value.style.cursor = "grabbing";
  navContainer.value.style.userSelect = "none";

  startX.value = "touches" in e ? e.touches[0].pageX - navContainer.value.offsetLeft : e.pageX - navContainer.value.offsetLeft;

  scrollLeft.value = navContainer.value.scrollLeft;
};

const handleDragEnd = () => {
  if (!navContainer.value) return;

  isDragging.value = false;
  navContainer.value.style.cursor = "grab";
  navContainer.value.style.removeProperty("user-select");
};

const handleDragMove = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value || !navContainer.value) return;

  e.preventDefault();
  const x = "touches" in e ? e.touches[0].pageX - navContainer.value.offsetLeft : e.pageX - navContainer.value.offsetLeft;

  const walk = (x - startX.value) * 2;
  navContainer.value.scrollLeft = scrollLeft.value - walk;
};

// Setup event listeners
onMounted(() => {
  const nav = navContainer.value;
  if (!nav) return;

  nav.style.cursor = "grab";

  // Touch Events
  nav.addEventListener("touchstart", handleDragStart);
  nav.addEventListener("touchend", handleDragEnd);
  nav.addEventListener("touchmove", handleDragMove);

  // Mouse Events
  nav.addEventListener("mousedown", handleDragStart);
  nav.addEventListener("mouseup", handleDragEnd);
  nav.addEventListener("mousemove", handleDragMove);
  nav.addEventListener("mouseleave", handleDragEnd);
});

onUnmounted(() => {
  const nav = navContainer.value;
  if (!nav) return;

  // Remove Touch Events
  nav.removeEventListener("touchstart", handleDragStart);
  nav.removeEventListener("touchend", handleDragEnd);
  nav.removeEventListener("touchmove", handleDragMove);

  // Remove Mouse Events
  nav.removeEventListener("mousedown", handleDragStart);
  nav.removeEventListener("mouseup", handleDragEnd);
  nav.removeEventListener("mousemove", handleDragMove);
  nav.removeEventListener("mouseleave", handleDragEnd);
});

const links = [
  {
    name: "Portfolio",
    href: "/",
  },
  {
    name: "IEO",
    href: "/ieo",
  },
  {
    name: "Purchase",
    href: "/purchase",
  },
  {
    name: "Transactions",
    href: "/transactions",
  },
  {
    name: "Support&Documentation",
    href: "/faq",
  },
  {
    name: "Announcements",
    href: "/news",
  },
  {
    name: "Referral program",
    href: "/referral",
  },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Add watch to toggle body scroll
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

const isActiveLink = (path: string) => {
  if (path === "/" && route.path === "/") {
    return true;
  }
  return path !== "/" && route.path.startsWith(path);
};
</script>

<template>
  <!-- Desktop Header -->
  <header class="hidden md:block border-b fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
    <div class="max-w-[1440px] mx-auto h-14 ">
      <div class="h-full flex items-center">
        <SvgIcon name="logo" class="w-6 h-6 ml-4 shrink-0" />

        <div ref="navContainer" class="flex-1 overflow-hidden mx-4 select-none">
          <div class="flex gap-1" style="width: max-content">
            <Button
              v-for="link in links"
              :key="link.name"
              variant="header"
              :as-child="true"
              class="text-mono-12 uppercase shrink-0"
              :active="isActiveLink(link.href)">
              <RouterLink :to="link.href">
                {{ link.name }}
              </RouterLink>
            </Button>
          </div>
        </div>
        <div class="flex items-center gap-2 px-4 shrink-0 border-l">
          <Button variant="header" class="text-mono-12 uppercase hidden sm:inline-flex"> DEPOSIT </Button>
          <Button variant="header" class="text-mono-12 uppercase hidden sm:inline-flex"> WITHDRAWAL </Button>

          <Button size="icon" variant="header-ghost" class="hidden lg:inline-flex">
            <SvgIcon class="size-6" name="support" />
          </Button>
          <Separator orientation="vertical" class="bg-border-on-sunken hidden lg:block" />
          <Button size="icon" variant="header-ghost">
            <SvgIcon class="size-6" name="bell" />
          </Button>

          <Popover>
            <PopoverTrigger as-child>
              <Avatar class="shrink-0 cursor-pointer">
                <AvatarImage src="/public/avatar.png" alt="@unovue" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent align="end" class="w-[253px] mt-2 p-0">
              <div class="pt-4 pb-1 space-y-4">
                <div class="space-y-3 px-1">
                  <div class="px-3">
                    <div class="rounded-full w-min bg-positive pt-[3] px-1.5 pb-[2px]">
                      <span class="text-icon-green text-mono-10">VERIFIED</span>
                    </div>
                  </div>

                  <div class="flex gap-3 items-center px-3">
                    <Avatar class="shrink-0 cursor-pointer">
                      <AvatarImage src="/public/avatar.png" alt="@unovue" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div class="space-y-0.5">
                      <div class="text-paragraph-14">John Doe</div>
                      <div class="text-caption-12 text-secondary">john.doe@gmail.com</div>
                    </div>
                  </div>

                  <div class="space-y-1">
                    <RouterLink to="/" class="p-3 uppercase text-mono-12 block hover:bg-secondary/10">Dashboard Customization</RouterLink>
                    <RouterLink to="/account" class="p-3 uppercase text-mono-12 block hover:bg-secondary/10">Settings </RouterLink>
                    <div class="p-3 uppercase text-mono-10 text-secondary">Preferences</div>

                    <div class="flex justify-between gap-4 items-center">
                      <span class="p-3 uppercase text-mono-12">Theme:</span>
                      <div class="flex gap-2 items-center">
                        <div
                          class="hover:bg-secondary/10 p-1 rounded-md cursor-pointer"
                          :class="{ 'bg-secondary/20': mode === 'light' }"
                          @click="toggleTheme('light')">
                          <SvgIcon name="light-mode" class="size-5" :class="mode === 'light' ? 'text-primary' : 'text-secondary'" />
                        </div>
                        <Separator orientation="vertical" />
                        <div
                          class="hover:bg-secondary/10 p-1 rounded-md cursor-pointer"
                          :class="{ 'bg-secondary/20': mode === 'dark' }"
                          @click="toggleTheme('dark')">
                          <SvgIcon name="dark-mode" class="size-5" :class="mode === 'dark' ? 'text-primary' : 'text-secondary'" />
                        </div>
                      </div>
                    </div>

                    <div class="flex justify-between gap-4 items-center">
                      <span class="p-3 uppercase text-mono-12">Language:</span>

                      <Button variant="link-secondary">
                        <span class="uppercase text-mono-12 text-primary">English</span>
                        <SvgIcon name="chevron-right" class="size-5 text-primary" />
                      </Button>
                    </div>

                    <h5 class="p-3 uppercase text-mono-12 text-red hover:bg-red/10 cursor-pointer">LOG OUT</h5>
                    <div class="flex gap-4 items-center">
                      <RouterLink to="/" class="p-3 uppercase text-mono-12 text-secondary">Privacy Policy</RouterLink>
                      <RouterLink to="/" class="p-3 uppercase text-mono-12 text-secondary">Terms</RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Header -->
  <div class="md:hidden fixed top-0 left-0 right-0 z-50">
    <header class="h-14 px-4 flex items-center justify-between border-b backdrop-blur-xl">
      <SvgIcon name="logo" class="size-6" />
      <div class="flex items-center gap-4">
        <Button size="icon" variant="header-ghost">
          <SvgIcon class="size-6" name="support" />
        </Button>
        <Button size="icon" variant="header-ghost">
          <SvgIcon class="size-6" name="bell" />
        </Button>
        <Popover>
          <PopoverTrigger as-child>
            <Avatar class="shrink-0 cursor-pointer">
              <AvatarImage src="/public/avatar.png" alt="@unovue" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent align="end" class="w-[253px] mt-2 p-0">
            <div class="pt-4 pb-1 space-y-4">
              <div class="space-y-3 px-1">
                <div class="px-3">
                  <div class="rounded-full w-min bg-positive pt-[3] px-1.5 pb-[2px]">
                    <span class="text-icon-green text-mono-10">VERIFIED</span>
                  </div>
                </div>

                <div class="flex gap-3 items-center px-3">
                  <Avatar class="shrink-0 cursor-pointer">
                    <AvatarImage src="/public/avatar.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div class="space-y-0.5">
                    <div class="text-paragraph-14">John Doe</div>
                    <div class="text-caption-12 text-secondary">john.doe@gmail.com</div>
                  </div>
                </div>

                <div class="space-y-1">
                  <RouterLink to="/" class="p-3 uppercase text-mono-12 block hover:bg-secondary/10">Dashboard Customization</RouterLink>
                  <RouterLink to="/account" class="p-3 uppercase text-mono-12 block hover:bg-secondary/10">Settings </RouterLink>
                  <div class="p-3 uppercase text-mono-10 text-secondary">Preferences</div>

                  <div class="flex justify-between gap-4 items-center">
                    <span class="p-3 uppercase text-mono-12">Theme:</span>
                    <div class="flex gap-2 items-center">
                      <div
                        class="hover:bg-secondary/10 p-1 rounded-md cursor-pointer"
                        :class="{ 'bg-secondary/20': mode === 'light' }"
                        @click="toggleTheme('light')">
                        <SvgIcon name="light-mode" class="size-5" :class="mode === 'light' ? 'text-primary' : 'text-secondary'" />
                      </div>
                      <Separator orientation="vertical" />
                      <div
                        class="hover:bg-secondary/10 p-1 rounded-md cursor-pointer"
                        :class="{ 'bg-secondary/20': mode === 'dark' }"
                        @click="toggleTheme('dark')">
                        <SvgIcon name="dark-mode" class="size-5" :class="mode === 'dark' ? 'text-primary' : 'text-secondary'" />
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between gap-4 items-center">
                    <span class="p-3 uppercase text-mono-12">Language:</span>

                    <Button variant="link-secondary">
                      <span class="uppercase text-mono-12 text-primary">English</span>
                      <SvgIcon name="chevron-right" class="size-5 text-primary" />
                    </Button>
                  </div>

                  <h5 class="p-3 uppercase text-mono-12 text-red hover:bg-red/10 cursor-pointer">LOG OUT</h5>
                  <div class="flex gap-4 items-center">
                    <RouterLink to="/" class="p-3 uppercase text-mono-12 text-secondary">Privacy Policy</RouterLink>
                    <RouterLink to="/" class="p-3 uppercase text-mono-12 text-secondary">Terms</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Button class="hamburger-menu" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu" variant="header-ghost" size="icon" aria-label="Menu">
          <div class="hamburger-lines-container">
            <span class="hamburger-line bg-primary line-1"></span>
            <span class="hamburger-line bg-primary line-2"></span>
            <span class="hamburger-line bg-primary line-3"></span>
          </div>
        </Button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="isMenuOpen" class="fixed inset-0 top-14 bg-surface-sunken/70 backdrop-blur-3xl z-40 flex flex-col justify-between">
        <nav class="px-4 py-8 h-full">
          <div class="flex flex-col space-y-6 h-full items-center justify-center">
            <RouterLink
              v-for="link in links"
              :key="link.name"
              :to="link.href"
              class="text-headline-small font-normal text-center"
              :class="{ 'font-medium': isActiveLink(link.href) }">
              {{ link.name }}
            </RouterLink>
          </div>
        </nav>

        <!-- Theme toggle in mobile menu -->
        <div class="px-4 py-4 border-t -on-sunken">
          <div class="flex justify-center items-center gap-2 mb-4">
            <span class="uppercase text-mono-12">Theme:</span>
            <div class="flex gap-2 items-center">
              <div
                class="hover:bg-secondary/10 p-2 rounded-md cursor-pointer"
                :class="{ 'bg-secondary/20': mode === 'light' }"
                @click="toggleTheme('light')">
                <SvgIcon name="light-mode" class="size-5" :class="mode === 'light' ? 'text-primary' : 'text-secondary'" />
              </div>
              <Separator orientation="vertical" />
              <div
                class="hover:bg-secondary/10 p-2 rounded-md cursor-pointer"
                :class="{ 'bg-secondary/20': mode === 'dark' }"
                @click="toggleTheme('dark')">
                <SvgIcon name="dark-mode" class="size-5" :class="mode === 'dark' ? 'text-primary' : 'text-secondary'" />
              </div>
            </div>
          </div>

          <div class="flex gap-2">
            <Button variant="secondary" class="flex-1 text-mono-12 uppercase gap-1"> DEPOSIT </Button>
            <Button variant="secondary" class="flex-1 text-mono-12 uppercase gap-1"> WITHDRAWAL </Button>
          </div>
        </div>
      </div>
    </Transition>
  </div>

  <div class="h-14"></div>
</template>

<style scoped>
.hamburger-menu {
  position: relative;
  padding: 0;
}

.hamburger-lines-container {
  width: 18px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  transition: 0.25s ease-in-out;
  transform-origin: center;
}

.is-active .line-1 {
  transform: translateY(6.5px) rotate(45deg);
}

.is-active .line-2 {
  opacity: 0;
}

.is-active .line-3 {
  transform: translateY(-6.5px) rotate(-45deg);
}
</style>
