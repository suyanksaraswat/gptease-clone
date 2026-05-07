import { useState } from "react";
import { X, Check, Zap } from "lucide-react";
import { RetroButton } from "@/components/retro-ui";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  onClose: () => void;
}

type Audience = "personal" | "team";

interface Plan {
  id: string;
  name: string;
  price: string;
  period?: string;
  badge?: string;
  discount?: string;
  cta: string;
  ctaVariant: "primary" | "outline" | "accent";
  isCurrent?: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    cta: "Current Plan",
    ctaVariant: "outline",
    isCurrent: true,
    features: [
      "1 prompt request per day",
      "Uncensored NSFW AI Access",
      "Brainstorm new content ideas",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$5/week",
    period: "billed monthly",
    badge: "Most Popular",
    discount: "$10 off for limited time!",
    cta: "Upgrade to Pro",
    ctaVariant: "primary",
    features: [
      "500 prompt requests per month",
      "Personalize GPTease to write like you: your style, emojis, and tone",
      "Help with creative writing: ideas, captions, DMs and more",
      "Join SWCEO in their mission to bring new technologies to adult creators",
    ],
  },
  {
    id: "power",
    name: "Power",
    price: "$10/week",
    period: "billed monthly",
    cta: "Upgrade to Power",
    ctaVariant: "accent",
    features: [
      "3000 prompt requests per month",
      "Personas: Create individual brands with different writing styles",
      "Longer chats to write scripts, sexting sessions, or perfect your content",
      "Early access to new features",
      "Join SWCEO in their mission to bring new technologies to adult creators",
    ],
  },
];

export function PricingModal({ open, onClose }: Props) {
  const [audience, setAudience] = useState<Audience>("personal");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/40" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm bg-background retro-border retro-shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b-2 border-foreground px-6 py-4 flex items-start justify-between">
          <div>
            <h2 className="font-display text-2xl tracking-tight">GPT&#x39E;AS&#x39E; Plans</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Choose the plan that's right for you</p>
          </div>
          <button
            onClick={onClose}
            className="opacity-60 hover:opacity-100 transition-opacity mt-0.5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Audience toggle */}
          <div className="flex w-fit rounded-sm retro-border overflow-hidden">
            {(["personal", "team"] as const).map((a) => (
              <button
                key={a}
                onClick={() => setAudience(a)}
                className={cn(
                  "px-5 py-2 text-sm font-bold capitalize transition-colors",
                  audience === a ? "bg-primary" : "bg-card hover:bg-secondary",
                  a === "team" && "border-l-2 border-foreground",
                )}
              >
                {a}
              </button>
            ))}
          </div>

          {/* Plan cards */}
          <div className="space-y-4">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "rounded-sm p-5 retro-border",
                  plan.badge ? "retro-shadow bg-card" : "bg-secondary",
                )}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  {/* Left: name + price */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-xl">{plan.name}</h3>
                      {plan.badge && (
                        <span className="rounded-sm bg-primary px-2 py-0.5 text-xs font-bold retro-border retro-shadow-sm">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-2xl">{plan.price}</span>
                      {plan.period && (
                        <span className="text-xs text-muted-foreground">({plan.period})</span>
                      )}
                    </div>
                    {plan.discount && (
                      <p className="text-xs font-bold text-accent">{plan.discount}</p>
                    )}
                  </div>

                  {/* Right: CTA */}
                  <RetroButton
                    variant={plan.ctaVariant}
                    size="sm"
                    disabled={plan.isCurrent}
                    className="shrink-0"
                  >
                    {!plan.isCurrent && <Zap className="h-3.5 w-3.5" />}
                    {plan.cta}
                  </RetroButton>
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-2 border-t-2 border-foreground pt-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 flex-none mt-0.5 text-primary-foreground bg-foreground rounded-sm p-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
