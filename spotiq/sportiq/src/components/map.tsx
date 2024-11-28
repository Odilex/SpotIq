'use client'

import { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { LoadingSpinner } from '@/components/ui/loading-states'
import { AlertCircle } from 'lucide-react'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

interface MapProps {
  destinations: Array<{
    id: number
    name: string
    description: string
    coordinates?: [number, number]
  }>
}

export default function Map({ destinations }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // Check if WebGL is supported
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

    if (!gl) {
      setError('WebGL is not supported in your browser')
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [29.8739, -1.9403],
        zoom: 8
      })

      map.current.on('load', () => {
        setIsLoading(false)
        destinations.forEach(destination => {
          if (destination.coordinates) {
            new mapboxgl.Marker()
              .setLngLat(destination.coordinates)
              .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                  .setHTML(
                    `<h3 class="font-bold">${destination.name}</h3>
                    <p>${destination.description}</p>`
                  )
              )
              .addTo(map.current!)
          }
        })
      })

      map.current.on('error', () => {
        setError('Failed to load the map')
        setIsLoading(false)
      })
    } catch (err) {
      setError('Failed to initialize the map')
      setIsLoading(false)
    }

    return () => map.current?.remove()
  }, [destinations])

  if (error) {
    return (
      <div className="relative w-full h-[600px] rounded-lg overflow-hidden bg-slate/10">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-light/70 gap-4">
          <AlertCircle className="w-12 h-12" />
          <p>{error}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {destinations.map(destination => (
              <div key={destination.id} className="bg-dark/50 p-4 rounded-lg">
                <h3 className="font-bold text-light">{destination.name}</h3>
                <p className="text-light/70">{destination.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      {isLoading && (
        <div className="absolute inset-0 bg-dark/80 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  )
} 