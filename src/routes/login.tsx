import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { RetroButton, RetroCard, RetroInput } from "@/components/retro-ui";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — GPTease" },
      { name: "description", content: "Sign in to GPTease to access your AI assistant." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate({ to: "/onboarding" }), 600);
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left visual */}
      <div className="hidden md:flex flex-col justify-between p-10 border-r-2 border-foreground bg-primary">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GPTease" width={40} height={40} className="h-10 w-10" />
          <span className="font-display text-2xl">GPTease</span>
        </Link>
        <div>
          <h2 className="font-display text-5xl uppercase leading-[0.95]">
            Create more.
            <br />
            Filter less.
          </h2>
          <p className="mt-4 text-base max-w-sm">
            Your unfiltered AI co-writer for scripts, captions and DMs.
          </p>
        </div>
        <p className="text-sm">"Put my whole content workflow on autopilot." — @creator</p>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center p-6 md:p-10">
        <RetroCard className="w-full max-w-md">
          <h1 className="font-display text-3xl uppercase">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to continue to GPTease</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="font-bold text-sm">Email</label>
              <RetroInput
                type="email"
                placeholder="you@studio.com"
                required
                defaultValue="demo@gptease.ai"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="font-bold text-sm">Password</label>
                <a className="text-xs underline underline-offset-2">Forgot?</a>
              </div>
              <RetroInput type="password" placeholder="••••••••" required defaultValue="demopass" />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 retro-border accent-foreground"
                defaultChecked
              />
              Remember me
            </label>
            <RetroButton type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </RetroButton>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-foreground" /> OR{" "}
            <div className="h-px flex-1 bg-foreground" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <RetroButton variant="outline">Google</RetroButton>
            <RetroButton variant="outline">Apple</RetroButton>
          </div>

          <p className="mt-6 text-center text-sm">
            New here?{" "}
            <Link to="/onboarding" className="font-bold underline">
              Create an account
            </Link>
          </p>
        </RetroCard>
      </div>
    </div>
  );
}
