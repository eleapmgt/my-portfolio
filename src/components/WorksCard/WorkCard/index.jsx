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
      className={`h-[calc(100dvh-24px)] w-full tablet:max-h-full tablet:max-w-full ${isVertical ? 'flex-col-reverse tablet:col-span-3 tablet:row-span-6' : 'flex-col-reverse tablet:col-span-6 tablet:row-span-3 tablet:flex-row'} custom-card flex items-center overflow-hidden`}
    >
      <div
        className={`${isVertical ? 'min-[500px]:h-1/2 tablet:h-1/2 tablet:w-[80%] tablet:px-0 tablet:pb-12 tablet:pl-0 tablet:pt-0' : 'tablet:w-7/12 tablet:pl-12'} flex h-3/5 w-full flex-col items-start justify-between space-y-3 p-6 min-[600px]:p-10 tablet:justify-center`}
      >
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-lg text-gray-700 tablet:text-base">
            {description}
          </p>
        </div>
        <p className="line-clamp-6 text-justify text-base leading-relaxed text-gray-600 min-[450px]:line-clamp-none tablet:pb-3 tablet:text-sm">
          {details}
        </p>
        <SkillsSpans skills={skills} />
        <GithubLink githubLink={githubLink} />
      </div>
      <div
        className={` ${isVertical ? 'tablet:h-1/2' : 'tablet:h-full'} flex h-2/5 flex-1 items-center justify-center`}
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
