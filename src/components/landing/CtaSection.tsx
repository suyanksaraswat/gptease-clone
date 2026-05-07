import { Link } from "@tanstack/react-router";
import { RetroButton } from "@/components/retro-ui";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="font-display text-4xl md:text-6xl uppercase">
        Ready to make more, faster?
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Join 1,500+ creators using GPTease to ship content daily.
      </p>
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <Link to="/login">
          <RetroButton size="lg">Start free trial</RetroButton>
        </Link>
        <Link to="/chat">
          <RetroButton size="lg" variant="accent">
            Open chat
          </RetroButton>
        </Link>
      </div>
    </section>
  );
}
