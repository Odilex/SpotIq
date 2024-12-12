'use client'

import { useState } from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { LoadingSpinner } from './loading-states'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageProps extends Omit<NextImageProps, 'onError' | 'onLoad'> {
  fallback?: React.ReactNode
}

export function Image({ className, fallback, alt, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  if (error) {
    return fallback || (
      <div className={cn(
        "flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg",
        className
      )}>
        <ImageOff className="w-6 h-6 text-slate-400" />
      </div>
    )
  }

  return (
    <div className="relative">
      <NextImage
        className={cn(
          isLoading && "animate-pulse bg-slate-200 dark:bg-slate-800",
          className
        )}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner className="w-6 h-6 text-slate-400" />
        </div>
      )}
    </div>
  )
} 