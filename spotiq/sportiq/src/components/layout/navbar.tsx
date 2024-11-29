'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { DropdownMenu } from '@/components/ui/dropdown-menu'

const navLinks = [
  { 
    label: 'Home',
    href: '/' 
  },
  {
    label: 'Transportation',
    items: [
      { label: 'Car Rental', href: '/transport/car-rental' },
      { label: 'Airport Transfers', href: '/transport/airport' },
      { label: 'Tour Vehicles', href: '/transport/tours' }
    ]
  },
  {
    label: 'Stay',
    items: [
      { label: 'Hotels', href: '/accommodation/hotels' },
      { label: 'Resorts', href: '/accommodation/resorts' },
      { label: 'Lodges', href: '/accommodation/lodges' },
      { label: 'Airbnb', href: '/accommodation/airbnb' },
      { divider: true },
      { label: 'Book Hotels', href: '/booking/hotels' },
      { label: 'Book Airbnb', href: '/booking/airbnb' },
      { label: 'Book Flights', href: '/booking/flights' }
    ]
  },
  {
    label: 'Dining',
    items: [
      { label: 'Restaurants', href: '/dining/restaurants' },
      { label: 'Cafes', href: '/dining/cafes' },
      { label: 'Local Cuisine', href: '/dining/local-cuisine' }
    ]
  },
  {
    label: 'Shopping',
    items: [
      { label: 'Cultural Products', href: '/shopping/cultural' },
      { label: 'Artisan Crafts', href: '/shopping/crafts' },
      { label: 'Souvenirs', href: '/shopping/souvenirs' }
    ]
  },
  {
    label: 'Events',
    items: [
      { label: 'Cultural Events', href: '/events/cultural' },
      { label: 'Parties', href: '/events/parties' },
      { label: 'Festivals', href: '/events/festivals' }
    ]
  },
  {
    label: 'Services',
    items: [
      { label: 'Currency Exchange', href: '/currency-exchange' },
      { label: 'Interactive Map', href: '/map' },
      { label: 'Travel Insurance', href: '/services/insurance' },
      { label: 'Airport Services', href: '/services/airport' }
    ]
  },
  { 
    label: 'Blog',
    href: '/blog' 
  },
  { 
    label: 'Contact',
    href: '/contact' 
  }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-light">SportIQ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              'items' in link ? (
                <DropdownMenu
                  key={link.label}
                  label={link.label}
                  items={link.items}
                  isOpen={openDropdown === link.label}
                  onToggle={() => handleDropdownToggle(link.label)}
                />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm ${
                    pathname === link.href
                      ? 'text-light font-medium'
                      : 'text-light/70 hover:text-light'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="text-light/70 hover:text-light">
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-light/70 hover:text-light"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="ghost" size="sm">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button size="sm">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light hover:text-light/70"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/90 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                'items' in link ? (
                  <div key={link.label} className="space-y-1">
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className="w-full flex items-center justify-between px-3 py-2 
                        rounded-md text-base text-light/70 hover:text-light hover:bg-slate/10"
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transform transition-transform 
                          ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4"
                        >
                          {link.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-sm text-light/70 
                                hover:text-light hover:bg-slate/10"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base ${
                      pathname === link.href
                        ? 'text-light font-medium bg-slate/10'
                        : 'text-light/70 hover:text-light hover:bg-slate/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}

              {/* Mobile Auth Buttons */}
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 rounded-md text-base text-light/70 hover:text-light hover:bg-slate/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base text-light/70 hover:text-light hover:bg-slate/10"
                  >
                    <LogOut className="w-4 h-4 inline mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="block px-3 py-2 rounded-md text-base text-light/70 hover:text-light hover:bg-slate/10"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block px-3 py-2 rounded-md text-base text-light/70 hover:text-light hover:bg-slate/10"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}