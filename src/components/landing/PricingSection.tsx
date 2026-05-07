import { Link } from "@tanstack/react-router";
import { Check, Zap } from "lucide-react";
import { RetroButton } from "@/components/retro-ui";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: null,
    badge: null,
    discount: null,
    cta: "Current plan",
    disabled: true,
    features: [
      "1 prompt request per day",
      "Uncensored NSFW AI access",
      "Brainstorm new content ideas",
    ],
  },
  {
    name: "Pro",
    price: "$5",
    period: "/week · billed monthly",
    badge: "Most Popular",
    discount: "$10 off for limited time!",
    cta: "Upgrade to Pro",
    disabled: false,
    features: [
      "500 prompt requests per month",
      "Personalize GPTease to write like you",
      "Ideas, captions, DMs and more",
      "Join SWCEO's mission for adult creators",
    ],
  },
  {
    name: "Power",
    price: "$10",
    period: "/week · billed monthly",
    badge: null,
    discount: null,
    cta: "Upgrade to Power",
    disabled: false,
    features: [
      "3,000 prompt requests per month",
      "Personas — multiple brands & styles",
      "Longer chats for scripts & sessions",
      "Early access to new features",
      "Join SWCEO's mission for adult creators",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="border-t-2 border-foreground bg-secondary">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-3">Pricing</h2>
          <p className="text-lg text-muted-foreground">Choose the plan that's right for you</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm flex flex-col p-6 retro-border retro-shadow ${
                plan.badge ? "bg-card" : "bg-background"
              }`}
            >
              {plan.badge && (
                <span className="self-start rounded-sm bg-primary px-3 py-1 text-xs font-bold retro-border retro-shadow-sm mb-4">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-4xl">{plan.price}</span>
                {plan.period && (
                  <span className="text-xs text-muted-foreground">{plan.period}</span>
                )}
              </div>
              {plan.discount && (
                <p className="text-xs font-bold text-accent mb-4">{plan.discount}</p>
              )}

              <ul className="my-6 space-y-3 border-t-2 border-foreground pt-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 flex-none mt-0.5 bg-foreground text-background rounded-sm p-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/login">
                <RetroButton
                  variant={plan.badge ? "primary" : "outline"}
                  className="w-full"
                  disabled={plan.disabled}
                >
                  {!plan.disabled && <Zap className="h-4 w-4" />}
                  {plan.cta}
                </RetroButton>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
