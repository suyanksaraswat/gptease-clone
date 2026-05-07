import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function RetroHeader() {
  return (
    <header className="border-b-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GPTease" width={40} height={40} className="h-10 w-10" />
          <span className="font-display text-2xl">GPTease</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="font-medium hover:underline underline-offset-4 decoration-2">
            Home
          </Link>
          <a
            href="#features"
            className="font-medium hover:underline underline-offset-4 decoration-2"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="font-medium hover:underline underline-offset-4 decoration-2"
          >
            Pricing
          </a>
          <Link to="/login" className="font-medium hover:underline underline-offset-4 decoration-2">
            Sign In
          </Link>
        </nav>
        <Link
          to="/login"
          className="retro-border retro-shadow inline-flex items-center rounded-sm bg-primary px-4 py-2 font-bold text-primary-foreground transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:retro-shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export function RetroFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={logo} alt="GPTease" width={32} height={32} className="h-8 w-8" loading="lazy" />
          <span className="font-display text-lg">GPTease</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 GPTease. The uncensored AI for creators.
        </p>
      </div>
    </footer>
  );
}
