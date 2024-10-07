import { useCallback, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import FlipTextAnimation from '../../animations/FlipTextAnimation';

const SummaryLastProjectCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const handleClick = useCallback(() => {
    const worksSection = document.getElementById('works-grid');
    if (worksSection) {
      const yOffset = -10;
      const y =
        worksSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.article
      onClick={handleClick}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Accéder à mon dernier projet"
      className={`${isDarkMode ? 'tablet:custom-card-dark' : 'custom-card'} tablet:auto hidden dark:text-[#f7fff7] tablet:flex tablet:h-full tablet:cursor-pointer tablet:flex-row tablet:items-center tablet:justify-center tablet:gap-5 tablet:overflow-hidden desktop:col-span-5 desktop:row-span-3`}
    >
      <div id="my-last-project-title" className="desktop:w-1/2">
        <FlipTextAnimation text="MON" cnSpan="font-semibold" />
        <FlipTextAnimation text="DERNIER" cnSpan="font-thin italic" />
        <FlipTextAnimation text="PROJET" cnSpan="font-semibold" />
      </div>
      <div className="flex w-1/4 items-end justify-center">
        <motion.button
          className="flex h-20 w-20 items-center justify-center rounded-full bg-[#313132] text-white dark:bg-[#f7fff7]"
          initial={{ scale: 0.9 }}
          whileHover={{
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 15 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        >
          <ArrowUpRightIcon className="h-8 w-8 dark:text-black" />
        </motion.button>
      </div>
    </motion.article>
  );
};

export default SummaryLastProjectCard;
