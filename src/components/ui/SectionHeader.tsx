import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative mb-12 sm:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-amber-industrial uppercase",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        <span className="text-steel-500 font-bold">[{index}]</span>
        <span className="w-4 h-[1px] bg-amber-industrial/50" />
        <span>{eyebrow}</span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-steel-50 leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-steel-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
