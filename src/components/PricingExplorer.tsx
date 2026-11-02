"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { categories, labels, type CategoryId } from "@/content/pricing";
import { CompareTable } from "./CompareTable";
import { Container } from "./Container";
import { Explainer } from "./Explainer";
import { tabIndicator } from "./motion";
import { OptionsGrid } from "./OptionsGrid";
import { PlanCard } from "./PlanCard";
import { SectionHeader } from "./SectionHeader";
import { Swap, SwapContext } from "./Swap";

const ids = categories.map((c) => c.id);
const isCategoryId = (v: string): v is CategoryId => (ids as string[]).includes(v);

/** Desktop plan row: 2 or 3 columns joined by hairlines. */
const planCols: Record<number, string> = { 2: "md:grid-cols-2", 3: "md:grid-cols-3" };

export function PricingExplorer() {
  const [active, setActive] = useState<CategoryId>("vitrine");
  const [changed, setChanged] = useState(false);
  const reduce = useReducedMotion();
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Sync from the URL hash (#vitrine, #ecommerce, #saas, #ia) on load and on back/forward.
  useEffect(() => {
    const read = () => {
      const hash = window.location.hash.slice(1);
      if (isCategoryId(hash)) setActive(hash);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const select = useCallback((id: CategoryId, focus = false) => {
    setActive(id);
    setChanged(true);
    // replaceState keeps the scroll position and avoids a history entry per click
    window.history.replaceState(null, "", `#${id}`);
    const tab = tabRefs.current[id];
    if (focus) tab?.focus();
    tab?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = ids.indexOf(active);
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (i + 1) % ids.length;
    if (e.key === "ArrowLeft") next = (i - 1 + ids.length) % ids.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = ids.length - 1;
    if (next === null) return;
    e.preventDefault();
    select(ids[next], true);
  };

  const category = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <SwapContext.Provider value={changed}>
      {/* Category tabs: sticky under the 56px header */}
      <div className="sticky top-14 z-30 border-y border-rule bg-paper">
        <Container>
          <div
            role="tablist"
            aria-label={labels.tablist}
            onKeyDown={onKeyDown}
            className="scrollbar-none mx-auto flex w-max max-w-full overflow-x-auto"
          >
            {categories.map((c) => {
              const selected = c.id === active;
              return (
                <button
                  key={c.id}
                  ref={(el) => {
                    tabRefs.current[c.id] = el;
                  }}
                  id={`tab-${c.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls="pricing-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(c.id)}
                  className={clsx(
                    "relative isolate flex h-13 shrink-0 items-center px-3.5 text-[15px] font-semibold whitespace-nowrap transition-colors duration-150 md:h-15 md:px-5 md:text-[16px]",
                    selected ? "text-ink" : "text-ink-2 hover:text-ink",
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="tab-indicator"
                      aria-hidden="true"
                      className="absolute inset-x-0 inset-y-2 -z-10 bg-lime md:inset-y-2.5"
                      transition={reduce ? { duration: 0 } : tabIndicator}
                    />
                  )}
                  <span className="md:hidden">{c.short}</span>
                  <span className="hidden md:inline">{c.label}</span>
                </button>
              );
            })}
          </div>
        </Container>
      </div>

        <div id="pricing-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
          {/* Plans first: the visitor came to choose a pack */}
          <section aria-labelledby="plans-title" className="pt-12 md:pt-24">
            <SectionHeader
              id="plans-title"
              roman={category.heading[0]}
              italic={category.heading[1]}
              note={labels.plansNote}
            />
            <Container className="mt-7 md:mt-14">
              <div
                className={clsx(
                  "isolate mx-auto grid grid-cols-1 border-y border-ink",
                  "[&>article+article]:border-t [&>article+article]:border-rule",
                  "md:[&>article+article]:border-t-0 md:[&>article+article]:border-l",
                  planCols[category.plans.length],
                  category.plans.length === 2 && "max-w-[880px]",
                )}
              >
                {category.plans.map((plan, i) => (
                  <PlanCard key={i} plan={plan} index={i} />
                ))}
              </div>
            </Container>
          </section>

          {category.explainer && (
            <section aria-labelledby="explainer-title" className="pt-14 md:pt-32">
              <Swap id={`explainer-${category.id}`}>
                <Explainer data={category.explainer} id="explainer-title" />
              </Swap>
            </section>
          )}

          <section aria-labelledby="options-title" className="pt-14 md:pt-32">
            <SectionHeader
              id="options-title"
              roman={labels.optionsRoman}
              italic={labels.optionsItalic}
              note={labels.optionsKicker}
            />
            <Container className="mt-7 md:mt-14">
              <OptionsGrid category={category} />
            </Container>
          </section>

          <section aria-labelledby="compare-title" className="pt-14 pb-16 md:pt-32 md:pb-32">
            <SectionHeader
              id="compare-title"
              roman={labels.compareRoman}
              italic={labels.compareItalic}
              note={labels.compareNote}
            />
            <Container className="mt-7 md:mt-14">
              <Swap id={`compare-${category.id}`} className={clsx("mx-auto", category.plans.length === 2 && "max-w-[880px]")}>
                <CompareTable category={category} />
              </Swap>
            </Container>
          </section>
        </div>
    </SwapContext.Provider>
  );
}
