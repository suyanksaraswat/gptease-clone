import { createFileRoute, Link } from "@tanstack/react-router";
import { RetroHeader, RetroFooter } from "@/components/retro-shell";
import { RetroButton, RetroCard } from "@/components/retro-ui";
import { Sparkles, MessageSquare, Wand2, Zap, Shield, Heart } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GPTease — The Uncensored AI for Adult Creators" },
      { name: "description", content: "Scripts, captions and content ideas built for adult creators. No filters, no refusals." },
      { property: "og:title", content: "GPTease — Uncensored AI for Creators" },
      { property: "og:description", content: "Scripts, captions and content ideas built for adult creators." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <RetroHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-block rounded-sm bg-accent px-3 py-1 retro-border retro-shadow-sm font-bold text-sm mb-6">
                NEW · Built for creators
              </div>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95] uppercase">
                The uncensored<br/>AI for <span className="bg-primary px-2 retro-border retro-shadow inline-block">creators</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-md">
                Scripts, captions, mass DMs and ideas — crafted for adult creators. No refusals, no awkward filters.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/login"><RetroButton size="lg">Start free trial</RetroButton></Link>
                <Link to="/chat"><RetroButton size="lg" variant="outline">Try the chat →</RetroButton></Link>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">7-day free trial · no credit card</p>
            </div>

            {/* Demo card */}
            <RetroCard className="bg-card">
              <div className="flex items-center gap-2 border-b-2 border-foreground pb-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-destructive retro-border" />
                <div className="h-3 w-3 rounded-full bg-primary retro-border" />
                <div className="h-3 w-3 rounded-full bg-accent retro-border" />
                <span className="ml-2 font-bold text-sm">GPTease Canvas</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="rounded-sm bg-secondary p-3 retro-border">
                  <strong>You:</strong> Need a spicy lingerie try-on script for Valentine's drop.
                </div>
                <div className="rounded-sm bg-primary p-3 retro-border">
                  <strong>GPTease:</strong> On it. Drafting a 60-second script with hook, tease and CTA…
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Sparkles className="h-4 w-4 animate-pulse" /> Generating script...
                </div>
              </div>
            </RetroCard>
          </div>
        </section>

        {/* Features */}
        <section className="border-y-2 border-foreground bg-secondary">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-12">Everything you need</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Wand2, title: "Script Generator", desc: "High-converting scripts for videos, PPVs and live shows." },
                { icon: MessageSquare, title: "Mass DMs", desc: "Personal-feeling fan messages that actually convert." },
                { icon: Zap, title: "Caption Magic", desc: "Hooks and captions tuned for OF, Fansly and LoyalFans." },
                { icon: Shield, title: "Zero Filters", desc: "No refusals. Built for adult content from day one." },
                { icon: Heart, title: "Sounds like you", desc: "Trains on your tone so the words feel native." },
                { icon: Sparkles, title: "Idea Engine", desc: "Endless content ideas to break creative blocks." },
              ].map((f) => (
                <RetroCard key={f.title}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-primary retro-border mb-4">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </RetroCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase">Ready to make more, faster?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Join 1,500+ creators using GPTease to ship content daily.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/login"><RetroButton size="lg">Start free trial</RetroButton></Link>
            <Link to="/chat"><RetroButton size="lg" variant="accent">Open chat</RetroButton></Link>
          </div>
        </section>
      </main>
      <RetroFooter />
    </div>
  );
}
