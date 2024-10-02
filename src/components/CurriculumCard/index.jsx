import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import Lottie from 'react-lottie-player';
import downloadDarkAnimation from '/src/animations/DownloadIconAnimation/download-animation-dark.json';
import downloadLightAnimation from '/src/animations/DownloadIconAnimation/download-animation-light.json';
import blinkingDarkAnimation from '/src/animations/BlinkingEyeAnimation/blinking-eye-animation-dark.json';
import blinkingLightAnimation from '/src/animations/BlinkingEyeAnimation/blinking-eye-animation-light.json';

const CurriculumCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  const openPDFInNewTab = () => {
    window.open('/assets/docs/cv-eleapimouguet.pdf', '_blank');
  };

  return (
    <>
      <div
        className={`${isDarkMode ? 'custom-card-dark' : 'custom-card'} flex h-[calc((100vh-60px)/5)] w-full items-center justify-between tablet:h-full desktop:col-span-1 desktop:row-span-1 desktop:h-full`}
        role="region"
        aria-labelledby="curriculum-vitae"
      >
        <div className="flex flex-col pl-12">
          <h3 id="curriculum-vitae" className="text-lg font-semibold uppercase">
            Curriculum Vitae
          </h3>
          <span className="dark:opacity-90">2024</span>
        </div>
        <div className="flex flex-row items-center gap-4 pr-12">
          <motion.a
            href="/assets/docs/cv-eleapimouguet.pdf"
            download="EléaPimouguet_CV.pdf"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
            initial={{ scale: 1 }}
            animate={isPlaying ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            aria-label="Télécharger le CV"
            role="button"
            tabIndex={0}
          >
            <Lottie
              loop
              animationData={
                isDarkMode ? downloadLightAnimation : downloadDarkAnimation
              }
              play={isPlaying}
              speed={2}
              style={{ height: '60px', width: '60px' }}
              goTo={0}
            />
          </motion.a>
          <motion.div
            onMouseEnter={() => setIsBlinking(true)}
            onMouseLeave={() => setIsBlinking(false)}
            initial={{ scale: 1 }}
            animate={isBlinking ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            role="button"
            aria-label="Visualiser le CV"
            onClick={openPDFInNewTab}
            tabIndex={0}
            className="cursor-pointer"
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openPDFInNewTab();
              }
            }}
          >
            <Lottie
              loop
              animationData={
                isDarkMode ? blinkingLightAnimation : blinkingDarkAnimation
              }
              play={isBlinking}
              speed={1}
              style={{ height: '35px', width: '35px' }}
              goTo={0}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default CurriculumCard;
