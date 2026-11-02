import { hero, site } from "@/content/pricing";
import { Container } from "./Container";
import { CornerFrame } from "./CornerFrame";
import { Highlight } from "./Highlight";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative pt-14 pb-10 md:pt-20 md:pb-12">
      <CornerFrame />
      <Container className="flex flex-col items-center text-center">
        <h1
          id="hero-title"
          className="text-[42px] leading-[0.98] font-semibold tracking-[-0.04em] sm:text-[60px] md:text-[72px] lg:text-[84px]"
        >
          <span className="block">{hero.titleLines[0]}</span>
          <span className="block">{hero.titleLines[1]}</span>
          <span className="block">
            {hero.titleLines[2]}{" "}
            <em className="serif text-[1.1em] font-normal tracking-[-0.02em] italic">{hero.titleItalic}</em>
          </span>
        </h1>

        <p className="serif mt-6 text-[24px] md:mt-8 md:text-[30px]">
          {hero.byline}{" "}
          <Highlight draw>
            {site.brandFull}
            <span className="font-sans text-[0.55em] align-[0.6em]">©</span>
          </Highlight>
        </p>

        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink-2 md:text-[19px]">{hero.sub}</p>
      </Container>
    </section>
  );
}
