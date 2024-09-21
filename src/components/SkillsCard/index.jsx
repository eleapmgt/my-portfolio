import { motion } from 'framer-motion';
import SkillsArray from '/src/data/skills.json';

const SkillsCard = () => {
  return (
    <section className="section-skills col-span-7 row-span-1 custom-card relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-[70px] bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-[70px] bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10"></div>
      <div className="relative h-full flex items-center ">
        <motion.div
          className="flex space-x-4 absolute"
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
              className="flex flex-col items-center justify-center w-24"
            >
              <img
                src={skill.icon}
                alt={skill.description}
                className="w-11 h-11 rounded-xl mb-1 object-contain"
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
