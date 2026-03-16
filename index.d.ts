import type { ReactNode } from "react";

export type WebMcpWidgetPosition =
  | "bottom-right"
  | "bottom-left"
  | "bottom-center"
  | "top-right"
  | "top-left";

export type WebMcpWidgetSize = "sm" | "md" | "lg";

export interface GeminiWebMcpAgentProviderProps {
  apiKey?: string;
  model?: string;
  systemPrompt?: string;
  initialMessages?: Array<{
    id?: string;
    role: "user" | "assistant";
    text: string;
  }>;
  children: ReactNode;
}

export interface GeminiWebMcpChatProps {
  className?: string;
  title?: string;
  placeholder?: string;
  emptyState?: string;
  sendLabel?: string;
  clearLabel?: string;
  showClearButton?: boolean;
  onMinimize?: () => void;
  minimizeLabel?: string;
  showMinimizeButton?: boolean;
}

export interface WebMcpChatWidgetProps extends GeminiWebMcpChatProps {
  apiKey?: string;
  model?: string;
  systemPrompt?: string;
  className?: string;
  panelClassName?: string;
  chatClassName?: string;
  launcherClassName?: string;
  launcherIcon?: ReactNode;
  launcherLabel?: string;
  closeLauncherLabel?: string;
  minimizeLabel?: string;
  showMinimizeButton?: boolean;
  showLauncher?: boolean;
  defaultOpen?: boolean;
  position?: WebMcpWidgetPosition;
  size?: WebMcpWidgetSize;
}

export interface GeminiWebMcpAgentContextValue {
  messages: Array<{ id: string; role: "user" | "assistant"; text: string }>;
  isThinking: boolean;
  error: string | null;
  sendMessage: (text: string) => Promise<void>;
  clearMessages: () => void;
  model: string;
  systemPrompt: string;
}

export const DEFAULT_SYSTEM_PROMPT: string;

export function GeminiWebMcpAgentProvider(
  props: GeminiWebMcpAgentProviderProps,
): ReactNode;

export function useGeminiWebMcpAgent(): GeminiWebMcpAgentContextValue;

export function GeminiWebMcpChat(props: GeminiWebMcpChatProps): ReactNode;

export function WebMcpChatWidget(props: WebMcpChatWidgetProps): ReactNode;

export default WebMcpChatWidget;
