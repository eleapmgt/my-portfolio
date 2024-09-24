import { motion } from 'framer-motion';
import GithubIcon from '../GithubIcon';

const skillVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, -5, 0],
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const HorizontalWorkCard = ({
  title,
  description,
  details,
  skills = [],
  githubLink,
  imageSrc,
  customImageStyle = '',
}) => {
  return (
    <div className="w-full h-full col-span-6 row-span-3 custom-card flex flex-row items-center justify-between overflow-hidden">
      <div className="w-7/12 flex flex-col items-start justify-center space-y-3 pl-14 text-justify">
        <div className="space-y-1">
          <h2 className="font-semibold text-2xl">{title}</h2>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed pb-3">{details}</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full shadow-sm"
              variants={skillVariants}
              style={{ willChange: 'transform' }}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <motion.a
          href={githubLink}
          target="_blank"
          className="inline-flex items-end text-gray-700 hover:text-gray-900 transition-colors gap-2 pt-2"
          style={{ willChange: 'transform' }}
          whileHover={{
            scale: 1.05,
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 10,
            },
          }}
        >
          <GithubIcon />
          <span className="text-base relative top-1">Voir sur GitHub</span>
        </motion.a>
      </div>
      <div className="h-full flex flex-1 items-center justify-center">
        <motion.img
          src={imageSrc}
          alt={`Preview de ${title}`}
          className={`w-auto ${customImageStyle}`}
          whileHover={{ scale: 1.07 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        />
      </div>
    </div>
  );
};
export default HorizontalWorkCard;
