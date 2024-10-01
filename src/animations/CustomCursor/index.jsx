import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = () => {
      const target = document.elementFromPoint(position.x, position.y);
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', updateCursorStyle);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', updateCursorStyle);
    };
  }, [position]);

  return (
    <>
      <svg style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
          </filter>
        </defs>
      </svg>
      <div className="goo pointer-events-none fixed left-0 top-0 z-50">
        <div
          className={`h-8 w-8 rounded-full bg-white transition-all duration-100 ease-out ${
            isPointer ? 'scale-150' : 'scale-100'
          }`}
          style={{
            position: 'fixed',
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="h-2 w-2 rounded-full bg-white"
          style={{
            position: 'fixed',
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
