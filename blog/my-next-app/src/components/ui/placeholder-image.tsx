'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
  bgColor?: string
  textColor?: string
  fontSize?: number
  imageProps?: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height'>
}

export function PlaceholderImage({
  width,
  height,
  text,
  className,
  bgColor = '#333',
  textColor = '#666',
  fontSize = 24,
  imageProps = {}
}: PlaceholderImageProps) {
  const svgContent = `
    <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
      <rect width='100%' height='100%' fill='${bgColor}'/>
      ${text ? `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='${fontSize}' fill='${textColor}'>${text}</text>` : ''}
    </svg>
  `

  const dataUrl = `data:image/svg+xml,${encodeURIComponent(svgContent.trim())}`

  return (
    <Image
      src={dataUrl}
      alt={text || 'Placeholder image'}
      width={width}
      height={height}
      className={cn('bg-slate-200', className)}
      {...imageProps}
    />
  )
} 