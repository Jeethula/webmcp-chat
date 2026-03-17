# webmcp-chat

Open-source React chat assistant for WebMCP apps.

If your React app already has WebMCP tools, this package gives you a ready-to-use chat assistant UI so you can ship faster. Add one component and get a modern launcher, panel, minimize behavior, and Gemini-based tool calling.

## Why webmcp-chat

- Built for WebMCP React apps
- Drop-in widget with production-ready default UI
- Floating chat icon launcher with open/close and minimize
- Tool-calling assistant powered by Google GenAI (Gemini)
- TypeScript declarations included
- Fully customizable layout, labels, icon, size, and position
- MIT licensed open-source project

## Install

```bash
npm i webmcp-chat @google/genai @mcp-b/react-webmcp @modelcontextprotocol/sdk @mcp-b/transports zod zod-to-json-schema
```

If your browser does not provide `navigator.modelContext`, install the polyfill:

```bash
npm i @mcp-b/global
```

## Mandatory Setup: McpClientProvider

`WebMcpChatWidget` requires a WebMCP client context. Wrap your app root with `McpClientProvider`.

```jsx
import '@mcp-b/global'
import { createRoot } from 'react-dom/client'
import { McpClientProvider } from '@mcp-b/react-webmcp'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { TabClientTransport } from '@mcp-b/transports'
import App from './App.jsx'

const client = new Client({ name: 'MyApp', version: '1.0.0' })
const transport = new TabClientTransport({ targetOrigin: window.location.origin })

createRoot(document.getElementById('root')).render(
  <McpClientProvider client={client} transport={transport}>
    <App />
  </McpClientProvider>,
)
```

## Quick Start

```jsx
import { WebMcpChatWidget } from 'webmcp-chat'

// Optional: import packaged styles manually if your app requires explicit CSS imports.
import 'webmcp-chat/styles.css'

export default function App() {
  return (
    <>
      {/* Your app UI */}

      <WebMcpChatWidget
        apiKey={import.meta.env.VITE_GEMINI_API_KEY}
        title="Chat Assistant"
      />
    </>
  )
}
```

## What You Need In Your App

- A React app that already exposes WebMCP tools
- A `McpClientProvider` already initialized in your app shell
- Gemini API key for current model support
- Required packages for tool calling: `@mcp-b/react-webmcp`, `@modelcontextprotocol/sdk`, `@mcp-b/transports`
- Some WebMCP tool stacks also require: `zod`, `zod-to-json-schema`

## Default UX

By default, `WebMcpChatWidget` provides:

- Floating assistant launcher icon
- Click launcher to open/close panel
- Header minimize button
- Styled chat panel with status, messages, and composer
- Smart mobile behavior and responsive sizing

By default, styles are auto-injected by the widget.

You can also import styles explicitly with `import 'webmcp-chat/styles.css'`.

## Props

### Runtime

- `apiKey?: string`
- `model?: string` (default: `gemini-2.5-flash`)
- `systemPrompt?: string`

### Widget Behavior

- `defaultOpen?: boolean`
- `showLauncher?: boolean`
- `showMinimizeButton?: boolean`

### Placement and Size

- `position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'`
- `size?: 'sm' | 'md' | 'lg'`

### Launcher Customization

- `launcherIcon?: ReactNode`
- `launcherLabel?: string`
- `closeLauncherLabel?: string`
- `launcherClassName?: string`

### Chat Content and Labels

- `title?: string`
- `placeholder?: string`
- `emptyState?: string`
- `sendLabel?: string`
- `clearLabel?: string`
- `minimizeLabel?: string`
- `showClearButton?: boolean`

### Styling Hooks

- `className?: string`
- `panelClassName?: string`
- `chatClassName?: string`

## Customization Example

```jsx
import { WebMcpChatWidget } from 'webmcp-chat'

function MyChatIcon() {
  return <span style={{ fontSize: 18 }}>AI</span>
}

export default function App() {
  return (
    <WebMcpChatWidget
      apiKey={import.meta.env.VITE_GEMINI_API_KEY}
      title="Product Assistant"
      position="bottom-left"
      size="lg"
      launcherIcon={<MyChatIcon />}
      launcherLabel="Open product assistant"
      closeLauncherLabel="Close product assistant"
      minimizeLabel="Minimize product assistant"
    />
  )
}
```

## Model Support

Current:

- Gemini (Google GenAI)

Planned roadmap:

- GPT
- Claude
- Groq
- Additional providers through a provider-agnostic adapter layer

## Open Source

`webmcp-chat` is an open-source project under MIT license.

Contributions are welcome for:

- New model providers
- Better theming presets
- Accessibility enhancements
- Extended test coverage
- Docs/examples

See contribution guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md).

Owner details are in [OWNER.md](./OWNER.md).

License details are in [LICENSE](./LICENSE).

Community rules are in [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

Security reporting policy is in [SECURITY.md](./SECURITY.md).

## Local Development

```bash
npm run dev
npm run test
npm run build
```

## Publish

```bash
npm publish --access public
```
