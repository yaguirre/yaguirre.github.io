import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleLinkEnter = () => setLinkHovered(true);
    const handleLinkLeave = () => setLinkHovered(false);

    const linkElements = document.querySelectorAll('a, button');
    linkElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkEnter);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      linkElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkEnter);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  const cursorClasses = `
    pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference
    transform -translate-x-1/2 -translate-y-1/2 will-change-transform
    transition-transform duration-100 ease-out
    ${clicked ? 'scale-75' : ''}
    ${linkHovered ? 'scale-150' : ''}
    ${hidden ? 'opacity-0' : 'opacity-100'}
  `;

  return (
    <>
      <div 
        className={`${cursorClasses} w-6 h-6 bg-white rounded-full`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) scale(${clicked ? 0.75 : linkHovered ? 1.5 : 1})` 
        }}
      />
      <div
        className={`${cursorClasses} w-10 h-10 border border-white rounded-full`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) scale(${clicked ? 0.75 : linkHovered ? 1.5 : 1})`,
          transitionDelay: '0.03s'
        }}
      />
    </>
  );
};

export default Cursor;
