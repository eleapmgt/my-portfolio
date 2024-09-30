import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const SunIcon = ({ isHovered }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const controls = useAnimation();
  const rotationRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    let animationFrameId;
    const animate = (time) => {
      if (lastTimeRef.current !== 0) {
        const deltaTime = (time - lastTimeRef.current) / 1000;
        if (isHovered) {
          rotationRef.current += 72 * deltaTime;
          if (rotationRef.current >= 360) {
            rotationRef.current -= 360;
          }
        }
        controls.set({ rotate: rotationRef.current });
      }
      lastTimeRef.current = time;
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, controls]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke={`${isDarkMode ? '#f7fff7' : 'currentColor'}`}
      title="Icône d'un soleil représentant le Light Mode"
      className="size-12"
      animate={controls}
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </motion.svg>
  );
};

export default SunIcon;
