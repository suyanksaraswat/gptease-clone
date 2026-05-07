import { useNavigate } from "@tanstack/react-router";
import {
  Plus,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  Trash2,
  X,
  User,
  LogOut,
  Zap,
} from "lucide-react";
import { RetroButton } from "@/components/retro-ui";
import logo from "@/assets/logo.png";
import type { Conversation } from "./types";

interface Props {
  conversations: Conversation[];
  activeId: string;
  sidebarOpen: boolean;
  menuOpenId: string | null;
  renamingId: string | null;
  renameValue: string;
  onSelectConversation: (id: string) => void;
  onNewChat: () => void;
  onRemove: (id: string) => void;
  onStartRename: (c: Conversation) => void;
  onSaveRename: () => void;
  onRenameValueChange: (v: string) => void;
  onMenuToggle: (id: string | null) => void;
  onCloseSidebar: () => void;
  onLogout: () => void;
  onUpgrade: () => void;
}

export function Sidebar({
  conversations,
  activeId,
  sidebarOpen,
  menuOpenId,
  renamingId,
  renameValue,
  onSelectConversation,
  onNewChat,
  onRemove,
  onStartRename,
  onSaveRename,
  onRenameValueChange,
  onMenuToggle,
  onCloseSidebar,
  onLogout,
  onUpgrade,
}: Props) {
  const navigate = useNavigate();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 flex w-72 flex-col border-r-2 border-foreground bg-secondary transition-transform md:static md:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-foreground px-4 py-3.5">
        <div className="flex items-center gap-2">
          <img src={logo} alt="GPTease" width={32} height={32} className="h-8 w-8" />
          <span className="font-display text-lg">GPTease</span>
        </div>
        <button className="md:hidden" onClick={onCloseSidebar}>
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* New chat */}
      <div className="px-2 py-4">
        <RetroButton className="w-full" onClick={onNewChat}>
          <Plus className="h-4 w-4" /> New chat
        </RetroButton>
      </div>

      {/* Conversation list */}
      <div className="flex-1 overflow-y-auto px-2 pb-4">
        <p className="px-2 mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Recent
        </p>
        <ul className="space-y-1">
          {conversations.map((c) => (
            <li key={c.id} className="relative">
              {renamingId === c.id ? (
                <input
                  autoFocus
                  value={renameValue}
                  onChange={(e) => onRenameValueChange(e.target.value)}
                  onBlur={onSaveRename}
                  onKeyDown={(e) => e.key === "Enter" && onSaveRename()}
                  className="w-full rounded-sm bg-background px-3 py-2 retro-border text-sm focus:outline-none"
                />
              ) : (
                <button
                  onClick={() => onSelectConversation(c.id)}
                  className={`group flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm font-medium ${
                    c.id === activeId
                      ? "bg-primary retro-border retro-shadow-sm"
                      : "hover:bg-background"
                  }`}
                >
                  <MessageSquare className="h-4 w-4 flex-none" />
                  <span className="flex-1 truncate">{c.title}</span>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      onMenuToggle(menuOpenId === c.id ? null : c.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 hover:bg-foreground/10 rounded p-1"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </span>
                </button>
              )}

              {menuOpenId === c.id && (
                <div className="absolute right-2 top-10 z-10 w-36 rounded-sm bg-card retro-border retro-shadow">
                  <button
                    onClick={() => onStartRename(c)}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-secondary"
                  >
                    <Pencil className="h-4 w-4" /> Rename
                  </button>
                  <button
                    onClick={() => onRemove(c.id)}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-secondary border-t-2 border-foreground"
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Upgrade banner */}
      <div className="px-3 py-3 border-t-2 border-foreground">
        <button
          onClick={onUpgrade}
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-3 py-2 text-sm font-bold retro-border retro-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:retro-shadow transition-all"
        >
          <Zap className="h-3.5 w-3.5" /> Upgrade to Pro
        </button>
      </div>

      {/* User section */}
      <div className="border-t-2 border-foreground">
        <button
          onClick={() => navigate({ to: "/profile" })}
          className="flex w-full items-center gap-3 px-4 py-3 hover:bg-background transition-colors"
        >
          <div className="h-8 w-8 flex-none rounded-sm bg-primary retro-border flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1 text-left">
            <p className="text-sm font-bold truncate">Suyank Saraswat</p>
            <p className="text-xs text-muted-foreground truncate">Free trial · 6 days left</p>
          </div>
        </button>
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-2 border-t-2 border-foreground px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
        >
          <LogOut className="h-4 w-4" /> Log out
        </button>
      </div>
    </aside>
  );
}
