import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Share2 } from "lucide-react";
import { Sidebar } from "@/components/chat/Sidebar";
import { MessageArea } from "@/components/chat/MessageArea";
import { InputBar } from "@/components/chat/InputBar";
import { ShareModal } from "@/components/chat/ShareModal";
import { PricingModal } from "@/components/chat/PricingModal";
import type {
  Conversation,
  ChatMsg,
  SingleMsg,
  ResponseMode,
  ResponseTone,
} from "@/components/chat/types";

export const Route = createFileRoute("/chat")({
  head: () => ({ meta: [{ title: "Chat — GPTease" }] }),
  component: ChatPage,
});

const uid = () => Math.random().toString(36).slice(2, 10);

const initialConversations: Conversation[] = [
  {
    id: uid(),
    title: "Content ideas for this week",
    messages: [
      { id: uid(), role: "user", content: "Give me 5 content ideas for this week." },
      {
        id: uid(),
        role: "assistant",
        content:
          "**5 Content Ideas for This Week:**\n\n1. Behind-the-scenes setup reel\n2. Q&A with your most-asked questions\n3. Day-in-my-life vlog\n4. Collab teaser with a fellow creator\n5. Fan appreciation + exclusive reveal\n\nWant scripts or captions for any of these?",
      },
    ],
  },
  { id: uid(), title: "Mass DM campaign", messages: [] },
  { id: uid(), title: "PPV caption ideas", messages: [] },
];

function directReply(prompt: string): string {
  return `Here's a draft for **"${prompt.slice(0, 55)}"**:\n\n- Lead with a clear hook\n- Add one specific detail that builds tension\n- End with a direct CTA\n\nWant me to tighten the copy or adjust the tone?`;
}

function creativeReply(prompt: string): string {
  return `Let's make **"${prompt.slice(0, 55)}"** unforgettable ✨\n\nPicture this: your audience opens the message and *feels* it before they finish reading...\n\n🎯 **Sensory hook** — paint a moment, not a product\n🔥 **Rising tension** — let curiosity do the work\n💌 **Personal close** — make it feel written just for them\n\nShall we develop one of these directions further?`;
}

const SUGGESTIONS = [
  "Write a teasing PPV caption",
  "Draft a Valentine's mass DM",
  "10 content shoot ideas",
  "Reply to a chatty subscriber",
];

function ChatPage() {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeId, setActiveId] = useState(initialConversations[0].id);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [responseMode, setResponseMode] = useState<ResponseMode>("single");
  const [responseTone, setResponseTone] = useState<ResponseTone>("direct");
  const [showConfig, setShowConfig] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const active = conversations.find((c) => c.id === activeId)!;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [active?.messages.length, thinking]);

  const newChat = () => {
    const c: Conversation = { id: uid(), title: "New chat", messages: [] };
    setConversations((prev) => [c, ...prev]);
    setActiveId(c.id);
    setSidebarOpen(false);
  };

  const send = () => {
    const text = input.trim();
    if (!text || thinking) return;

    const userMsg: SingleMsg = { id: uid(), role: "user", content: text };
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              title: c.messages.length === 0 ? text.slice(0, 42) : c.title,
              messages: [...c.messages, userMsg],
            }
          : c,
      ),
    );
    setInput("");
    setThinking(true);

    setTimeout(() => {
      const reply: ChatMsg =
        responseMode === "double"
          ? { id: uid(), role: "double", direct: directReply(text), creative: creativeReply(text) }
          : {
              id: uid(),
              role: "assistant",
              content: responseTone === "direct" ? directReply(text) : creativeReply(text),
              tone: responseTone,
            };

      setConversations((prev) =>
        prev.map((c) => (c.id === activeId ? { ...c, messages: [...c.messages, reply] } : c)),
      );
      setThinking(false);
    }, 900);
  };

  const remove = (id: string) => {
    setConversations((prev) => {
      const next = prev.filter((c) => c.id !== id);
      if (id === activeId && next[0]) setActiveId(next[0].id);
      if (next.length === 0) {
        const fresh = { id: uid(), title: "New chat", messages: [] };
        setActiveId(fresh.id);
        return [fresh];
      }
      return next;
    });
    setMenuOpenId(null);
  };

  const startRename = (c: Conversation) => {
    setRenamingId(c.id);
    setRenameValue(c.title);
    setMenuOpenId(null);
  };

  const saveRename = () => {
    setConversations((prev) =>
      prev.map((c) => (c.id === renamingId ? { ...c, title: renameValue.trim() || c.title } : c)),
    );
    setRenamingId(null);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        conversations={conversations}
        activeId={activeId}
        sidebarOpen={sidebarOpen}
        menuOpenId={menuOpenId}
        renamingId={renamingId}
        renameValue={renameValue}
        onSelectConversation={(id) => {
          setActiveId(id);
          setSidebarOpen(false);
        }}
        onNewChat={newChat}
        onRemove={remove}
        onStartRename={startRename}
        onSaveRename={saveRename}
        onRenameValueChange={setRenameValue}
        onMenuToggle={setMenuOpenId}
        onCloseSidebar={() => setSidebarOpen(false)}
        onLogout={() => navigate({ to: "/login" })}
        onUpgrade={() => setPricingOpen(true)}
      />

      <div className="flex flex-1 flex-col min-w-0">
        <header className="flex items-center gap-3 border-b-2 border-foreground bg-background px-4 py-3">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="font-display text-xl truncate flex-1">{active.title}</h1>
          <button
            onClick={() => setShareOpen(true)}
            className="flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-sm font-medium retro-border retro-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:retro-shadow transition-all"
          >
            <Share2 className="h-4 w-4" /> Share
          </button>
        </header>

        <MessageArea
          messages={active.messages}
          thinking={thinking}
          suggestions={SUGGESTIONS}
          scrollRef={scrollRef}
          onSuggestionClick={setInput}
        />

        <InputBar
          input={input}
          thinking={thinking}
          responseMode={responseMode}
          responseTone={responseTone}
          showConfig={showConfig}
          onInputChange={setInput}
          onSend={send}
          onResponseModeChange={setResponseMode}
          onResponseToneChange={setResponseTone}
          onToggleConfig={() => setShowConfig((v) => !v)}
        />
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-foreground/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <ShareModal open={shareOpen} activeId={activeId} onClose={() => setShareOpen(false)} />
      <PricingModal open={pricingOpen} onClose={() => setPricingOpen(false)} />
    </div>
  );
}
