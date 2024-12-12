"use client"

import { ResponsiveNavbar } from "./responsive-navbar"
import { SiteFooter } from "./site-footer"
import { Particles } from "./particles"
import { AnimatePresence } from "framer-motion"

export function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <AnimatePresence mode="wait">
        <div className="relative z-10 flex flex-col min-h-screen">
          <ResponsiveNavbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <SiteFooter />
        </div>
      </AnimatePresence>
    </div>
  )
} 