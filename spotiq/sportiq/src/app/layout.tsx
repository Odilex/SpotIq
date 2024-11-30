'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import localFont from "next/font/local"
import "./globals.css"
import { ToastProvider } from '@/contexts/toast-context'
import { AuthProvider } from '@/contexts/auth-context'

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
              
              <main className="flex-grow">
                {children}
              </main>

              {!isAuthPage && <Footer />}
            </div>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
