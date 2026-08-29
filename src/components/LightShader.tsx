import React, { useEffect, useRef } from 'react';

export const LightShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width * 0.5;
    let mouseY = height * 0.3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let scrollY = window.scrollY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    let time = 0;

    const render = () => {
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      if (!prefersReducedMotion) {
        time += 0.003;
      }

      ctx.clearRect(0, 0, width, height);

      // Warm paper ambient base
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#FAF8F5');
      bgGrad.addColorStop(0.5, '#F4F1EA');
      bgGrad.addColorStop(1, '#EFECE3');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Soft light pool 1 - subtle warm sunbeam across paper
      const x1 = width * 0.35 + Math.sin(time * 0.8) * 120 + (mouseX - width * 0.5) * 0.08;
      const y1 = height * 0.3 + Math.cos(time * 0.6) * 90 - (scrollY * 0.04) % height;
      const radius1 = Math.max(width, height) * 0.55;

      const grad1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, radius1);
      grad1.addColorStop(0, 'rgba(255, 253, 245, 0.55)');
      grad1.addColorStop(0.4, 'rgba(247, 243, 232, 0.3)');
      grad1.addColorStop(1, 'rgba(244, 241, 234, 0)');

      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(x1, y1, radius1, 0, Math.PI * 2);
      ctx.fill();

      // Soft light pool 2 - slight muted teal/emerald caustics whisper (ultra-low opacity)
      const x2 = width * 0.75 + Math.cos(time * 0.7) * 140 + (mouseX - width * 0.5) * 0.05;
      const y2 = height * 0.65 + Math.sin(time * 0.9) * 100 - (scrollY * 0.03) % height;
      const radius2 = Math.max(width, height) * 0.45;

      const grad2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, radius2);
      grad2.addColorStop(0, 'rgba(224, 237, 232, 0.22)');
      grad2.addColorStop(0.5, 'rgba(235, 242, 238, 0.1)');
      grad2.addColorStop(1, 'rgba(244, 241, 234, 0)');

      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(x2, y2, radius2, 0, Math.PI * 2);
      ctx.fill();

      // Soft light pool 3 - mouse follow gentle refraction
      const gradMouse = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 320);
      gradMouse.addColorStop(0, 'rgba(255, 255, 252, 0.35)');
      gradMouse.addColorStop(0.5, 'rgba(250, 248, 242, 0.12)');
      gradMouse.addColorStop(1, 'rgba(244, 241, 234, 0)');

      ctx.fillStyle = gradMouse;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 320, 0, Math.PI * 2);
      ctx.fill();

      // Draw subtle fine-grain paper texture lines for high editorial feel
      ctx.fillStyle = 'rgba(20, 20, 20, 0.012)';
      const step = 8;
      for (let y = 0; y < height; y += step * 3) {
        ctx.fillRect(0, y, width, 1);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-1000"
      style={{ opacity: 0.95 }}
    />
  );
};
