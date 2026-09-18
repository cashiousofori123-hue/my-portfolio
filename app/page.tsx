"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SplashScreen } from "@/components/splash-screen"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { LocationsSection } from "@/components/locations-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { DraculaAssistant } from "@/components/dracula-assistant"

export default function Page() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <ThemeProvider>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}

      <div
        className={`min-h-dvh transition-opacity duration-700 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <SiteHeader />
        <main>
          <Hero />
          <ServicesSection />
          <LocationsSection />
          <ContactSection />
        </main>
        <SiteFooter />
        <DraculaAssistant />
      </div>
    </ThemeProvider>
  )
}
