import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground retro-border retro-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:retro-shadow-lg",
  outline:
    "bg-background text-foreground retro-border retro-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:retro-shadow-lg",
  accent:
    "bg-accent text-accent-foreground retro-border retro-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:retro-shadow-lg",
  ghost: "bg-transparent text-foreground hover:bg-secondary",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

export const RetroButton = React.forwardRef<HTMLButtonElement, RetroButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-bold transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  ),
);
RetroButton.displayName = "RetroButton";

export function RetroInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-sm bg-background px-4 py-2.5 text-base retro-border retro-shadow-sm placeholder:text-muted-foreground focus:outline-none focus:retro-shadow",
        className,
      )}
      {...props}
    />
  );
}

export function RetroCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-sm bg-card p-6 retro-border retro-shadow", className)} {...props} />
  );
}
