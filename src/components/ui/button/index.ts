import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none  cursor-pointer disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-surface-accent !text-white focus:outline-offset-2 focus:outline-solid outline-surface-accent hover:bg-surface-accent-hover active:bg-surface-accent-active",
        secondary:
          "bg-surface-secondary text-primary  focus:outline-offset-2 focus:outline-solid outline-surface-accent hover:bg-surface-secondary-hover active:bg-surface-secondary-active",
        header:
          "bg-surface-secondary hover:bg-surface-secondary-hover active:bg-surface-accent active:text-white",
        "header-ghost":
          "bg-transparent hover:bg-surface-secondary active:bg-surface-accent focus:border focus:border-surface-accent active:text-white",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "rounded-full gap-2 py-3 px-4",
        sm: "rounded-full gap-2 py-2 px-2",
        lg: "rounded-full gap-2 py-3.5 px-5",
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
