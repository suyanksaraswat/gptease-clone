# gptease-clone

An AI-powered content assistant for creators — built with TanStack Start, React 19, Tailwind CSS v4, and deployed on Cloudflare Workers.

---

## Pages

### `/` — Landing
Marketing page with hero section, feature highlights, and calls to action. Uses the shared `RetroHeader` and `RetroFooter`.

### `/login` — Sign In
Email/password login form with social sign-in buttons (Google, Apple). On submit, routes to `/onboarding`.

### `/onboarding` — Onboarding
Four-step wizard that collects:
1. Profile — display name and niche
2. Platform — OnlyFans, Fansly, LoyalFans, Fanvue, Instagram, TikTok
3. Tone — Playful, Sultry, Dominant, Sweet
4. Confirmation screen

### `/chat` — Chat
Main interface. Features:
- **Sidebar** — conversation list with rename/delete, new chat button, user profile link, logout
- **Response config** — collapsible panel above the input:
  - *Single Response*: choose Direct (focused, concise) or Creative (imaginative, detailed)
  - *Double Response*: generates both styles side by side in every reply
- **Share** — header button opens a modal with a copyable read-only share link
- Markdown rendering in all assistant messages
- Typing indicator while a reply is generating

### `/profile` — Profile
User account page:
- Avatar, name, and email
- Current plan (Free trial, days remaining)
- Daily usage bars — Overall Interactions, Image, PDF, Canvas AI, Think — each with used/limit
- Upgrade plan button
- Log out and Delete account actions

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | TanStack Start (SSR) |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS v4 + custom retro utilities |
| UI components | shadcn/ui + custom `RetroButton`, `RetroCard`, `RetroInput` |
| Icons | Lucide React |
| Markdown | react-markdown |
| Deployment | Cloudflare Workers (via Wrangler) |

---

## Getting started

```bash
bun install
bun run dev
```

Build for production:

```bash
bun run build
```
