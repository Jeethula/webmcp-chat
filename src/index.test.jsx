import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { WebMcpChatWidget } from './index.jsx'

const { generateContentMock } = vi.hoisted(() => ({
  generateContentMock: vi.fn(),
}))

vi.mock('@mcp-b/react-webmcp', () => ({
  useMcpClient: () => ({ client: { id: 'test-client' } }),
}))

vi.mock('@google/genai', () => ({
  GoogleGenAI: vi.fn().mockImplementation(() => ({
    models: {
      generateContent: generateContentMock,
    },
  })),
  mcpToTool: vi.fn(() => ({ name: 'mock-mcp-tool' })),
}))

describe('WebMcpChatWidget', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    generateContentMock.mockReset()
    generateContentMock.mockResolvedValue({ text: 'Tool action completed.' })
  })

  it('renders launcher and toggles panel', () => {
    render(<WebMcpChatWidget apiKey="demo-key" title="Agent" />)

    const launcher = screen.getByRole('button', { name: /open assistant/i })
    expect(launcher).toBeInTheDocument()

    fireEvent.click(launcher)
    expect(screen.getByText('Agent')).toBeInTheDocument()
  })

  it('sends a message and displays model response', async () => {
    render(
      <WebMcpChatWidget
        apiKey="demo-key"
        defaultOpen
        showLauncher={false}
        title="Agent"
      />,
    )

    const input = screen.getByPlaceholderText(
      /ask the assistant to read or update app state/i,
    )
    fireEvent.change(input, { target: { value: 'List my todos' } })
    fireEvent.click(screen.getByRole('button', { name: /^send$/i }))

    await waitFor(() => {
      expect(generateContentMock).toHaveBeenCalledTimes(1)
    })

    expect(screen.getByText('Tool action completed.')).toBeInTheDocument()
  })

  it('shows missing API key error when sending', async () => {
    render(<WebMcpChatWidget defaultOpen showLauncher={false} />)

    const input = screen.getByPlaceholderText(
      /ask the assistant to read or update app state/i,
    )
    fireEvent.change(input, { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: /^send$/i }))

    await waitFor(() => {
      expect(
        screen.getByText(/missing apikey. pass your gemini api key/i),
      ).toBeInTheDocument()
    })
  })
})
