import React, { useEffect, useRef } from 'react';

interface ConfettiCanvasProps {
  durationMs?: number;
  onComplete?: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  wobble: number;
  wobbleSpeed: number;
  shape: 'rect' | 'circle' | 'ribbon';
  opacity: number;
}

const LUXURY_PALETTE = [
  '#f59e0b', // Royal Amber Gold
  '#eab308', // Pure Gold
  '#fde047', // Light Gold
  '#dc2626', // Deep Crimson Red
  '#ef4444', // Bright Crimson
  '#991b1b', // Wine Velvet
  '#fffbeb', // Warm Ivory
  '#fef3c7', // Cream Ivory
];

export const ConfettiCanvas: React.FC<ConfettiCanvasProps> = ({
  durationMs = 4500,
  onComplete,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;
    const startTime = performance.now();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate ~120 particles for optimal performance on mobile and desktop
    const count = window.innerWidth < 640 ? 70 : 130;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const spreadX = canvas.width / 2 + (Math.random() - 0.5) * (canvas.width * 0.7);
      particles.push({
        x: spreadX,
        y: canvas.height * 0.4 + (Math.random() - 0.5) * 120,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 8 + 5,
        color: LUXURY_PALETTE[Math.floor(Math.random() * LUXURY_PALETTE.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.random() * 0.1 + 0.05,
        shape: Math.random() > 0.4 ? 'rect' : Math.random() > 0.5 ? 'circle' : 'ribbon',
        opacity: 1,
      });
    }

    const render = (time: number) => {
      if (!isRunning) return;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let aliveCount = 0;

      for (const p of particles) {
        // Physics update
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.28; // Gravity
        p.vx *= 0.985; // Air resistance
        p.rotation += p.rotationSpeed;
        p.wobble += p.wobbleSpeed;

        // Fade out toward the end of duration
        if (progress > 0.65) {
          p.opacity = Math.max(0, 1 - (progress - 0.65) / 0.35);
        }

        if (p.opacity > 0 && p.y < canvas.height + 40) {
          aliveCount++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;

          if (p.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shape === 'ribbon') {
            ctx.fillRect(-p.size * 1.5, -p.size * 0.3, p.size * 3, p.size * 0.6);
          } else {
            const scaleX = Math.cos(p.wobble);
            ctx.scale(scaleX, 1);
            ctx.fillRect(-p.size * 0.5, -p.size * 0.5, p.size, p.size * 1.2);
          }

          ctx.restore();
        }
      }

      if (progress < 1 && aliveCount > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRunning = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (onComplete) onComplete();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [durationMs, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      aria-hidden="true"
    />
  );
};
