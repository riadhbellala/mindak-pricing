import type { Explainer as ExplainerData } from "@/content/pricing";
import { Container } from "./Container";

export function Explainer({ data, id }: { data: ExplainerData; id: string }) {
  return (
    <Container className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
      <div className="md:col-span-5">
        <h2 id={id} className="text-[32px] leading-[1.08] font-semibold tracking-[-0.035em] md:text-[44px]">
          {data.title} <em className="serif text-[1.12em] font-normal tracking-[-0.02em] italic">{data.italic}</em>
        </h2>
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55]">{data.text}</p>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <p className="border-b border-ink pb-3 text-[14px] font-semibold">{data.ledgerTitle}</p>
        <dl>
          {data.ledger.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-rule py-4 sm:grid-cols-[1fr_auto] sm:items-baseline"
            >
              <dt>
                <span className="block text-[16px] font-semibold">{row.label}</span>
                <span className="tnum mt-1 block text-[14px] text-ink-2">{row.detail}</span>
              </dt>
              <dd className="tnum text-[20px] font-semibold tracking-[-0.02em] sm:text-right md:text-[22px]">{row.result}</dd>
            </div>
          ))}
        </dl>
        <p className="meta mt-4">{data.disclaimer}</p>
      </div>
    </Container>
  );
}
