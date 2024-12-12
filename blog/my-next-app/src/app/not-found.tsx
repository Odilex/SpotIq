"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function NotFound() {
  return (
    <div className="pt-20">
      <section className="container py-20 text-center">
        <motion.h1 
          className="font-serif text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          {...fadeIn}
        >
          404 - Page Not Found
        </motion.h1>
        <motion.p 
          className="text-lg text-slate-400 mb-8"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >
          <Link href="/">
            <Button className="bg-[#FF0066] hover:bg-[#FF0066]/90">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
} 