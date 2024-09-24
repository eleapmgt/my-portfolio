import { motion } from 'framer-motion';

const skillVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, -5, 0],
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const SkillsSpans = ({ skills = [] }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {' '}
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full shadow-sm"
          variants={skillVariants}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(0)',
          }}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
};

export default SkillsSpans;
