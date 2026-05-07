import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Kepi Carter",
    handle: "@GypsyRed_Ivy",
    avatar: "https://pbs.twimg.com/profile_images/1735633060865916928/4wdC0whz_400x400.jpg",
    quote:
      "I'm obsessed. It put my whole life on auto pilot mode. Totally worth it. I've already made my money back.",
  },
  {
    name: "BADKITTYYY",
    handle: "@Badkittyyy_",
    avatar: "https://pbs.twimg.com/profile_images/1485674950857953283/Iave5wkM_400x400.jpg",
    quote: "Wow, is it Christmas? I played with it for two seconds and my mind is already blown.",
  },
  {
    name: "Anna Smyth",
    handle: "@MsAnnaSmyth",
    avatar: "https://pbs.twimg.com/profile_images/1815373433829474306/btsUyAEF_400x400.jpg",
    quote: "It helped me create a mass mail and the income just from that email? $500. THANK YOU.",
  },
  {
    name: "Mistress Quynn",
    handle: "@MistressQuynn",
    avatar: "https://pbs.twimg.com/profile_images/1815867757243600897/5CjTirP7_400x400.jpg",
    quote:
      "GPTease is something I now use every single day!! Seriously! This is a real game changer for us!",
  },
  {
    name: "ToriMinxxy",
    handle: "@toriminxxy",
    avatar: "https://pbs.twimg.com/profile_images/2031453095641886722/C5S2ZKUy_400x400.jpg",
    quote:
      "Definitely my MOST helpful tool right now! When I hit a brain stump, GPTease gives me that creative nudge to get the juices flowing.",
  },
  {
    name: "ChloeDom",
    handle: "@Chloe_Dom_Kitty",
    avatar: "https://pbs.twimg.com/profile_images/2043630273905012737/AiCVhOUJ_400x400.jpg",
    quote:
      "I am very excited about GPTease! This is going to make it soooooooo much easier to create content and so many other things!",
  },
  {
    name: "Temptress Doll Face",
    handle: "@onlyonedollface",
    avatar: "https://pbs.twimg.com/profile_images/1989153525318778880/opUursIo_400x400.jpg",
    quote:
      "I swear by GPTease 🤖 I encourage my fellow Doms to invest in tools that spark inspiration and creativity.",
  },
  {
    name: "ExoticTropic",
    handle: "@exotictropic",
    avatar: "https://pbs.twimg.com/profile_images/1692554769733124096/oF-nLXDs_400x400.jpg",
    quote:
      "Love GPTease — I know it's going to take my business to new heights. Best decision I've made this year.",
  },
];

export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="max-w-7xl mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row gap-6 md:justify-between md:items-center mb-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl lg:text-5xl uppercase mb-2">Customer Love</h2>
          <p className="text-lg text-muted-foreground">
            Your Personalized AI for scripts, captions, mass DMs — and re-igniting your creative
            spirit.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="inline-flex items-center justify-center h-12 w-12 rounded-sm bg-primary retro-border retro-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:retro-shadow-lg active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="inline-flex items-center justify-center h-12 w-12 rounded-sm bg-primary retro-border retro-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:retro-shadow-lg active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-scroll pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
      >
        {TESTIMONIALS.map((t) => (
          <div
            key={t.handle}
            className="min-w-[min(100%,22rem)] md:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(40%-0.5rem)] max-w-88 shrink-0 pb-1 pr-1"
          >
            <div className="rounded-sm bg-card flex flex-col p-6 h-full retro-border retro-shadow hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="relative flex rounded-sm overflow-hidden h-14 w-14 retro-border shrink-0 bg-secondary">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    alt={t.name}
                    src={t.avatar}
                    loading="lazy"
                  />
                </span>
                <div>
                  <h3 className="font-display text-lg">{t.name}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{t.handle}</p>
                </div>
              </div>
              <p className="text-base leading-relaxed flex-1">"{t.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
