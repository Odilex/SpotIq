"use client"

import React, { useRef, useEffect } from 'react'
import { useMousePosition } from '../hooks/use-mouse-position'

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export function Particles({ 
  className = "", 
  quantity = 30, 
  staticity = 50, 
  ease = 50, 
  refresh = false 
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<any[]>([])
  const mousePosition = useMousePosition()
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)

    return () => {
      window.removeEventListener("resize", initCanvas)
    }
  }, [])

  useEffect(() => {
    onMouseMove()
  }, [mousePosition.x, mousePosition.y])

  useEffect(() => {
    initCanvas()
  }, [refresh])

  const initCanvas = () => {
    resizeCanvas()
    drawParticles()
  }

  const onMouseMove = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const { w, h } = canvasSize.current
      const x = mousePosition.x - rect.left - w / 2
      const y = mousePosition.y - rect.top - h / 2
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
      }
    }
  }

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      context.current.scale(dpr, dpr)
    }
  }

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w)
    const y = Math.floor(Math.random() * canvasSize.current.h)
    const translateX = 0
    const translateY = 0
    const size = Math.floor(Math.random() * 2) + 0.1
    const alpha = 0
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
    const dx = (Math.random() - 0.5) * 0.2
    const dy = (Math.random() - 0.5) * 0.2
    const magnetism = 0.1 + Math.random() * 4
    return { x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism }
  }

  const drawParticles = () => {
    circles.current.length = 0
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams())
    }
  }

  const drawCircle = (circle: any, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle
      context.current.translate(translateX, translateY)
      context.current.beginPath()
      context.current.arc(x, y, size, 0, 2 * Math.PI)
      context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`
      context.current.fill()
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (!update) {
        return
      }

      if (alpha < circle.targetAlpha) {
        circle.alpha += 0.02
      } else {
        circle.alpha -= 0.02
        if (circle.alpha <= 0) {
          circle.alpha = 0
          circle.targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
        }
      }

      circle.x += circle.dx
      circle.y += circle.dy

      if (circle.x < 0 || circle.x > canvasSize.current.w || circle.y < 0 || circle.y > canvasSize.current.h) {
        circle.x = Math.floor(Math.random() * canvasSize.current.w)
        circle.y = Math.floor(Math.random() * canvasSize.current.h)
      }
    }
  }

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
      circles.current.forEach((circle: any) => {
        const distX = mouse.current.x - circle.x
        const distY = mouse.current.y - circle.y
        const distance = Math.sqrt(distX ** 2 + distY ** 2)
        const force = (staticity - distance) / staticity

        if (force > 0) {
          const angle = Math.atan2(distY, distX)
          const cos = Math.cos(angle)
          const sin = Math.sin(angle)
          circle.translateX += force * cos * ease * 0.1
          circle.translateY += force * sin * ease * 0.1
        } else {
          circle.translateX *= 0.98
          circle.translateY *= 0.98
        }

        drawCircle(circle, true)
      })
    }
    window.requestAnimationFrame(animate)
  }

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

