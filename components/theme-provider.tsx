"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { themes } from "@/lib/services"

type Mode = "light" | "dark"

type ThemeContextValue = {
  brand: string
  mode: Mode
  setBrand: (color: string) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const DEFAULT_BRAND: string = themes[0].color

function applyBrand(color: string) {
  const root = document.documentElement
  root.style.setProperty("--primary", color)
  root.style.setProperty("--primary-foreground", "#ffffff")
  root.style.setProperty("--ring", color)
  root.style.setProperty("--brand", color)
}

function applyMode(mode: Mode) {
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(mode)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrandState] = useState(DEFAULT_BRAND)
  const [mode, setMode] = useState<Mode>("light")

  useEffect(() => {
    const savedBrand = localStorage.getItem("efaristo-brand")
    const savedMode = (localStorage.getItem("efaristo-mode") as Mode | null) ?? "light"
    const initialBrand = savedBrand ?? DEFAULT_BRAND
    setBrandState(initialBrand)
    setMode(savedMode)
    applyBrand(initialBrand)
    applyMode(savedMode)
  }, [])

  const setBrand = useCallback((color: string) => {
    setBrandState(color)
    applyBrand(color)
    localStorage.setItem("efaristo-brand", color)
  }, [])

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next: Mode = prev === "light" ? "dark" : "light"
      applyMode(next)
      localStorage.setItem("efaristo-mode", next)
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ brand, mode, setBrand, toggleMode }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
