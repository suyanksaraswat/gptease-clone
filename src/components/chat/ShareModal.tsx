import { useState } from "react";
import { X, LinkIcon, Check } from "lucide-react";
import { RetroButton } from "@/components/retro-ui";

interface Props {
  open: boolean;
  activeId: string;
  onClose: () => void;
}

export function ShareModal({ open, activeId, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const link = `https://gptease.ai/share/${activeId}`;

  const copy = () => {
    navigator.clipboard.writeText(link).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-sm bg-background retro-border retro-shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 opacity-60 hover:opacity-100 transition-opacity"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="font-display text-2xl mb-1">Share chat</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Anyone with this link can view a read-only copy of the conversation.
        </p>
        <div className="flex items-center gap-2 rounded-sm bg-secondary p-3 retro-border mb-4">
          <LinkIcon className="h-4 w-4 flex-none text-muted-foreground" />
          <span className="flex-1 text-sm font-mono truncate text-muted-foreground">{link}</span>
        </div>
        <RetroButton className="w-full" onClick={copy}>
          {copied ? (
            <><Check className="h-4 w-4" /> Copied!</>
          ) : (
            <><LinkIcon className="h-4 w-4" /> Copy link</>
          )}
        </RetroButton>
      </div>
    </div>
  );
}
