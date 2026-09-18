"use client"

import { useState } from "react"
import { services, type Service } from "@/lib/services"
import { ServiceModal } from "@/components/service-modal"

export function ServicesSection() {
  const [active, setActive] = useState<Service | null>(null)

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Services</h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
          Tap any service to see real examples and starting prices.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => setActive(service)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={service.cover || "/placeholder.svg"}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <span
                className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow"
                style={{ backgroundColor: "var(--brand)" }}
              >
                {service.price}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.tagline}</p>
              <span
                className="mt-auto pt-2 text-sm font-semibold"
                style={{ color: "var(--brand)" }}
              >
                View gallery →
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </section>
  )
}
