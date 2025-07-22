"use client"

import { useEffect, useRef } from "react"

interface Circle {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
  opacity: number
  char: string
  color: string
}

export function TerminalEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const circlesRef = useRef<Circle[]>([])
  const animationRef = useRef<number | null>(null)

  const terminalChars = ["$", ">", "#", "~", "|", "-", "_", "*", "+", "=", "/", "\\", "[", "]", "{", "}"]
  const terminalColors = ["#00ff00", "#00cc00", "#009900", "#00ff41", "#39ff14", "#32cd32"]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createCircle = (): Circle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      char: terminalChars[Math.floor(Math.random() * terminalChars.length)],
      color: terminalColors[Math.floor(Math.random() * terminalColors.length)],
    })

    const initCircles = () => {
      circlesRef.current = []
      for (let i = 0; i < 50; i++) {
        circlesRef.current.push(createCircle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      circlesRef.current.forEach((circle) => {
        // Update position
        circle.x += circle.dx
        circle.y += circle.dy

        // Bounce off walls
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.dx = -circle.dx
        }
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.dy = -circle.dy
        }

        // Draw circle with terminal character
        ctx.save()
        ctx.globalAlpha = circle.opacity
        ctx.fillStyle = circle.color
        ctx.font = `${circle.radius * 8}px 'Courier New', monospace`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(circle.char, circle.x, circle.y)
        ctx.restore()

        // Draw connecting lines between nearby circles
        circlesRef.current.forEach((otherCircle) => {
          const distance = Math.sqrt(Math.pow(circle.x - otherCircle.x, 2) + Math.pow(circle.y - otherCircle.y, 2))

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1
            ctx.strokeStyle = circle.color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(circle.x, circle.y)
            ctx.lineTo(otherCircle.x, otherCircle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initCircles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      initCircles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
