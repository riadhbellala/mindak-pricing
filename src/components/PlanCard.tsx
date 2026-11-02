"use client";

import NumberFlow from "@number-flow/react";
import clsx from "clsx";
import {
  formatPrice,
  labels,
  planFullName,
  whatsappMessages,
  whatsappUrl,
  type Plan,
} from "@/content/pricing";
import { ArrowRight, CheckIcon } from "./icons";
import { Swap } from "./Swap";

export function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const featured = Boolean(plan.featured);
  const titleId = `plan-${index}-title`;
  const fullName = planFullName(plan);
  const message = whatsappMessages.plan(fullName, formatPrice(plan.price));
  const soft = featured ? "text-paper-dim" : "text-ink-2";

  return (
    <article
      aria-labelledby={titleId}
      data-surface={featured ? "ink" : undefined}
      className={clsx(
        "relative row-span-5 grid grid-rows-subgrid px-5 pt-7 pb-8 transition-colors duration-200 sm:px-8 md:px-6 lg:px-10",
        featured ? "bg-ink text-paper" : "bg-paper text-ink",
      )}
    >
      {featured && (
        <>
          {/* Two paper sheets peeking behind, like the stacked hiring posters */}
          <span aria-hidden="true" className="absolute inset-x-2 -top-1 -z-10 h-4 border border-rule bg-paper-2" />
          <span aria-hidden="true" className="absolute inset-x-4 -top-2 -z-20 h-4 border border-rule bg-paper-2" />
        </>
      )}

      {/* Row 1: featured label (an empty row keeps the cards aligned) */}
      <div className={clsx("min-h-7 items-center", featured ? "flex" : "hidden md:flex")}>
        {featured && (
          <span className="bg-lime px-2.5 py-1 text-[13px] font-semibold text-ink">{labels.featured}</span>
        )}
      </div>

      {/* Row 2: name + size + pitch */}
      <Swap id={plan.id} className="pt-5">
        <h3 id={titleId} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[28px] leading-[1.1] font-semibold tracking-[-0.03em] md:text-[32px]">
            {plan.name}
          </span>
          {plan.detail && <span className={clsx("text-[17px] font-medium", soft)}>{plan.detail}</span>}
        </h3>
        <p className="mt-3 max-w-[34ch] text-[16px] leading-[1.5] md:text-[17px]">{plan.pitch}</p>
      </Swap>

      {/* Row 3: price + CTA */}
      <div className="pt-6 md:pt-8">
        <p className={clsx("text-[14px] font-medium", soft)}>{labels.from}</p>
        <p className="mt-1 flex items-baseline gap-2">
          <NumberFlow
            value={plan.price}
            locales="fr-FR"
            format={{ useGrouping: true }}
            className="tnum text-[48px] leading-none font-semibold tracking-[-0.04em] md:text-[40px] lg:text-[56px]"
            aria-label={`${formatPrice(plan.price)} ${labels.currency}`}
          />
          <span className="text-[18px] font-semibold">{labels.currency}</span>
        </p>
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${plan.cta}, ${fullName}, ${labels.ctaOnWhatsapp}`}
          className={clsx(
            "press mt-7 flex h-13 w-full items-center justify-between px-5 text-[16px] font-semibold",
            featured ? "bg-lime text-ink hover:bg-paper" : "bg-ink text-paper hover:bg-ink-2",
          )}
        >
          <Swap id={`${plan.id}-cta`}>{plan.cta}</Swap>
          <ArrowRight />
        </a>
      </div>

      {/* Row 4: features, separated by space rather than lines */}
      <Swap id={`${plan.id}-features`} className="pt-7 md:pt-9">
        {plan.inherits && <p className="pb-4 text-[15px] font-semibold">{plan.inherits}</p>}
        <ul className="flex flex-col gap-3.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[16px] leading-[1.4]">
              <CheckIcon className="mt-[4px] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Swap>

      {/* Row 5: delay + examples */}
      <Swap id={`${plan.id}-meta`} className="flex flex-col gap-3 pt-6 md:pt-8 empty:hidden">
        {plan.delay && (
          <p className="text-[15px]">
            <span className={soft}>{labels.delay} : </span>
            <span className="font-semibold">{plan.delay}</span>
          </p>
        )}
        {plan.examples && (
          <div className="flex flex-col gap-2">
            <span className={clsx("text-[14px] font-medium", soft)}>{labels.examples}</span>
            <div className="flex flex-wrap gap-2">
              {plan.examples.map((ex) => (
                <span
                  key={ex}
                  className={clsx(
                    "rounded-xs px-2.5 py-1 text-[14px]",
                    featured ? "bg-paper/10 text-paper" : "bg-paper-2 text-ink",
                  )}
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        )}
      </Swap>
    </article>
  );
}
