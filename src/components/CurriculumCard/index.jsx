import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import downloadAnimation from '/src/animations/download-animation.json';
import blinkingAnimation from '/src/animations/blinking-eye-animation.json';

const CurriculumCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  return (
    <div className="col-span-1 row-span-1 flex items-center justify-between custom-card">
      <div className="flex flex-col pl-9">
        <h3 className="font-bold uppercase text-lg">Curriculum Vitae</h3>
        <span>2024</span>
      </div>
      <div className="flex flex-row items-center gap-4 pr-9">
        <motion.div
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
          initial={{ scale: 1 }}
          animate={isPlaying ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          role="img"
          aria-label="Animation de téléchargement du CV"
        >
          <Lottie
            loop
            animationData={downloadAnimation}
            play={isPlaying}
            speed={2}
            style={{ height: '60px', width: '60px' }}
            goTo={0}
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setIsBlinking(true)}
          onMouseLeave={() => setIsBlinking(false)}
          initial={{ scale: 1 }}
          animate={isBlinking ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          role="img"
          aria-label="Animation d'un oeil clignant pour visualiser le CV"
        >
          <Lottie
            loop
            animationData={blinkingAnimation}
            play={isBlinking}
            speed={1}
            style={{ height: '35px', width: '35px' }}
            goTo={0}
          />
        </motion.div>
      </div>
    </div>
  );
};
export default CurriculumCard;
