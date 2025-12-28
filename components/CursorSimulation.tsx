import React, { useEffect, useState } from 'react';

const CursorSimulation: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetId, setTargetId] = useState(0);

  // Targets corresponding to CTA button, Services card, Demo button, and Footer area
  const targets = [
    { x: 300, y: 500, label: 'Hero CTA' }, 
    { x: 800, y: 1200, label: 'Services Card' }, 
    { x: 500, y: 2500, label: 'Timeline' }, 
    { x: 200, y: 4500, label: 'Contact Form' }, 
  ];

  useEffect(() => {
    let currentX = position.x;
    let currentY = position.y;
    let animationFrameId: number;

    const move = () => {
      const target = targets[targetId];
      const dx = target.x - currentX;
      const dy = target.y - currentY;
      
      const speed = 0.02; // Smoothness factor

      currentX += dx * speed;
      currentY += dy * speed;

      setPosition({ x: currentX, y: currentY });

      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
        // Pause at target then switch
        setTimeout(() => {
           setTargetId((prev) => (prev + 1) % targets.length);
        }, 2000);
      } else {
        animationFrameId = requestAnimationFrame(move);
      }
    };

    animationFrameId = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetId]);

  return (
    <>
      {/* Simulation Ghost Cursor */}
      <div 
        className="fixed pointer-events-none hidden lg:block"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          zIndex: 10000,
          left: 0,
          top: 0
        }}
      >
        <div className="w-4 h-4 bg-white/20 border border-neonLavender rounded-full animate-ping" />
      </div>

      {/* Trailing Glow for Cursor Path */}
      <div 
        className="fixed pointer-events-none hidden lg:block"
        style={{
          width: '500px',
          height: '500px',
          left: position.x - 250,
          top: position.y - 250,
          background: 'radial-gradient(circle, rgba(181, 126, 220, 0.1) 0%, transparent 70%)',
          zIndex: 9999,
          position: 'absolute'
        }}
      />
    </>
  );
};

export default CursorSimulation;