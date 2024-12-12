import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-sm"
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl">Lumion</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/work" className="hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/reviews" className="hover:text-white transition-colors">
            Reviews
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <Button className="bg-[#FF0066] hover:bg-[#FF0066]/90">
          Talk to us
        </Button>
      </div>
    </motion.header>
  )
}

