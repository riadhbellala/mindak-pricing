import { footer, site } from "@/content/pricing";
import { Container } from "./Container";
import { ArrowUpRight } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <Container className="flex flex-col gap-3 py-6 text-[13px] text-ink-2 sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.left}</p>
        <a
          href={site.instagramStudio.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-ink-2"
        >
          {footer.right}
          <ArrowUpRight />
        </a>
      </Container>
    </footer>
  );
}
