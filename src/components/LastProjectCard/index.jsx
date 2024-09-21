import { useState } from 'react';
import { motion } from 'framer-motion';
import ArrowUpRight from './RightArrow';

const LastProjectCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="col-span-5 row-span-3 flex justify-center custom-card relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.img
        src="/assets/images/kasa-website.png"
        alt="Image du dernier projet réalisé"
        className="h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: isHovered ? 1.3 : 1.2 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6 text-[#000000] pl-9"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h3 className="font-semibold text-2xl">Kasa Website</h3>
        <div className="flex flex-row items-center space-x-2">
          <p className="text-base">Découvrir mon dernier projet</p>
          <ArrowUpRight className="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LastProjectCard;
