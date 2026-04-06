"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  shape: "circle" | "star" | "diamond";
}

const SparkleExplosion: React.FC<{ trigger: boolean }> = ({ trigger }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createParticles = (count: number): Particle[] => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const particles: Particle[] = [];

      const shapes: ("circle" | "star" | "diamond")[] = ["circle", "star", "diamond"];
      const hues = [45, 50, 55, 60]; // Gold variations

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 8;
        
        particles.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3, // slight upward bias
          size: 2 + Math.random() * 4,
          opacity: 1,
          hue: hues[Math.floor(Math.random() * hues.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)]
        });
      }
      return particles;
    };

    particlesRef.current = createParticles(60);

    const drawStar = (x: number, y: number, size: number, hue: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const outerX = Math.cos(angle) * size;
        const outerY = Math.sin(angle) * size;
        const innerAngle = angle + Math.PI / 5;
        const innerX = Math.cos(innerAngle) * (size * 0.4);
        const innerY = Math.sin(innerAngle) * (size * 0.4);
        
        if (i === 0) {
          ctx.moveTo(outerX, outerY);
        } else {
          ctx.lineTo(outerX, outerY);
        }
        ctx.lineTo(innerX, innerY);
      }
      ctx.closePath();
      ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let activeParticles = 0;

      particlesRef.current.forEach((particle) => {
        if (particle.opacity <= 0) return;
        activeParticles++;

        // Physics
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.08; // gravity
        particle.vx *= 0.98; // friction
        particle.opacity -= 0.008;

        // Draw
        ctx.globalAlpha = particle.opacity;
        
        if (particle.shape === "star") {
          drawStar(particle.x, particle.y, particle.size, particle.hue);
        } else if (particle.shape === "diamond") {
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate(Math.PI / 4);
          ctx.fillStyle = `hsl(${particle.hue}, 100%, 75%)`;
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          ctx.restore();
        } else {
          // Circle with glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2
          );
          gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 80%, ${particle.opacity})`);
          gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;

      if (activeParticles > 0) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [trigger]);

  if (!trigger) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ background: "transparent" }}
    />
  );
};

export default SparkleExplosion;