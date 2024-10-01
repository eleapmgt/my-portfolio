import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import SkillsArray from '/src/data/skills.json';

const SkillsCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section
      id="section-skills"
      className={`${isDarkMode ? 'custom-card-dark' : 'custom-card'} relative h-[calc((100vh-60px)/5)] overflow-hidden tablet:h-1/2 desktop:col-span-7 desktop:row-span-1 desktop:h-full`}
    >
      <div className="absolute inset-y-0 left-0 z-10 w-[70px] bg-gradient-to-r from-gray-50 via-gray-50 to-transparent dark:from-[rgba(18,18,18,0.9)] dark:via-[rgba(18,18,18,0.6)] dark:to-transparent"></div>
      <div className="absolute inset-y-0 right-0 z-10 w-[70px] bg-gradient-to-l from-gray-50 via-gray-50 to-transparent dark:from-[rgba(18,18,18,0.9)] dark:via-[rgba(18,18,18,0.6)] dark:to-transparent"></div>
      <div className="relative flex h-full items-center">
        <motion.div
          className="absolute flex space-x-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 70,
              ease: 'linear',
            },
          }}
        >
          {[...SkillsArray, ...SkillsArray].map((skill, index) => (
            <div
              key={index}
              className="flex w-24 flex-col items-center justify-center"
            >
              <img
                src={skill.icon}
                alt={skill.description}
                className="mb-1 h-11 w-11 rounded-xl object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="text-xs">{skill.skillName}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCard;
