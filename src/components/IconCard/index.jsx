import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const IconCard = ({ iconSrc, description, iconRef }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <motion.a
      href={iconRef}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={description}
      className={`${isDarkMode ? 'custom-card-dark' : 'custom-card'} flex items-center justify-center desktop:col-span-2 desktop:row-span-1`}
      animate="initial"
      whileHover="hover"
    >
      <motion.img
        src={iconSrc}
        alt={description}
        loading="lazy"
        className="h-16 w-16"
        variants={{
          initial: {
            rotate: 0,
            transition: { duration: 0.3, ease: 'easeOut' },
          },
          hover: {
            rotate: [0, -5, 5, -5],
            transition: {
              duration: 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'mirror',
            },
          },
        }}
      />
    </motion.a>
  );
};

export default IconCard;
