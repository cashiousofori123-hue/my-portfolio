"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import type { Service } from "@/lib/services"

export function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
      onClick={onClose}
    >
      <div
        className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-border bg-card/95 px-5 py-4 backdrop-blur">
          <div>
            <h2 className="text-lg font-bold sm:text-xl">{service.title}</h2>
            <span
              className="mt-1 inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ backgroundColor: "var(--brand)" }}
            >
              {service.price}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3">
          {service.images.map((src, i) => (
            <figure
              key={src}
              className="group relative overflow-hidden rounded-xl border border-border bg-muted"
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`${service.title} example ${i + 1}`}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption
                className="absolute bottom-2 left-2 rounded-md px-2 py-0.5 text-[11px] font-bold text-white shadow"
                style={{ backgroundColor: "var(--brand)" }}
              >
                {service.price}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
