"use client";

import { motion, useReducedMotion } from "motion/react";
import { createContext, useContext } from "react";
import { swap } from "./motion";

/** False on first paint so the initial render never animates; true after the first tab change. */
export const SwapContext = createContext(false);

/**
 * Cross-fades its content with a 6px rise whenever `id` changes.
 * Used for text that changes between categories while its container persists.
 */
export function Swap({
  id,
  children,
  className,
  as = "div",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const changed = useContext(SwapContext);
  const reduce = useReducedMotion();
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp
      key={id}
      className={className}
      initial={changed ? { opacity: 0, y: reduce ? 0 : 6 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0.12 } : swap}
    >
      {children}
    </Comp>
  );
}
