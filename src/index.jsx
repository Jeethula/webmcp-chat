import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { GoogleGenAI, mcpToTool } from '@google/genai'
import { useMcpClient } from '@mcp-b/react-webmcp'
import widgetStyles from './styles.css?inline'

const AgentContext = createContext(null)

const STYLE_TAG_ID = 'webmcp-chat-default-styles'

function ensureWidgetStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_TAG_ID)) return

  const styleTag = document.createElement('style')
  styleTag.id = STYLE_TAG_ID
  styleTag.textContent = widgetStyles
  document.head.appendChild(styleTag)
}

ensureWidgetStyles()

export const DEFAULT_SYSTEM_PROMPT =
  'You are an assistant running inside a web app with WebMCP tools. ' +
  'When the user asks to inspect or modify app state, use available tools whenever possible. ' +
  'Never claim an action succeeded unless the tool call actually succeeded.'

function createMessage(role, text) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  }
}

function DefaultLauncherIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="webmcp-launcher-icon"
    >
      <path
        d="M4 8.5C4 6.01 6.01 4 8.5 4h7C17.99 4 20 6.01 20 8.5v4C20 14.99 17.99 17 15.5 17H9.8L6 20v-3.6C4.84 15.55 4 14.15 4 12.5v-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5h8M8 12.5h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MinimizeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="webmcp-minimize-icon"
    >
      <path d="M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function GeminiWebMcpAgentProvider({
  apiKey,
  model = 'gemini-2.5-flash',
  systemPrompt = DEFAULT_SYSTEM_PROMPT,
  initialMessages = [],
  children,
}) {
  const { client } = useMcpClient()
  const [messages, setMessages] = useState(initialMessages)
  const [isThinking, setIsThinking] = useState(false)
  const [error, setError] = useState(null)

  const ai = useMemo(() => {
    if (!apiKey) return null
    return new GoogleGenAI({ apiKey })
  }, [apiKey])

  const sendMessage = useCallback(
    async (text) => {
      const trimmed = text?.trim()
      if (!trimmed) return

      if (!apiKey) {
        setError('Missing apiKey. Pass your Gemini API key to the widget.')
        return
      }

      if (!ai || !client) {
        setError('Gemini or WebMCP client is not ready yet.')
        return
      }

      setError(null)
      const userMessage = createMessage('user', trimmed)
      const nextHistory = [...messages, userMessage]
      setMessages(nextHistory)
      setIsThinking(true)

      try {
        const transcript = nextHistory
          .map((msg) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
          .join('\n')

        const response = await ai.models.generateContent({
          model,
          contents: `${systemPrompt}\n\n${transcript}`,
          config: {
            tools: [mcpToTool(client)],
          },
        })

        const replyText = (response.text || '').trim() || '(No response)'
        setMessages((prev) => [...prev, createMessage('assistant', replyText)])
      } catch (reason) {
        const message =
          reason instanceof Error
            ? reason.message
            : 'Failed to get a response from Gemini.'
        setError(message)
      } finally {
        setIsThinking(false)
      }
    },
    [ai, apiKey, client, messages, model, systemPrompt],
  )

  const clearMessages = useCallback(() => {
    setMessages([])
    setError(null)
  }, [])

  const value = useMemo(
    () => ({
      messages,
      isThinking,
      error,
      sendMessage,
      clearMessages,
      model,
      systemPrompt,
    }),
    [messages, isThinking, error, sendMessage, clearMessages, model, systemPrompt],
  )

  return <AgentContext.Provider value={value}>{children}</AgentContext.Provider>
}

export function useGeminiWebMcpAgent() {
  const context = useContext(AgentContext)
  if (!context) {
    throw new Error(
      'useGeminiWebMcpAgent must be used inside GeminiWebMcpAgentProvider.',
    )
  }
  return context
}

export function GeminiWebMcpChat({
  className = '',
  title = 'Chat Assistant',
  placeholder = 'Ask the assistant to read or update app state...',
  emptyState = 'No messages yet. Ask me to use your WebMCP tools.',
  sendLabel = 'Send',
  clearLabel = 'Clear',
  showClearButton = true,
  onMinimize,
  minimizeLabel = 'Minimize assistant',
  showMinimizeButton = true,
}) {
  const { messages, isThinking, error, sendMessage, clearMessages } =
    useGeminiWebMcpAgent()
  const [input, setInput] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (!input.trim()) return
    const text = input
    setInput('')
    await sendMessage(text)
  }

  return (
    <section className={`webmcp-card ${className}`.trim()}>
      <header className="webmcp-header">
        <strong>{title}</strong>
        <div className="webmcp-header-actions">
          <span className={isThinking ? 'webmcp-dot pulse' : 'webmcp-dot'} />
          <span>{isThinking ? 'Thinking...' : 'Ready'}</span>
          {showMinimizeButton && onMinimize ? (
            <button
              type="button"
              onClick={onMinimize}
              className="webmcp-minimize"
              aria-label={minimizeLabel}
            >
              <MinimizeIcon />
            </button>
          ) : null}
        </div>
      </header>

      <div className="webmcp-messages">
        {messages.length === 0 && <p className="webmcp-empty">{emptyState}</p>}

        {messages.map((message) => (
          <div key={message.id} className="webmcp-message-row">
            <div
              className={
                message.role === 'user' ? 'webmcp-bubble user' : 'webmcp-bubble bot'
              }
            >
              {message.text}
            </div>
          </div>
        ))}

        {error && <p className="webmcp-error">{error}</p>}
      </div>

      <form onSubmit={handleSubmit} className="webmcp-input-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={placeholder}
          className="webmcp-input"
        />
        <button type="submit" disabled={isThinking} className="webmcp-send">
          {sendLabel}
        </button>
        {showClearButton ? (
          <button type="button" onClick={clearMessages} className="webmcp-clear">
            {clearLabel}
          </button>
        ) : null}
      </form>
    </section>
  )
}

