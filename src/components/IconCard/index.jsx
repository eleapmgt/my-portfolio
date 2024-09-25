import { motion } from 'framer-motion';

const IconCard = ({ iconSrc, description, iconRef }) => {
  return (
    <motion.a
      href={iconRef}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={description}
      className="col-span-2 row-span-1 flex justify-center items-center custom-card"
      animate="initial"
      whileHover="hover"
    >
      <motion.img
        src={iconSrc}
        alt={description}
        className="w-16 h-16"
        variants={{
          initial: {
            rotate: 0,
            transition: { duration: 0.3, ease: 'easeOut' },
          },
          hover: {
            rotate: [0, -5, 5, -5],
            transition: {
              duration: 0.5,
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
