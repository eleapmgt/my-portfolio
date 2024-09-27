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
      className={`max-h-full max-w-full ${isVertical ? 'col-span-3 row-span-6 flex-col-reverse' : 'col-span-6 row-span-3 flex-row'} custom-card flex items-center overflow-hidden`}
    >
      <div
        className={`${isVertical ? 'h-1/2 w-[80%] pb-12 pl-0' : 'w-7/12 pl-12'} flex flex-col items-start justify-center space-y-3`}
      >
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <p className="pb-3 text-justify text-sm leading-relaxed text-gray-600">
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
