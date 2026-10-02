import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "indigo" | "cyan" | "emerald" | "outline" | "amber";
  size?: "sm" | "md";
}

const variantStyles: Record<string, string> = {
  default:
    "bg-zinc-100 text-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700/60",
  indigo:
    "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
  cyan:
    "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20",
  emerald:
    "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  outline:
    "bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700/80",
  amber:
    "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
};

const sizeStyles: Record<string, string> = {
  sm: "text-[11px] px-2.5 py-0.5 font-medium rounded-full",
  md: "text-xs px-3 py-1 font-medium rounded-full",
};

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 border transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
