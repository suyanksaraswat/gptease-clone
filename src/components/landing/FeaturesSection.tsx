import { Sparkles, MessageSquare, Wand2, Zap, Shield, Heart } from "lucide-react";
import { RetroCard } from "@/components/retro-ui";

const FEATURES = [
  { icon: Wand2,         title: "Script Generator", desc: "High-converting scripts for videos, PPVs and live shows — written to sound like you." },
  { icon: MessageSquare, title: "Mass DMs",          desc: "Personal-feeling fan messages at scale that actually convert and feel authentic." },
  { icon: Zap,           title: "Caption Magic",     desc: "Hooks and captions tuned for OnlyFans, Fansly and LoyalFans algorithms." },
  { icon: Shield,        title: "Zero Filters",      desc: "No refusals, no awkward rewriting. Built for adult content from day one." },
  { icon: Heart,         title: "Sounds Like You",   desc: "Learns your tone, emojis, and style so every word feels native." },
  { icon: Sparkles,      title: "Idea Engine",       desc: "Endless content ideas to break creative blocks and keep your calendar full." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-3">Everything you need</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl">
          One tool built from the ground up for adult creators — not a filtered version of something
          else.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
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
  );
}
