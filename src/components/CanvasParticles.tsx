import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

const CanvasParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with enhanced visibility
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 12000));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1.5,
          color: ['#00f5ff', '#bf00ff', '#ff0080', '#00ff80', '#ff6b00', '#9d4edd'][Math.floor(Math.random() * 6)],
          opacity: Math.random() * 0.7 + 0.3,
          life: Math.random() * 100,
          maxLife: 100,
        });
      }

      particlesRef.current = particles;
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio;

        // Draw particle with enhanced glow effect
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add inner glow
        ctx.globalAlpha = currentOpacity * 0.5;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw enhanced connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.4;
            const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y);
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, otherParticle.color);
            
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.shadowBlur = 5;
            ctx.shadowColor = particle.color;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const startTimer = setTimeout(() => {
      setIsVisible(true);
      animate();
    }, 500);

    return () => {
      clearTimeout(startTimer);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 1 }}
    />
  );
};

export default CanvasParticles;
