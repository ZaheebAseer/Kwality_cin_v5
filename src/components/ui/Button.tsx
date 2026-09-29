import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-industrial focus-visible:ring-offset-2 focus-visible:ring-offset-slate-base disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variants = {
      primary:
        "bg-amber-industrial text-slate-base font-semibold hover:bg-amber-glow shadow-industrial-glow active:scale-[0.98]",
      secondary:
        "bg-slate-surface2 text-steel-50 hover:bg-slate-surface3 border border-steel-border hover:border-steel-border-light active:scale-[0.98]",
      outline:
        "bg-transparent text-steel-100 border border-steel-border hover:bg-slate-surface1 hover:border-amber-industrial/50 active:scale-[0.98]",
      ghost:
        "bg-transparent text-steel-400 hover:text-steel-100 hover:bg-white/5 active:scale-[0.98]",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs rounded tracking-wide",
      md: "h-11 px-5 text-sm rounded-md tracking-wide",
      lg: "h-13 px-7 text-base rounded-md tracking-wider font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
