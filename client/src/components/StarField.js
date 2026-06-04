import { useEffect, useRef } from 'react'

const StarField = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const STAR_COUNT = 250
    const SHOOT_EVERY = 3200

    let W, H, stars = [], shooters = []
    let mouse = { x: 10, y: -10 }
    let lastShoot = 0
    let animId

    const rand = (a, b) => a + Math.random() * (b - a)

    function resize() {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * devicePixelRatio
      canvas.height = H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      initStars()
    }

    function initStars() {
      stars = []
      for (let i = 0; i < STAR_COUNT; i++) {
        const size = Math.random() < 0.10 ? rand(1.8, 3.0)
                   : Math.random() < 0.30 ? rand(1.0, 1.8)
                   : rand(0.3, 1.0)
        stars.push({
          x: rand(0, W), y: rand(0, H),
          size,
          baseAlpha: rand(0.15, size > 1.5 ? 0.9 : 0.6),
          alpha: 0,
          twinkleSpeed: rand(0.009, 0.02),
          twinkleOff: rand(0, Math.PI * 2),
          vx: rand(-0.035, 0.035),
          vy: rand(-0.035, 0.035),
          is4pt: size > 1.5,
          color: Math.random() < 0.15 ? 'rgba(200,169,110,'
               : Math.random() < 0.10 ? 'rgba(220,210,200,'
               : 'rgba(241,218,191,',
        })
      }
    }

    function draw4pt(x, y, r, alpha, color) {
      ctx.save()
      ctx.translate(x, y)
      ctx.globalAlpha = alpha
      ctx.fillStyle = color + alpha + ')'
      const outer = r, inner = r * 0.22
      ctx.beginPath()
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI / 4) - Math.PI / 2
        const dist = i % 2 === 0 ? outer : inner
        i === 0
          ? ctx.moveTo(Math.cos(angle) * dist, Math.sin(angle) * dist)
          : ctx.lineTo(Math.cos(angle) * dist, Math.sin(angle) * dist)
      }
      ctx.closePath()
      ctx.fill()
      if (r > 1.8) {
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 4)
        g.addColorStop(0, color + (alpha * 0.3) + ')')
        g.addColorStop(1, color + '0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(0, 0, r * 4, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    function spawnShooter() {
      const angle = rand(-0.4, -0.15)
      const speed = rand(300, 550)
      shooters.push({
        x: rand(W * 0.2, W), y: rand(0, H * 0.45),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1, decay: rand(0.5, 0.85),
        len: rand(80, 180), alpha: rand(0.55, 0.9),
      })
    }

    let prev = performance.now()

    function frame(now) {
      const dt = Math.min((now - prev) / 1000, 0.05)
      prev = now
      ctx.clearRect(0, 0, W, H)

      const px = (mouse.x / W - 0.5) * 7
      const py = (mouse.y / H - 0.5) * 7

      stars.forEach(s => {
        s.x += s.vx; s.y += s.vy
        if (s.x < -4) s.x = W + 4
        if (s.x > W + 4) s.x = -4
        if (s.y < -4) s.y = H + 4
        if (s.y > H + 4) s.y = -4
        s.twinkleOff += s.twinkleSpeed
        s.alpha = s.baseAlpha * (0.45 + 0.55 * Math.sin(s.twinkleOff))
        const sx = s.x - px * (s.size / 2.5)
        const sy = s.y - py * (s.size / 2.5)
        if (s.is4pt) {
          draw4pt(sx, sy, s.size, s.alpha, s.color)
        } else {
          ctx.globalAlpha = s.alpha
          ctx.fillStyle = s.color + s.alpha + ')'
          ctx.beginPath()
          ctx.arc(sx, sy, s.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      if (now - lastShoot > SHOOT_EVERY) { spawnShooter(); lastShoot = now }
      shooters = shooters.filter(s => s.life > 0.02)
      shooters.forEach(s => {
        s.x += s.vx * dt; s.y += s.vy * dt; s.life -= s.decay * dt
        const spd = Math.hypot(s.vx, s.vy)
        const tx = s.x - (s.vx / spd) * s.len
        const ty = s.y - (s.vy / spd) * s.len
        const g = ctx.createLinearGradient(tx, ty, s.x, s.y)
        g.addColorStop(0, 'rgba(241,218,191,0)')
        g.addColorStop(1, `rgba(241,218,191,${s.alpha * s.life})`)
        ctx.globalAlpha = 1
        ctx.strokeStyle = g
        ctx.lineWidth = 1.2
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(s.x, s.y); ctx.stroke()
        ctx.globalAlpha = s.alpha * s.life
        ctx.fillStyle = 'rgba(241,218,191,1)'
        ctx.beginPath(); ctx.arc(s.x, s.y, 1.6, 0, Math.PI * 2); ctx.fill()
      })

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(frame)
    }

    const handleResize = () => resize()
    const handleMouse = e => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }

    window.addEventListener('resize', handleResize)
    canvas.parentElement?.addEventListener('mousemove', handleMouse)

    resize()
    animId = requestAnimationFrame(frame)

    // cleanup
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      canvas.parentElement?.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="star-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    />
  )
}

export default StarField