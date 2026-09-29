import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "verified" | "amber" | "outline";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium tracking-wider uppercase rounded select-none";

  const variants = {
    default: "bg-slate-surface2 text-steel-300 border border-steel-border",
    verified:
      "bg-safety-cyan/10 text-safety-cyan border border-safety-cyan/30",
    amber:
      "bg-amber-industrial/10 text-amber-industrial border border-amber-industrial/30",
    outline: "bg-transparent text-steel-400 border border-steel-border",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {variant === "verified" && (
        <span className="w-1.5 h-1.5 rounded-full bg-safety-cyan animate-pulse" />
      )}
      {children}
    </span>
  );
};
