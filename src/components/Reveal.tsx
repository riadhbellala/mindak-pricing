"use client";

import { useEffect, useRef } from "react";

/**
 * Reveals every [data-reveal] descendant once when it enters the viewport.
 * Opacity + 8px rise, staggered 40ms via the --i custom property (see globals.css).
 * Without JS the content is simply visible.
 */
export function RevealRoot({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    const observe = () =>
      root.querySelectorAll("[data-reveal]:not([data-in])").forEach((el) => io.observe(el));
    observe();
    // Tab switches render new nodes; pick them up.
    const mo = new MutationObserver(observe);
    mo.observe(root, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
