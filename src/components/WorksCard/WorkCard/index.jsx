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
      className={`custom-card flex h-[calc(100dvh-24px)] w-full items-center overflow-hidden tablet:h-[376px] tablet:flex-row desktop:max-h-full desktop:max-w-full ${isVertical ? 'flex-col-reverse desktop:col-span-3 desktop:row-span-6 desktop:h-full desktop:flex-col-reverse' : 'flex-col-reverse desktop:col-span-6 desktop:row-span-3 desktop:flex-row'} `}
    >
      <div
        className={`${isVertical ? 'min-[500px]:h-1/2 desktop:h-1/2 desktop:w-[80%] desktop:px-0 desktop:pb-12 desktop:pl-0 desktop:pt-0' : 'desktop:w-7/12 desktop:pl-12'} flex h-3/5 w-full flex-col items-start justify-between space-y-3 p-6 min-[600px]:p-10 tablet:h-full tablet:w-2/3 tablet:justify-evenly tablet:p-14 desktop:justify-center`}
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
        className={` ${isVertical ? 'desktop:h-1/2' : 'desktop:h-full'} flex h-2/5 flex-1 items-center justify-center tablet:h-full`}
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
