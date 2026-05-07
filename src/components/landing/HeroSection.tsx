import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { RetroButton, RetroCard } from "@/components/retro-ui";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-block rounded-sm bg-accent px-3 py-1 retro-border retro-shadow-sm font-bold text-sm mb-6">
            NEW · Built for creators
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] uppercase">
            The uncensored
            <br />
            AI for{" "}
            <span className="bg-primary px-2 retro-border retro-shadow inline-block">creators</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Scripts, captions, mass DMs and ideas — crafted for adult creators. No refusals, no
            awkward filters.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/login">
              <RetroButton size="lg">Start free trial</RetroButton>
            </Link>
            <Link to="/chat">
              <RetroButton size="lg" variant="outline">
                Try the chat →
              </RetroButton>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">7-day free trial · no credit card</p>
        </div>

        <RetroCard className="bg-card">
          <div className="flex items-center gap-2 border-b-2 border-foreground pb-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-destructive retro-border" />
            <div className="h-3 w-3 rounded-full bg-primary retro-border" />
            <div className="h-3 w-3 rounded-full bg-accent retro-border" />
            <span className="ml-2 font-bold text-sm">GPT&#x39E;AS&#x39E; Canvas</span>
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
  );
}
