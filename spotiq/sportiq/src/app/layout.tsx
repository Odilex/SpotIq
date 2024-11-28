'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import localFont from "next/font/local"
import "./globals.css"
import { ToastProvider } from '@/contexts/toast-context'
import { Metadata } from 'next'
import { AuthProvider } from '@/providers/auth-provider'

const geistSans = localFont({
  src: [
    {
      path: './fonts/GeistVF.woff',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist-sans',
})

const geistMono = localFont({
  src: [
    {
      path: './fonts/GeistMonoVF.woff',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist-mono',
})

const metadata: Metadata = {
  title: "SportIQ - Rwanda Travel & Booking Platform",
  description: "Your gateway to Rwandan adventures and experiences",
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAuthPage = pathname.includes('/auth')

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-dark to-slate">
              {!isAuthPage && (
                <motion.header
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Navbar />
                </motion.header>
              )}
              
              <AnimatePresence mode="wait">
                <motion.main
                  key={pathname}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="flex-grow"
                >
                  {children}
                </motion.main>
              </AnimatePresence>

              {!isAuthPage && (
                <motion.footer
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Footer />
                </motion.footer>
              )}
            </div>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  )
}