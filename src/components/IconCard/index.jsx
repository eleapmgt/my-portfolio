import { motion } from 'framer-motion';

const IconCard = ({
  iconSrc,
  description,
  colSpan = 'col-span-1',
  rowSpan = 'row-span-1',
}) => {
  return (
    <motion.div
      className={`${colSpan} ${rowSpan} flex justify-center items-center custom-card`}
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
    </motion.div>
  );
};

export default IconCard;
