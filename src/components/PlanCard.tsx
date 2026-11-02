"use client";

import NumberFlow from "@number-flow/react";
import clsx from "clsx";
import { formatPrice, labels, whatsappMessages, whatsappUrl, type Plan } from "@/content/pricing";
import { ArrowRight, CheckIcon } from "./icons";
import { Swap } from "./Swap";

export function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const featured = Boolean(plan.featured);
  const titleId = `plan-${index}-title`;
  const message = whatsappMessages.plan(plan.name, formatPrice(plan.price));

  return (
    <article
      aria-labelledby={titleId}
      data-surface={featured ? "ink" : undefined}
      className={clsx(
        "relative row-span-5 grid grid-rows-subgrid px-5 pt-7 pb-8 transition-colors duration-200 sm:px-8",
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

      {/* Row 1: featured label (empty row keeps the cards aligned) */}
      <div className="flex min-h-6 items-center">
        {featured && <span className="meta bg-lime px-2 py-1 !text-ink">{labels.featured}</span>}
      </div>

      {/* Row 2: name + pitch */}
      <Swap id={plan.id} className="pt-5">
        <h3 id={titleId} className="serif text-[32px] md:text-[36px]">
          {plan.name}
        </h3>
        <p className={clsx("mt-2 max-w-[36ch] text-[15px] leading-[1.5]", featured ? "text-paper" : "text-ink")}>
          {plan.pitch}
        </p>
      </Swap>

      {/* Row 3: price + CTA */}
      <div className="pt-8">
        <p className="meta">{labels.from}</p>
        <p className="mt-1 flex items-baseline gap-2">
          <NumberFlow
            value={plan.price}
            locales="fr-FR"
            format={{ useGrouping: true }}
            className="serif tnum text-[56px] leading-none md:text-[64px]"
            aria-label={`${formatPrice(plan.price)} ${labels.currency}`}
          />
          <span className="meta">{labels.currency}</span>
        </p>
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${plan.cta}, ${plan.name}, ${labels.ctaOnWhatsapp}`}
          className={clsx(
            "press mt-6 flex h-12 w-full items-center justify-between px-4 text-[15px] font-medium",
            featured ? "bg-lime text-ink hover:bg-paper" : "bg-ink text-paper hover:bg-ink-2",
          )}
        >
          <Swap id={`${plan.id}-cta`} as="div">
            {plan.cta}
          </Swap>
          <ArrowRight />
        </a>
      </div>

      {/* Row 4: features */}
      <Swap id={`${plan.id}-features`} className="pt-8">
        {plan.inherits && (
          <p className={clsx("pb-3 text-[13px] font-medium", featured ? "text-paper-dim" : "text-ink-2")}>
            {plan.inherits}
          </p>
        )}
        <ul className={clsx("border-b", featured ? "border-rule-ink" : "border-rule")}>
          {plan.features.map((feature) => (
            <li
              key={feature}
              className={clsx(
                "flex items-start gap-3 border-t py-2.5 text-[15px] leading-[1.4]",
                featured ? "border-rule-ink" : "border-rule",
              )}
            >
              <CheckIcon className="mt-[3px] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Swap>

      {/* Row 5: delay + examples */}
      <Swap id={`${plan.id}-meta`} className="flex flex-col gap-3 pt-6">
        {plan.delay && (
          <p className="meta">
            {labels.delay} — <span className={featured ? "text-paper" : "text-ink"}>{plan.delay}</span>
          </p>
        )}
        {plan.examples && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="meta mr-1">{labels.examples}</span>
            {plan.examples.map((ex) => (
              <span
                key={ex}
                className={clsx(
                  "meta rounded-xs border px-2 py-1",
                  featured ? "border-rule-ink" : "border-rule",
                )}
              >
                {ex}
              </span>
            ))}
          </div>
        )}
      </Swap>
    </article>
  );
}
