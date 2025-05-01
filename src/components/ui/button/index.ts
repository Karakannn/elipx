import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none  cursor-pointer disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-surface-accent !text-white outline-surface-accent hover:bg-surface-accent-hover active:bg-surface-accent-active data-[active=true]:bg-surface-accent-active",
        secondary: "bg-secondary/10 text-primary  outline-surface-accent hover:bg-secondary-hover active:bg-secondary-active data-[active=true]:bg-secondary-active",
        header:
          "bg-secondary/10 hover:bg-secondary-hover active:bg-surface-accent active:text-white data-[active=true]:bg-surface-accent data-[active=true]:text-white",
        "header-ghost": "bg-transparent hover:bg-secondary-hover active:bg-surface-accent active:text-white data-[active=true]:bg-surface-accent data-[active=true]:text-white",
        tertiary: "bg-secondary/10 !rounded-[8px] hover:bg-secondary/10 active:bg-surface-accent active:text-white data-[active=true]:bg-accent data-[active=true]:text-white",
        "link-default": "!h-auto !p-0 text-primary hover:text-accent active:text-accent data-[active=true]:text-accent",
        "link-secondary": "!h-auto !p-0 text-secondary hover:text-primary active:text-primary data-[active=true]:text-primary",
        "link-accent": "!h-auto !p-0 text-accent hover:text-accent-hover active:text-accent-active data-[active=true]:text-accent-active",
        "link-active": "!h-auto !p-0 text-warning hover:text-warning-hover active:text-warning-active data-[active=true]:text-warning-active",
        ghost: "bg-transparent hover:bg-secondary-hover dark:hover:bg-accent/50",
        destructive:
          "bg-critical hover:bg-critical-hover active:bg-critical-active focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
     
      },
      size: {
        default: "rounded-full gap-1 px-4 h-[40px]",
        sm: "rounded-full gap-1 py-1.5 px-3  h-[32px]" ,
        lg: "rounded-full gap-1 px-4 h-[44px]",
        icon: "p-2 rounded-full size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
