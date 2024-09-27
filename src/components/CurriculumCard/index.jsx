import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import downloadAnimation from '/src/animations/download-animation.json';
import blinkingAnimation from '/src/animations/blinking-eye-animation.json';
import PDFViewerModal from './PDFViewerModal/index.jsx';

const CurriculumCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  const togglePDFModal = () => setIsPDFModalOpen(!isPDFModalOpen);

  return (
    <>
      <div className="custom-card flex w-full items-center justify-between tablet:col-span-1 tablet:row-span-1">
        <div className="flex flex-col pl-12">
          <h3 className="text-lg font-bold uppercase">Curriculum Vitae</h3>
          <span>2024</span>
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
          >
            <Lottie
              loop
              animationData={downloadAnimation}
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
            onClick={togglePDFModal}
            className="cursor-pointer"
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
      <PDFViewerModal
        isOpen={isPDFModalOpen}
        onClose={togglePDFModal}
        pdfUrl="/assets/docs/cv-eleapimouguet.pdf"
      />
    </>
  );
};
export default CurriculumCard;
