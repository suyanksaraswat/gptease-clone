import { createFileRoute } from "@tanstack/react-router";
import { RetroHeader, RetroFooter } from "@/components/retro-shell";
import { HeroSection } from "@/components/landing/HeroSection";
import { PlatformStrip } from "@/components/landing/PlatformStrip";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsCarousel } from "@/components/landing/TestimonialsCarousel";
import { PricingSection } from "@/components/landing/PricingSection";
import { CtaSection } from "@/components/landing/CtaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GPTease — The Uncensored AI for Adult Creators" },
      {
        name: "description",
        content:
          "Scripts, captions and content ideas built for adult creators. No filters, no refusals.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <RetroHeader />
      <main className="flex-1">
        <HeroSection />
        <PlatformStrip />
        <FeaturesSection />
        <TestimonialsCarousel />
        <PricingSection />
        <CtaSection />
      </main>
      <RetroFooter />
    </div>
  );
}
