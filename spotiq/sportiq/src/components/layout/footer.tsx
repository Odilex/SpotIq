'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const socialVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 }
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-dark/90 text-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h3 
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              SportIQ
            </motion.h3>
            <p className="text-light/70">
              Your gateway to Rwandan adventures and experiences
            </p>
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
            >
              {[Facebook, Twitter, Instagram, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-slate transition-colors"
                  variants={socialVariants}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Destinations', 'Activities', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-slate">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['FAQ', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-slate">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <motion.address 
              className="not-italic space-y-2 text-light/70"
              variants={containerVariants}
            >
              <motion.p variants={itemVariants}>Kigali, Rwanda</motion.p>
              <motion.p variants={itemVariants}>Phone: +250 123 456 789</motion.p>
              <motion.p variants={itemVariants}>Email: info@sportiq.rw</motion.p>
            </motion.address>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-light/10 text-center text-light/70"
        >
          <p>&copy; {new Date().getFullYear()} SportIQ. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer