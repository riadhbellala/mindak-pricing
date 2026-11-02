import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PricingExplorer } from "@/components/PricingExplorer";
import { RevealRoot } from "@/components/Reveal";

export default function Page() {
  return (
    <>
      <Header />
      <RevealRoot>
        <main>
          <Hero />
          <PricingExplorer />
          <ClosingCta />
        </main>
      </RevealRoot>
      <Footer />
    </>
  );
}
