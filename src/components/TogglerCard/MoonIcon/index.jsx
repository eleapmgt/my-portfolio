import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const MoonIcon = ({ isHovered }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.2"
      stroke={`${isDarkMode ? '#f7fff7' : 'currentColor'}`}
      aria-label="Icône d'une lune correspondant au Dark Mode"
      role="img"
      className="size-9"
      animate={isHovered ? 'hover' : 'initial'}
      variants={{
        initial: {
          rotate: 0,
          transition: { duration: 0.3, ease: 'easeInOut' },
        },
        hover: {
          rotate: [0, -20, 10, -20, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        },
      }}
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </motion.svg>
  );
};

export default MoonIcon;
