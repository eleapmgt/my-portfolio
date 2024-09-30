import { motion } from 'framer-motion';

const IconCard = ({ iconSrc, description, iconRef }) => {
  return (
    <motion.a
      href={iconRef}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={description}
      className="custom-card flex items-center justify-center desktop:col-span-2 desktop:row-span-1"
      animate="initial"
      whileHover="hover"
    >
      <motion.img
        src={iconSrc}
        alt={description}
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
