"use client";

import React, { useState, useRef, MouseEvent, useImperativeHandle } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  enableSpotlight?: boolean;
  spotlightColor?: string;
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      enableSpotlight = true,
      spotlightColor = "rgba(99, 102, 241, 0.12)",
      className,
      ...props
    },
    ref
  ) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

    useImperativeHandle(ref, () => cardRef.current as HTMLDivElement);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!enableSpotlight || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative overflow-hidden rounded-2xl border transition-all duration-300",
          "bg-white/80 dark:bg-zinc-900/60 border-zinc-200/90 dark:border-zinc-800/90",
          "hover:border-indigo-500/50 dark:hover:border-indigo-500/50",
          "shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1",
          "backdrop-blur-md",
          className
        )}
        {...props}
      >
        {enableSpotlight && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 70%)`,
            }}
          />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";
