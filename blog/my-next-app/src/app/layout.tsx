import { DM_Serif_Display } from 'next/font/google';
import type { Metadata } from "next"
import "./globals.css"
import { ClientLayout } from "../components/client-layout"
import { ErrorBoundary } from "@/components/error-boundary"

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: "Lumion | Futuristic Digital Marketing in Rwanda",
  description: "Experience the future of digital marketing with Lumion, Rwanda's premier agency for innovative and cost-effective solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSerif.variable} font-serif bg-[#121212] text-slate-200`}>
        <ErrorBoundary>
          <ClientLayout>{children}</ClientLayout>
        </ErrorBoundary>
      </body>
    </html>
  )
}

