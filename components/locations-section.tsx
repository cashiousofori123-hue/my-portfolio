"use client"

import { MapPin } from "lucide-react"

const locations = [
  {
    city: "Accra",
    blurb: "Our flagship lab in the heart of Greater Accra for all repairs and installations.",
  },
  {
    city: "Assin Fosu",
    blurb: "Serving the Central Region with the same expert repairs and genuine parts.",
  },
]

export function LocationsSection() {
  return (
    <section id="locations" className="border-y border-border bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Visit Us</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            Two convenient locations across Ghana.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.city} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: "var(--brand)" }}
              >
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{loc.city}, Ghana</h3>
              <p className="mt-2 text-sm text-muted-foreground">{loc.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
