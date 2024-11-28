'use client'

import { motion } from 'framer-motion'

export const LoadingSpinner = () => (
  <motion.div
    className="w-6 h-6 border-2 border-light/20 border-t-light rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
)

export const LoadingDots = () => (
  <div className="flex gap-1">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-light rounded-full"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: i * 0.2
        }}
      />
    ))}
  </div>
)

export const LoadingSkeleton = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`bg-light/10 rounded-lg ${className}`}
    animate={{ opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  />
)

export const LoadingCard = () => (
  <div className="bg-slate/10 rounded-lg p-4 space-y-4">
    <LoadingSkeleton className="h-48 w-full" />
    <LoadingSkeleton className="h-6 w-3/4" />
    <LoadingSkeleton className="h-4 w-full" />
    <LoadingSkeleton className="h-4 w-5/6" />
  </div>
) 