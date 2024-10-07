import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipTextAnimation = ({ text, cnSpan }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative block w-full overflow-hidden whitespace-nowrap text-center`}
    >
      <div>
        {text.split('').map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className={`inline-block text-6xl ${cnSpan}`}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split('').map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className={`inline-block text-6xl ${cnSpan}`}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default FlipTextAnimation;
