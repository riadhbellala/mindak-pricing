"use client";

import NumberFlow from "@number-flow/react";
import clsx from "clsx";
import { formatPrice, labels, whatsappMessages, whatsappUrl, type Category } from "@/content/pricing";
import { Swap } from "./Swap";

/** Column span of the closing "sur demande" cell so the last row of 4 is always full on desktop. */
const fillSpan: Record<number, string> = { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3" };

export function OptionsGrid({ category }: { category: Category }) {
  const { options } = category;
  const remainder = (4 - (options.length % 4)) % 4;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      {options.map((option, i) => (
        <div
          key={i}
          className="flex flex-col rounded-md border border-ink/8 bg-paper-2 p-5 transition-[border-color] duration-200 sm:p-6 [@media(hover:hover)]:hover:border-ink/30"
          data-reveal
          style={{ "--i": i } as React.CSSProperties}
        >
          <Swap id={`${category.id}-${option.name}`} className="flex flex-1 flex-col">
            <h3 className="text-[20px] leading-[1.2] font-semibold tracking-[-0.02em]">{option.name}</h3>
            <p className="mt-2 max-w-[34ch] text-[15px] leading-[1.5] text-ink-2">{option.line}</p>
          </Swap>
          <div className="mt-4 flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:gap-2">
          <p className="flex items-baseline gap-2">
            <span className="text-[14px] font-medium text-ink-2">{labels.optionFrom}</span>
            <NumberFlow
              value={option.price}
              locales="fr-FR"
              format={{ useGrouping: true }}
              className="tnum text-[28px] leading-none font-semibold tracking-[-0.03em] sm:text-[32px]"
              aria-label={`${formatPrice(option.price)} ${labels.currency}`}
            />
            <span className="text-[15px] font-semibold">{labels.currency}</span>
          </p>
          <a
            href={whatsappUrl(whatsappMessages.option(option.name, category.label))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ajouter l'option ${option.name} ${labels.ctaOnWhatsapp}`}
            className="press link-underline inline-flex min-h-11 shrink-0 items-center text-[15px] font-semibold text-ink"
          >
            {labels.optionAdd}
          </a>
          </div>
        </div>
      ))}

      {remainder > 0 && (
        <div
          className={clsx(
            "flex flex-col justify-between gap-6 rounded-md border border-dashed border-ink/25 p-5 sm:p-6",
            fillSpan[remainder],
          )}
          data-reveal
          style={{ "--i": options.length } as React.CSSProperties}
        >
          <div>
            <h3 className="text-[20px] leading-[1.2] font-semibold tracking-[-0.02em]">{labels.optionsCustomTitle}</h3>
            <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.5] text-ink">{labels.optionsCustomText}</p>
          </div>
          <a
            href={whatsappUrl(whatsappMessages.custom(category.label))}
            target="_blank"
            rel="noopener noreferrer"
            className="press link-underline inline-flex min-h-11 items-center self-start text-[15px] font-semibold text-ink"
          >
            {labels.optionsCustomCta}
          </a>
        </div>
      )}
    </div>
  );
}
