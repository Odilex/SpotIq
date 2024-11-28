'use client'

import { useState } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { LoadingSkeleton } from './loading-states'
import { ImageOff } from 'lucide-react'

export const Image = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div 
        className={`bg-slate/10 rounded-lg flex flex-col items-center justify-center gap-2 ${props.className}`}
      >
        <ImageOff className="w-8 h-8 text-light/50" />
        <span className="text-sm text-light/50">Image not found</span>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <LoadingSkeleton 
          className={`absolute inset-0 ${props.className}`} 
        />
      )}
      <NextImage
        {...props}
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAwMTQ7QUE6Rj5KOEc3Sm1RV1pZZmhnOk5wdnBmWFVYZmf/2wBDARUXFx4aHR4eHWZgTkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        placeholder="blur"
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
        className={`${props.className} transition-opacity duration-300
          ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  )
} 