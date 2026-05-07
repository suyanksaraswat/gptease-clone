const PLATFORMS = ["OnlyFans", "Fansly", "LoyalFans", "Fanvue", "Instagram", "TikTok"];

export function PlatformStrip() {
  return (
    <section className="border-y-2 border-foreground bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground mb-8">
          Streamlined workflow for top platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {PLATFORMS.map((p) => (
            <span
              key={p}
              className="rounded-sm bg-background px-5 py-2.5 text-sm font-bold retro-border retro-shadow-sm"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
