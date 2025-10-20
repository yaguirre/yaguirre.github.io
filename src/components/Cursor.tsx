import React, { useState, useEffect, useRef } from 'react';

interface Splash {
  id: number;
  x: number;
  y: number;
  timestamp: number;
  particles: Array<{
    angle: number;
    distance: number;
    size: number;
    duration: number;
  }>;
}

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  timestamp: number;
  size: number;
  velocity: { x: number; y: number };
}

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const [trailParticles, setTrailParticles] = useState<TrailParticle[]>([]);

  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const magneticTarget = useRef<HTMLElement | null>(null);
  const animationFrameId = useRef<number>();
  const splashIdCounter = useRef(0);
  const trailIdCounter = useRef(0);
  const lastTrailTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Find closest interactive element
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, input, textarea');

      if (interactive) {
        magneticTarget.current = interactive as HTMLElement;
        setIsHovered(true);
      } else {
        magneticTarget.current = null;
        setIsHovered(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);

      // Generate burst particles with varied distances
      const particleCount = 8;
      const particles = Array.from({ length: particleCount }, (_, i) => {
        const baseAngle = (i * (360 / particleCount)) * (Math.PI / 180);
        const angleVariation = (Math.random() - 0.5) * 0.3;

        return {
          angle: baseAngle + angleVariation,
          distance: 40 + Math.random() * 30, // 40-70px distance
          size: 4 + Math.random() * 2, // 4-6px size
          duration: 0.4 + Math.random() * 0.2, // 0.4-0.6s duration
        };
      });

      // Create splash effect on click
      const newSplash: Splash = {
        id: splashIdCounter.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        particles,
      };

      setSplashes(prev => [...prev, newSplash]);

      // Remove splash after animation completes
      setTimeout(() => {
        setSplashes(prev => prev.filter(s => s.id !== newSplash.id));
      }, 700);
    };

    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    // Magnetic animation loop with trail generation
    const animate = () => {
      const now = Date.now();

      setPosition(prev => {
        let targetX = mousePos.current.x;
        let targetY = mousePos.current.y;

        // Apply magnetic pull
        if (magneticTarget.current) {
          const rect = magneticTarget.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const distanceX = centerX - mousePos.current.x;
          const distanceY = centerY - mousePos.current.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          // Pull strength based on distance (max 100px pull radius)
          const maxPullDistance = 100;
          if (distance < maxPullDistance) {
            const pullStrength = 0.3 * (1 - distance / maxPullDistance);
            targetX += distanceX * pullStrength;
            targetY += distanceY * pullStrength;
          }
        }

        // Smooth easing toward target
        const ease = 0.15;
        const newX = prev.x + (targetX - prev.x) * ease;
        const newY = prev.y + (targetY - prev.y) * ease;

        // Generate trail particles based on movement speed
        const dx = newX - prevMousePos.current.x;
        const dy = newY - prevMousePos.current.y;
        const speed = Math.sqrt(dx * dx + dy * dy);

        // Throttle particle generation (every 20ms minimum) and only when moving
        if (speed > 1 && now - lastTrailTime.current > 20) {
          lastTrailTime.current = now;

          // Create 1-2 particles based on speed for cleaner trail
          const particleCount = Math.min(2, Math.floor(speed / 5) + 1);

          for (let i = 0; i < particleCount; i++) {
            const spreadAngle = (Math.random() - 0.5) * Math.PI / 4;
            const spreadDistance = Math.random() * 5;

            const particle: TrailParticle = {
              id: trailIdCounter.current++,
              x: newX + Math.cos(spreadAngle) * spreadDistance,
              y: newY + Math.sin(spreadAngle) * spreadDistance,
              timestamp: now,
              size: 3 + Math.random() * 2,
              velocity: {
                x: (Math.random() - 0.5) * 1,
                y: (Math.random() - 0.5) * 1
              }
            };

            setTrailParticles(prev => [...prev, particle]);

            // Remove particle after fade
            setTimeout(() => {
              setTrailParticles(prev => prev.filter(p => p.id !== particle.id));
            }, 500);
          }
        }

        prevMousePos.current = { x: newX, y: newY };

        return { x: newX, y: newY };
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const cursorScale = isClicked ? 0.8 : isHovered ? 1.3 : 1;
  const cursorOpacity = isHidden ? 0 : isHovered ? 0.8 : 1;

  return (
    <>
      {/* Trail particles */}
      {trailParticles.map(particle => (
        <div
          key={particle.id}
          className="pointer-events-none fixed z-40 rounded-full bg-gradient-to-br from-accent/80 to-accent/40 animate-trail-fade"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 4px rgba(96, 165, 250, 0.4)'
          }}
        />
      ))}

      {/* Splash effects */}
      {splashes.map(splash => (
        <React.Fragment key={splash.id}>
          {/* Single clean ripple */}
          <div
            className="pointer-events-none fixed z-40 rounded-full border border-accent/70"
            style={{
              left: `${splash.x}px`,
              top: `${splash.y}px`,
              width: '30px',
              height: '30px',
              transform: 'translate(-50%, -50%)',
              animation: 'splashRipple 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          />

          {/* Burst particles */}
          {splash.particles.map((particle, i) => {
            const tx = Math.cos(particle.angle) * particle.distance;
            const ty = Math.sin(particle.angle) * particle.distance;

            return (
              <div
                key={i}
                className="pointer-events-none fixed z-40 rounded-full bg-gradient-to-br from-accent to-accent/60"
                style={{
                  left: `${splash.x}px`,
                  top: `${splash.y}px`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  transform: 'translate(-50%, -50%)',
                  animation: `splashParticle ${particle.duration}s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  '--tx': `${tx}px`,
                  '--ty': `${ty}px`,
                  boxShadow: '0 0 6px rgba(96, 165, 250, 0.6)',
                } as React.CSSProperties}
              />
            );
          })}
        </React.Fragment>
      ))}

    </>
  );
};

export default Cursor;
