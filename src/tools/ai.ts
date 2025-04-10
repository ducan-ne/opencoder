import type { ReactNode } from "react"
import { type Tool, type ToolInvocation } from "ai"

// TODO: annotate message with tool output params, eg file patch, useful for persistent chat messages.

type Streamable = ReactNode | Promise<ReactNode>

export type Renderer<T extends Array<any>> = (...args: T) => AsyncGenerator<Streamable, void, void>

type CoderTool = Omit<Tool, "execute"> & {
  generate?: Renderer<any>
  renderTitle?: (part: ToolInvocation) => ReactNode
  render?: (part: ToolInvocation) => ReactNode
  execute?: Tool["execute"]
}

export function defineTool(params: CoderTool): CoderTool {
  return params
}
