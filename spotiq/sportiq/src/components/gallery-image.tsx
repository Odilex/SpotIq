'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LoadingSkeleton } from './ui/loading-states'

interface GalleryImageProps {
  src: string
  alt: string
  title: string
  category: string
}

export const GalleryImage = ({ src, alt, title, category }: GalleryImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 1 }}
      className="relative aspect-square"
    >
      {isLoading && (
        <LoadingSkeleton className="absolute inset-0 rounded-lg" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`rounded-lg object-cover transition-opacity duration-300 
          ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-dark/60 rounded-lg flex items-center justify-center"
      >
        <div className="text-center">
          <h3 className="text-light font-bold">{title}</h3>
          <p className="text-light/70">{category}</p>
        </div>
      </motion.div>
    </motion.div>
  )
} 