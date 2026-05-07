import { RefObject } from "react";
import ReactMarkdown from "react-markdown";
import { Sparkles } from "lucide-react";
import type { ChatMsg } from "./types";

interface Props {
  messages: ChatMsg[];
  thinking: boolean;
  suggestions: string[];
  scrollRef: RefObject<HTMLDivElement | null>;
  onSuggestionClick: (s: string) => void;
}

export function MessageArea({ messages, thinking, suggestions, scrollRef, onSuggestionClick }: Props) {
  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-8">
      <div className="mx-auto max-w-3xl space-y-6">
        {messages.length === 0 && (
          <div className="text-center py-16">
            <div className="mx-auto h-14 w-14 rounded-sm bg-primary retro-border retro-shadow flex items-center justify-center">
              <Sparkles className="h-7 w-7" />
            </div>
            <h2 className="font-display text-3xl uppercase mt-4">How can I help today?</h2>
            <p className="text-muted-foreground mt-2">
              Ask for scripts, captions, mass DMs or content ideas.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 max-w-xl mx-auto">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => onSuggestionClick(s)}
                  className="rounded-sm bg-card p-3 text-left text-sm retro-border retro-shadow-sm hover:retro-shadow transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) => {
          if (m.role === "double") {
            return (
              <div key={m.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 flex-none rounded-sm bg-primary retro-border flex items-center justify-center">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Two responses
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 ml-12">
                  <div className="rounded-sm bg-card px-4 py-3 retro-border retro-shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                      Direct
                    </p>
                    <MarkdownBody>{m.direct}</MarkdownBody>
                  </div>
                  <div className="rounded-sm bg-primary/20 px-4 py-3 retro-border retro-shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                      Creative
                    </p>
                    <MarkdownBody>{m.creative}</MarkdownBody>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={m.id}
              className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {m.role === "assistant" && (
                <div className="h-9 w-9 flex-none rounded-sm bg-primary retro-border flex items-center justify-center">
                  <Sparkles className="h-4 w-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-sm px-4 py-3 retro-border retro-shadow-sm ${
                  m.role === "user" ? "bg-accent" : "bg-card"
                }`}
              >
                {m.role === "assistant" && m.tone && (
                  <p className="text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground capitalize">
                    {m.tone}
                  </p>
                )}
                <MarkdownBody>{m.content}</MarkdownBody>
              </div>
            </div>
          );
        })}

        {thinking && (
          <div className="flex gap-3">
            <div className="h-9 w-9 flex-none rounded-sm bg-primary retro-border flex items-center justify-center">
              <Sparkles className="h-4 w-4 animate-pulse" />
            </div>
            <div className="rounded-sm bg-card px-4 py-3 retro-border retro-shadow-sm">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-foreground animate-bounce" />
                <span className="h-2 w-2 rounded-full bg-foreground animate-bounce [animation-delay:120ms]" />
                <span className="h-2 w-2 rounded-full bg-foreground animate-bounce [animation-delay:240ms]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MarkdownBody({ children }: { children: string }) {
  return (
    <div className="prose prose-sm max-w-none prose-p:my-2 prose-headings:font-display prose-strong:text-foreground">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
