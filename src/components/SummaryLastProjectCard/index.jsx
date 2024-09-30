import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const SummaryLastProjectCard = () => {
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
    <motion.div
      onClick={handleClick}
      className="tablet:auto tablet:custom-card bg hidden tablet:flex tablet:h-full tablet:cursor-pointer tablet:flex-row tablet:items-center tablet:justify-center tablet:gap-5 tablet:overflow-hidden desktop:col-span-5 desktop:row-span-3"
    >
      <div id="my-last-project-title" className="w-1/2">
        <div className="w-full text-center text-6xl font-semibold">MON</div>
        <div className="w-full text-center text-6xl font-thin italic">
          DERNIER
        </div>
        <div className="w-full text-center text-6xl font-semibold">PROJET</div>
      </div>
      <div className="flex w-1/4 items-end justify-center">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#313132] text-white transition-transform hover:scale-110 hover:bg-black">
          <ArrowUpRightIcon className="h-8 w-8" />
        </button>
      </div>
    </motion.div>
  );
};

export default SummaryLastProjectCard;
