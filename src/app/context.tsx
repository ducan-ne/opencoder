import React, { createContext, useContext, useMemo, type ReactNode } from "react"
import assert from "node:assert"
import type { Config } from "@/lib.js"
import type { Tool } from "ai"

type AppContextType = Omit<Config, "mcp"> & {
  mcp: Record<string, Tool>[]
}

const AppContext = createContext<AppContextType>(null!)

export function AppProvider({
  children,
  ...config
}: {
  children: React.ReactNode
} & AppContextType) {
  return <AppContext.Provider value={config}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const ctx = useContext(AppContext)
  assert(ctx, "AppContext not found")
  return ctx
}
