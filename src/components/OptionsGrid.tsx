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
    <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
      {options.map((option, i) => (
        <div
          key={i}
          className="flex flex-col border-t border-ink pt-5 pb-10"
          data-reveal
          style={{ "--i": i } as React.CSSProperties}
        >
          <Swap id={`${category.id}-${option.name}`} className="flex flex-1 flex-col">
            <h3 className="serif text-[28px]">{option.name}</h3>
            <p className="mt-2 max-w-[34ch] text-[14px] leading-[1.45] text-ink-2">{option.line}</p>
          </Swap>
          <p className="mt-6 flex items-baseline gap-2">
            <span className="meta">{labels.optionFrom}</span>
            <NumberFlow
              value={option.price}
              locales="fr-FR"
              format={{ useGrouping: true }}
              className="serif tnum text-[40px] leading-none"
              aria-label={`${formatPrice(option.price)} ${labels.currency}`}
            />
            <span className="meta">{labels.currency}</span>
          </p>
          <a
            href={whatsappUrl(whatsappMessages.option(option.name, category.label))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ajouter l'option ${option.name} ${labels.ctaOnWhatsapp}`}
            className="press link-underline mt-4 self-start text-[14px] font-medium text-ink"
          >
            {labels.optionAdd}
          </a>
        </div>
      ))}

      {remainder > 0 && (
        <div
          className={clsx(
            "flex flex-col justify-between gap-6 border-t border-ink bg-paper-2 p-5 pb-8",
            fillSpan[remainder],
          )}
          data-reveal
          style={{ "--i": options.length } as React.CSSProperties}
        >
          <div>
            <h3 className="serif text-[28px]">{labels.optionsCustomTitle}</h3>
            <p className="mt-2 max-w-[44ch] text-[14px] leading-[1.45] text-ink">{labels.optionsCustomText}</p>
          </div>
          <a
            href={whatsappUrl(whatsappMessages.custom(category.label))}
            target="_blank"
            rel="noopener noreferrer"
            className="press link-underline self-start text-[14px] font-medium text-ink"
          >
            {labels.optionsCustomCta}
          </a>
        </div>
      )}
    </div>
  );
}
