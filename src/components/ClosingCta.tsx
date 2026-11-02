import { closing, site, whatsappUrl } from "@/content/pricing";
import { Container } from "./Container";
import { CornerFrame } from "./CornerFrame";
import { Highlight } from "./Highlight";
import { ArrowRight } from "./icons";

export function ClosingCta() {
  return (
    <section
      aria-labelledby="closing-title"
      data-surface="ink"
      className="relative bg-ink py-24 text-paper md:py-32"
    >
      <CornerFrame />
      <Container className="flex flex-col items-center text-center">
        <h2
          id="closing-title"
          className="text-[44px] leading-[0.95] font-semibold tracking-[-0.04em] sm:text-[64px] md:text-[88px]"
          data-reveal
        >
          <span className="block">{closing.titleLines[0]}</span>
          <span className="block">
            {closing.titleLines[1]} <Highlight>{closing.highlight}</Highlight>
          </span>
        </h2>
        <div
          className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8"
          data-reveal
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <a
            href={whatsappUrl(closing.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex h-12 items-center gap-3 bg-lime px-6 text-[15px] font-medium text-ink hover:bg-paper"
          >
            {closing.whatsapp}
            <ArrowRight />
          </a>
          <a
            href={site.instagramAgency.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[15px] font-medium text-paper"
          >
            {site.instagramAgency.handle}
          </a>
        </div>
        <p className="meta mt-8">
          {site.address} — {site.phonePrefix}
        </p>
      </Container>
    </section>
  );
}
