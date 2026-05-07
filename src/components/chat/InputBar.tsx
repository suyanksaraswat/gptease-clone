import { Send, Settings2, ChevronDown } from "lucide-react";
import { RetroButton } from "@/components/retro-ui";
import type { ResponseMode, ResponseTone } from "./types";

interface Props {
  input: string;
  thinking: boolean;
  responseMode: ResponseMode;
  responseTone: ResponseTone;
  showConfig: boolean;
  onInputChange: (v: string) => void;
  onSend: () => void;
  onResponseModeChange: (m: ResponseMode) => void;
  onResponseToneChange: (t: ResponseTone) => void;
  onToggleConfig: () => void;
}

export function InputBar({
  input,
  thinking,
  responseMode,
  responseTone,
  showConfig,
  onInputChange,
  onSend,
  onResponseModeChange,
  onResponseToneChange,
  onToggleConfig,
}: Props) {
  const configLabel =
    responseMode === "double" ? "Double" : responseTone === "direct" ? "Direct" : "Creative";

  return (
    <div className="border-t-2 border-foreground bg-background">
      {/* Response config bar */}
      <div className="border-b-2 border-foreground px-4 py-2">
        <div className="mx-auto max-w-3xl">
          <button
            onClick={onToggleConfig}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <Settings2 className="h-3.5 w-3.5" />
            Response config
            <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs normal-case font-medium tracking-normal">
              {configLabel}
            </span>
            <ChevronDown
              className={`h-3 w-3 transition-transform ${showConfig ? "rotate-180" : ""}`}
            />
          </button>

          {showConfig && (
            <div className="mt-3 space-y-3 pb-1">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Mode
                </p>
                <div className="flex gap-2 flex-wrap">
                  {(["single", "double"] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => onResponseModeChange(mode)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-sm retro-border transition-all ${
                        responseMode === mode
                          ? "bg-primary retro-shadow-sm"
                          : "bg-card hover:bg-secondary"
                      }`}
                    >
                      {mode === "single" ? "Single Response" : "Double Response"}
                    </button>
                  ))}
                </div>
              </div>

              {responseMode === "single" && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Style
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => onResponseToneChange("direct")}
                      className={`px-3 py-1.5 text-sm rounded-sm retro-border transition-all ${
                        responseTone === "direct"
                          ? "bg-primary retro-shadow-sm font-bold"
                          : "bg-card hover:bg-secondary"
                      }`}
                    >
                      Direct — focused &amp; concise
                    </button>
                    <button
                      onClick={() => onResponseToneChange("creative")}
                      className={`px-3 py-1.5 text-sm rounded-sm retro-border transition-all ${
                        responseTone === "creative"
                          ? "bg-primary retro-shadow-sm font-bold"
                          : "bg-card hover:bg-secondary"
                      }`}
                    >
                      Creative — imaginative &amp; detailed
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Textarea */}
      <div className="p-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-end gap-2 rounded-sm bg-card p-2 retro-border retro-shadow">
            <textarea
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  onSend();
                }
              }}
              rows={1}
              placeholder="Type your message… (Shift+Enter for newline)"
              className="flex-1 resize-none bg-transparent px-2 py-2 focus:outline-none max-h-40"
            />
            <RetroButton onClick={onSend} disabled={!input.trim() || thinking} size="md">
              <Send className="h-4 w-4" />
            </RetroButton>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            GPTease can make mistakes. Always review your final content.
          </p>
        </div>
      </div>
    </div>
  );
}
