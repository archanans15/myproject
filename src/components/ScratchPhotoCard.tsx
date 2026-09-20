import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Eye } from 'lucide-react';

interface ScratchPhotoCardProps {
  imageSrc: string;
  name: string;
  roleBadge: string;
}

export const ScratchPhotoCard: React.FC<ScratchPhotoCardProps> = ({ imageSrc, name, roleBadge }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    // Draw Gold Foil Overlay Texture
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#d4af37');
    gradient.addColorStop(0.3, '#f9ea9a');
    gradient.addColorStop(0.6, '#b8860b');
    gradient.addColorStop(1, '#e6ca65');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative Gold Grid & Label
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i < width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }

    // Text Label on Foil
    ctx.fillStyle = '#1c0812';
    ctx.font = 'bold 16px Cormorant Garamond, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`✨ SCRATCH TO REVEAL ✨`, width / 2, height / 2 - 12);
    ctx.font = '14px Montserrat, sans-serif';
    ctx.fillText(name, width / 2, height / 2 + 16);
  }, [name]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const posX = x - rect.left;
    const posY = y - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(posX, posY, 26, 0, Math.PI * 2);
    ctx.fill();

    checkPercentErased(ctx, canvas.width, canvas.height);
  };

  const checkPercentErased = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    try {
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      let erasedCount = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) erasedCount++;
      }
      const percentErased = (erasedCount / (pixels.length / 4)) * 100;
      if (percentErased > 35 && !isRevealed) {
        handleFullReveal();
      }
    } catch (e) {
      // Ignore security errors on cross-origin
    }
  };

  const handleFullReveal = () => {
    setIsRevealed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDrawing) {
      scratch(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => setIsDrawing(false);

  // Touch Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDrawing(true);
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDrawing && e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => setIsDrawing(false);

  return (
    <div className="scratch-card-container" ref={containerRef}>
      <img src={imageSrc} alt={name} className="couple-img" />
      <span className="couple-badge">{roleBadge}</span>

      <canvas
        ref={canvasRef}
        className={`scratch-canvas ${isRevealed ? 'revealed' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {!isRevealed && (
        <button
          className="quick-reveal-btn"
          onClick={handleFullReveal}
          title="Click to reveal immediately"
        >
          <Eye size={14} /> Quick Reveal
        </button>
      )}
    </div>
  );
};
