import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { RetroButton, RetroCard, RetroInput } from "@/components/retro-ui";
import { Check } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Onboarding — GPTease" }] }),
  component: Onboarding,
});

const steps = [
  { key: "profile", label: "Your profile" },
  { key: "platforms", label: "Platforms" },
  { key: "tone", label: "Voice & tone" },
  { key: "done", label: "All set" },
];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [platforms, setPlatforms] = useState<string[]>(["OnlyFans"]);
  const [tone, setTone] = useState("Playful");

  const next = () => (step < steps.length - 1 ? setStep(step + 1) : navigate({ to: "/chat" }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Stepper */}
        <ol className="mb-8 flex items-center gap-2">
          {steps.map((s, i) => (
            <li key={s.key} className="flex flex-1 items-center gap-2">
              <div
                className={`h-9 w-9 flex-none rounded-sm retro-border flex items-center justify-center font-display ${
                  i <= step ? "bg-primary" : "bg-background"
                }`}
              >
                {i < step ? <Check className="h-5 w-5" /> : String(i + 1).padStart(2, "0")}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-1 flex-1 retro-border ${i < step ? "bg-primary" : "bg-background"}`}
                />
              )}
            </li>
          ))}
        </ol>

        <RetroCard>
          <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Step {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
          </p>
          <h1 className="font-display text-3xl md:text-4xl uppercase mt-2">{steps[step].label}</h1>

          <div className="mt-6 min-h-[200px]">
            {step === 0 && (
              <div className="space-y-4">
                <div>
                  <label className="font-bold text-sm">Stage name</label>
                  <RetroInput placeholder="e.g. Luna Rose" defaultValue="Luna Rose" />
                </div>
                <div>
                  <label className="font-bold text-sm">Niche</label>
                  <RetroInput
                    placeholder="e.g. cosplay, fitness, GFE"
                    defaultValue="GFE / cosplay"
                  />
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["OnlyFans", "Fansly", "LoyalFans", "Fanvue", "Instagram", "TikTok"].map((p) => {
                  const active = platforms.includes(p);
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() =>
                        setPlatforms((prev) =>
                          active ? prev.filter((x) => x !== p) : [...prev, p],
                        )
                      }
                      className={`rounded-sm retro-border p-3 font-bold transition-transform ${
                        active ? "bg-primary retro-shadow" : "bg-background"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            )}
            {step === 2 && (
              <div className="grid grid-cols-2 gap-3">
                {["Playful", "Sultry", "Dominant", "Sweet"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={`rounded-sm retro-border p-4 text-left ${
                      tone === t ? "bg-accent retro-shadow" : "bg-background"
                    }`}
                  >
                    <div className="font-display text-xl">{t}</div>
                    <div className="text-xs text-muted-foreground">Voice preset</div>
                  </button>
                ))}
              </div>
            )}
            {step === 3 && (
              <div className="text-center py-6">
                <div className="mx-auto h-16 w-16 rounded-sm retro-border bg-primary flex items-center justify-center retro-shadow">
                  <Check className="h-8 w-8" />
                </div>
                <h2 className="font-display text-2xl uppercase mt-4">You're all set!</h2>
                <p className="text-muted-foreground mt-2">
                  Let's open the chat and write something spicy.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <RetroButton variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>
              ← Back
            </RetroButton>
            <RetroButton onClick={next}>
              {step === steps.length - 1 ? "Open Chat →" : "Continue →"}
            </RetroButton>
          </div>
        </RetroCard>
      </div>
    </div>
  );
}
