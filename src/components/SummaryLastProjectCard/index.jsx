import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import ArrowUpRight from './RightArrow';

const SummaryLastProjectCard = () => {
  const [isHovered, setIsHovered] = useState(false);
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
      className="tablet:auto tablet:custom-card hidden tablet:relative tablet:col-span-5 tablet:row-span-3 tablet:flex tablet:justify-center tablet:overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img
        src="/assets/images/profile-grid/kasa-website.png"
        alt="Image du dernier projet réalisé"
        className="h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: isHovered ? 1.3 : 1.2 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6 pl-9"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h3 className="text-2xl font-semibold">Kasa Website</h3>
        <div className="flex flex-row items-center space-x-2">
          <p className="text-base">Découvrir mon dernier projet</p>
          <ArrowUpRight />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SummaryLastProjectCard;