export function WebMcpChatWidget({
  apiKey,
  model,
  systemPrompt,
  className,
  panelClassName,
  chatClassName,
  launcherClassName,
  launcherIcon,
  launcherLabel = 'Open assistant',
  closeLauncherLabel = 'Close assistant',
  minimizeLabel = 'Minimize assistant',
  showMinimizeButton = true,
  showLauncher = true,
  defaultOpen = false,
  position = 'bottom-right',
  size = 'md',
  ...chatProps
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  useEffect(() => {
    setIsOpen(defaultOpen)
  }, [defaultOpen])

  const sizeClass =
    size === 'sm' ? 'webmcp-size-sm' : size === 'lg' ? 'webmcp-size-lg' : 'webmcp-size-md'

  const shellClass = [
    'webmcp-widget-shell',
    `webmcp-${position}`,
    sizeClass,
    className || '',
  ]
    .join(' ')
    .trim()

  const panelClass = [
    'webmcp-panel',
    isOpen || !showLauncher ? 'webmcp-panel-open' : 'webmcp-panel-closed',
    panelClassName || '',
  ]
    .join(' ')
    .trim()

  return (
    <GeminiWebMcpAgentProvider
      apiKey={apiKey}
      model={model}
      systemPrompt={systemPrompt}
    >
      <div className={shellClass}>
        {showLauncher ? (
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`webmcp-launcher ${launcherClassName || ''}`.trim()}
            aria-expanded={isOpen}
            aria-label={isOpen ? closeLauncherLabel : launcherLabel}
          >
            {launcherIcon || <DefaultLauncherIcon />}
          </button>
        ) : null}

        <div className={panelClass}>
          <GeminiWebMcpChat
            className={chatClassName}
            onMinimize={showLauncher ? () => setIsOpen(false) : undefined}
            minimizeLabel={minimizeLabel}
            showMinimizeButton={showMinimizeButton && showLauncher}
            {...chatProps}
          />
        </div>
      </div>
    </GeminiWebMcpAgentProvider>
  )
}

export default WebMcpChatWidget
