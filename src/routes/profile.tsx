import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, User, Sparkles, LogOut, Trash2 } from "lucide-react";
import { RetroButton, RetroCard } from "@/components/retro-ui";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — GPTease" }] }),
  component: ProfilePage,
});

const usage = {
  interactions: { used: 1, limit: 8 },
  images:       { used: 0, limit: 1 },
  pdfs:         { used: 0, limit: 0 },
  canvas:       { used: 0, limit: 0 },
  think:        { used: 0, limit: 8 },
};

function UsageBar({ label, used, limit }: { label: string; used: number; limit: number }) {
  const pct = limit === 0 ? 0 : Math.min((used / limit) * 100, 100);
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium">{label}</span>
        <span className="font-mono text-muted-foreground">
          {used} / {limit}
        </span>
      </div>
      <div className="h-2 w-full rounded-sm bg-secondary retro-border overflow-hidden">
        <div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function ProfilePage() {
  const navigate = useNavigate();

  const logout = () => navigate({ to: "/login" });

  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center gap-3 border-b-2 border-foreground bg-background px-4 py-3">
        <button
          onClick={() => navigate({ to: "/chat" })}
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="font-display text-xl">Profile</h1>
      </header>

      <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
        {/* Identity */}
        <RetroCard>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 flex-none rounded-sm bg-primary retro-border retro-shadow flex items-center justify-center">
              <User className="h-8 w-8" />
            </div>
            <div className="min-w-0">
              <p className="font-display text-xl">Suyank Saraswat</p>
              <p className="text-sm text-muted-foreground">suyank.saraswat@gmail.com</p>
            </div>
          </div>
        </RetroCard>

        {/* Plan */}
        <RetroCard>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-display text-lg mb-1">Current plan</h2>
              <p className="text-sm font-medium">Free trial plan</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Remaining trial days:{" "}
                <span className="font-bold text-foreground">6</span>
              </p>
            </div>
            <span className="rounded-sm bg-primary px-3 py-1 text-sm font-bold retro-border retro-shadow-sm">
              Free
            </span>
          </div>
          <div className="mt-4 pt-4 border-t-2 border-foreground">
            <RetroButton variant="outline" size="sm">
              <Sparkles className="h-4 w-4" /> Upgrade plan
            </RetroButton>
          </div>
        </RetroCard>

        {/* Daily use */}
        <RetroCard>
          <h2 className="font-display text-lg mb-4">Daily use</h2>
          <div className="space-y-4">
            <UsageBar label="Overall Interactions" {...usage.interactions} />
            <UsageBar label="Image usage"          {...usage.images} />
            <UsageBar label="PDF usage"            {...usage.pdfs} />
            <UsageBar label="Canvas AI"            {...usage.canvas} />
            <UsageBar label="Think"                {...usage.think} />
          </div>
        </RetroCard>

        {/* Account */}
        <RetroCard className="space-y-3">
          <h2 className="font-display text-lg">Account</h2>
          <RetroButton
            variant="outline"
            size="sm"
            onClick={logout}
            className="w-full justify-start"
          >
            <LogOut className="h-4 w-4" /> Log out
          </RetroButton>
          <RetroButton
            variant="accent"
            size="sm"
            className="w-full justify-start"
          >
            <Trash2 className="h-4 w-4" /> Delete account
          </RetroButton>
        </RetroCard>
      </div>
    </div>
  );
}
