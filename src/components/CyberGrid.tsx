import React, { useRef, useEffect } from 'react';

const CyberGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    let animationId: number;
    let time = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      const lineWidth = 1;
      
      // Animate grid movement with more dynamic motion
      const offsetX = (time * 0.15) % gridSize;
      const offsetY = (time * 0.08) % gridSize;

      // Enhanced grid lines with gradient effect
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 245, 255, 0.2)');
      gradient.addColorStop(0.5, 'rgba(191, 0, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(255, 0, 128, 0.1)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;
      ctx.shadowBlur = 3;
      ctx.shadowColor = '#00f5ff';

      // Draw vertical lines
      for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Enhanced diagonal lines for cyber effect
      ctx.strokeStyle = 'rgba(0, 255, 128, 0.08)';
      ctx.shadowColor = '#00ff80';
      for (let i = 0; i < canvas.width + canvas.height; i += gridSize * 1.5) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i - canvas.height, canvas.height);
        ctx.stroke();
      }

      // Reverse diagonal lines
      ctx.strokeStyle = 'rgba(255, 107, 0, 0.06)';
      ctx.shadowColor = '#ff6b00';
      for (let i = 0; i < canvas.width + canvas.height; i += gridSize * 1.8) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i - canvas.width);
        ctx.stroke();
      }

      // Enhanced glowing points at intersections
      const colors = ['#00f5ff', '#bf00ff', '#ff0080', '#00ff80', '#ff6b00'];
      for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
        for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
          if (Math.random() < 0.15) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            ctx.save();
            ctx.fillStyle = color;
            ctx.shadowBlur = 15;
            ctx.shadowColor = color;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
            
            // Add inner glow
            ctx.globalAlpha = 0.6;
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      }

      // Add pulsing grid lines
      const pulseOpacity = 0.1 + Math.sin(time * 0.01) * 0.05;
      ctx.strokeStyle = `rgba(0, 245, 255, ${pulseOpacity})`;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#00f5ff';
      
      // Draw pulsing center lines
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, canvas.height);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(canvas.width, centerY);
      ctx.stroke();

      time += 16; // ~60fps
      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50"
      style={{ zIndex: 0 }}
    />
  );
};

export default CyberGrid;
