import { useState, useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../context/ThemeContext';
import SkillsSpans from '../shared/SkillsSpans';
import GithubLink from '../shared/GithubLink';

const WorkCard = ({
  title,
  description,
  details,
  skills = [],
  githubLink,
  imageSrcMobile,
  imageSrcTablet,
  imageSrcDesktop,
  customImgStyle,
  isVertical = true,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const setCardHeight = () => {
      if (cardRef.current && window.innerWidth < 768) {
        const vh = window.innerHeight;
        cardRef.current.style.height = `${vh}px`;
      }
    };

    setCardHeight();
    window.addEventListener('resize', setCardHeight);

    return () => {
      window.removeEventListener('resize', setCardHeight);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`${isDarkMode ? 'custom-card-dark' : 'custom-card'} flex h-[100lvh] w-full items-center overflow-hidden tablet:h-[376px] tablet:max-h-[376px] tablet:min-h-[376px] tablet:flex-row ${isVertical ? 'flex-col-reverse desktop:col-span-3 desktop:row-span-6 desktop:min-h-full desktop:flex-col-reverse' : 'flex-col-reverse desktop:col-span-6 desktop:row-span-3 desktop:flex-row'} `}
      aria-labelledby={`workcard-title-${title}`}
    >
      <div
        id="workcard-text"
        className={`${isVertical ? 'desktop:h-1/2 desktop:w-[80%] desktop:px-0 desktop:pb-12 desktop:pl-0 desktop:pt-0' : 'desktop:w-7/12 desktop:pl-12 desktop:pr-6'} flex h-3/5 w-full flex-col items-start justify-between space-y-3 p-6 min-[600px]:p-10 tablet:h-full tablet:w-2/3 tablet:justify-evenly desktop:justify-center`}
      >
        <header className="space-y-1">
          <h2
            id={`workcard-title-${title}`}
            className="text-2xl font-medium tracking-wide desktop:text-3xl"
          >
            {title}
          </h2>
          <p className="text-lg text-gray-800 dark:text-[#e7f5e7] tablet:text-base desktop:text-xl">
            {description}
          </p>
        </header>
        <p className="min-w-[400px]:line-clamp-4 line-clamp-2 text-justify text-base leading-relaxed text-gray-600 dark:font-light dark:text-[#ffffff] dark:opacity-60 tablet:line-clamp-none tablet:pb-1 tablet:text-sm desktop:text-[15px] desktop:font-normal">
          {details}
        </p>
        <SkillsSpans skills={skills} />
        <GithubLink githubLink={githubLink} />
      </div>
      <motion.div
        id="workcard-img"
        className={`${isVertical ? 'desktop:h-1/2 desktop:w-full' : 'desktop:w-5/12'} max-h-2/5 flex w-full justify-center tablet:h-full tablet:max-h-full tablet:w-1/3`}
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.07 : 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <picture className="tablet:min-h-full tablet:w-auto">
          <source media="(min-width: 1240px)" srcSet={imageSrcDesktop} />
          <source media="(min-width: 768px)" srcSet={imageSrcTablet} />
          <source srcSet={imageSrcMobile} />

          <img
            src={imageSrcMobile}
            alt={`Preview de ${title}`}
            loading="lazy"
            className={` ${customImgStyle} tablet:h-full tablet:w-auto tablet:object-cover`}
          />
        </picture>
      </motion.div>
    </article>
  );
};
export default WorkCard;
