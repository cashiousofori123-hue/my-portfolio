"use client"

import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--brand)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--brand)" }}
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-24">
        <span
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold"
          style={{ color: "var(--brand)" }}
        >
          <span aria-hidden>⚡</span> Fast, reliable device repairs
        </span>

        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
          Efaristo Fix Tech Lab
        </h1>
        <p className="max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          Expert phone &amp; laptop repair, Windows installation, unlocking, board repair and genuine accessories —
          done right the first time.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#services"
            className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" style={{ color: "var(--brand)" }} /> Accra
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" style={{ color: "var(--brand)" }} /> Assin Fosu
          </span>
        </div>
      </div>
    </section>
  )
}
