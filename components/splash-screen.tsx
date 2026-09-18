"use client"

import { useEffect, useState } from "react"

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 3000)
    const doneTimer = setTimeout(() => onDone(), 3500)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={fading}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/splash-intro.jpeg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 className="animate-fade-up text-balance text-3xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl">
          Welcome to Efaristo Fix Tech Lab
        </h1>
        <div className="mt-6 flex items-center gap-2" aria-label="Loading">
          <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400" />
        </div>
      </div>
    </div>
  )
}
