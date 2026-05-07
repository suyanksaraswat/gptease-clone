export type ResponseMode = "single" | "double";
export type ResponseTone = "direct" | "creative";

export interface SingleMsg {
  id: string;
  role: "user" | "assistant";
  content: string;
  tone?: ResponseTone;
}

export interface DoubleMsg {
  id: string;
  role: "double";
  direct: string;
  creative: string;
}

export type ChatMsg = SingleMsg | DoubleMsg;

export interface Conversation {
  id: string;
  title: string;
  messages: ChatMsg[];
}
