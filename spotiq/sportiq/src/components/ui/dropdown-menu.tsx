'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownMenuProps {
  label: string
  items: DropdownItem[]
  isOpen: boolean
  onToggle: () => void
}

export const DropdownMenu = ({ label, items, isOpen, onToggle }: DropdownMenuProps) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 text-sm text-light/70 hover:text-light"
      >
        <span>{label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-48 rounded-md bg-dark/90 backdrop-blur-md 
              shadow-lg ring-1 ring-light/10"
          >
            <div className="py-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-light/70 hover:text-light 
                    hover:bg-light/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 