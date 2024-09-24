import { motion } from 'framer-motion';
import SkillsSpans from '../shared/SkillsSpans';
import GithubLink from '../shared/GithubLink';

const WorkCard = ({
  title,
  description,
  details,
  skills = [],
  githubLink,
  imageSrc,
  customImageStyle = '',
  isVertical = true,
}) => {
  return (
    <div
      className={`max-w-full max-h-full ${isVertical ? 'row-span-6 col-span-3 flex-col-reverse' : 'row-span-3 col-span-6 flex-row'} custom-card flex items-center overflow-hidden`}
    >
      <div
        className={`${isVertical ? 'w-[80%] pl-0 pb-12 h-1/2' : 'w-7/12 pl-12'} flex flex-col items-start justify-center space-y-3`}
      >
        <div className="space-y-1">
          <h2 className="font-semibold text-2xl">{title}</h2>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed pb-3 text-justify">
          {details}
        </p>
        <SkillsSpans skills={skills} />
        <GithubLink githubLink={githubLink} />
      </div>
      <div
        className={` ${isVertical ? 'h-1/2' : 'h-full'} flex flex-1 items-center justify-center`}
      >
        <motion.img
          src={imageSrc}
          alt={`Preview de ${title}`}
          className={`${customImageStyle}`}
          whileHover={{ scale: 1.07 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        />
      </div>
    </div>
  );
};
export default WorkCard;
