import type { Explainer as ExplainerData } from "@/content/pricing";
import { Container } from "./Container";

export function Explainer({ data, id }: { data: ExplainerData; id: string }) {
  return (
    <Container className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
      <div className="md:col-span-5">
        <h2 id={id} className="serif text-[40px] md:text-[clamp(44px,4.6vw,64px)]">
          {data.title} <em className="italic">{data.italic}</em>
        </h2>
        <p className="mt-6 max-w-[46ch] text-[16px] leading-[1.55]">{data.text}</p>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <p className="meta border-b border-ink pb-2">{data.ledgerTitle}</p>
        <dl>
          {data.ledger.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-rule py-4 sm:grid-cols-[1fr_auto] sm:items-baseline"
            >
              <dt>
                <span className="block text-[15px] font-medium">{row.label}</span>
                <span className="tnum mt-0.5 block text-[13px] text-ink-2">{row.detail}</span>
              </dt>
              <dd className="serif tnum text-[26px] sm:text-right md:text-[28px]">{row.result}</dd>
            </div>
          ))}
        </dl>
        <p className="meta mt-4">{data.disclaimer}</p>
      </div>
    </Container>
  );
}
