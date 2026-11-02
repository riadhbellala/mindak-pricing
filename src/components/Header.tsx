import { header, site, whatsappMessages, whatsappUrl } from "@/content/pricing";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 h-14 border-b border-rule bg-paper">
      <Container className="flex h-full items-center justify-between gap-4">
        <a
          href="#top"
          className="text-[22px] leading-none font-semibold tracking-[-0.045em] text-ink"
          aria-label={`${site.brandFull}, haut de page`}
        >
          {site.brand}
        </a>
        <div className="flex items-center gap-5">
          <span className="meta hidden min-[400px]:inline">{header.label}</span>
          <a
            href={whatsappUrl(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[14px] font-medium text-ink"
          >
            {header.contact}
          </a>
        </div>
      </Container>
    </header>
  );
}
