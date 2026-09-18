"use client"

import { useState } from "react"
import { Moon, Sun, X } from "lucide-react"
import { themes } from "@/lib/services"
import { useTheme } from "@/components/theme-provider"

export function SiteHeader() {
  const { brand, mode, setBrand, toggleMode } = useTheme()
  const [panelOpen, setPanelOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg text-lg font-black text-white"
            style={{ backgroundColor: "var(--brand)" }}
          >
            E
          </span>
          <span className="text-sm font-bold leading-tight sm:text-base">
            Efaristo Fix<span className="hidden sm:inline"> Tech Lab</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#locations" className="transition-colors hover:text-foreground">
            Locations
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>

        <div className="relative flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMode}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
          >
            {mode === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setPanelOpen((v) => !v)}
            aria-expanded={panelOpen}
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--brand)" }}
          >
            <span aria-hidden>🎨</span> Themes
          </button>

          {panelOpen && (
            <div className="absolute right-0 top-12 w-64 rounded-2xl border border-border bg-card p-4 shadow-xl">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-bold">Choose a theme</h2>
                <button
                  type="button"
                  onClick={() => setPanelOpen(false)}
                  aria-label="Close theme panel"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setBrand(t.color)}
                    className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-xs font-medium transition-colors hover:bg-muted ${
                      brand === t.color ? "border-current" : "border-border"
                    }`}
                    style={brand === t.color ? { color: t.color } : undefined}
                  >
                    <span className="h-4 w-4 shrink-0 rounded-full" style={{ backgroundColor: t.color }} />
                    <span className="truncate text-foreground">{t.name}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={toggleMode}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2 text-xs font-semibold transition-colors hover:bg-muted"
              >
                {mode === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {mode === "light" ? "Switch to Dark" : "Switch to Light"}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
