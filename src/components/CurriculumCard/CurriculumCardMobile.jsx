import Lottie from 'react-lottie-player';
import downloadAnimation from '/src/animations/download-animation.json';
import blinkingAnimation from '/src/animations/blinking-eye-animation.json';

const CurriculumCardMobile = () => {
  const handleClick = () => {
    const pdfUrl = '/assets/docs/cv-eleapimouguet.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <div className="custom-card flex h-[calc((100vh-60px)/5)] w-full items-center justify-between tablet:col-span-1 tablet:row-span-1">
        <div className="flex flex-col pl-12">
          <h3 className="text-lg font-bold uppercase">Curriculum Vitae</h3>
          <span className="text-base">2024</span>
        </div>
        <div className="flex flex-row items-center gap-4 pr-12">
          <a
            href="/assets/docs/cv-eleapimouguet.pdf"
            download="EléaPimouguet_CV.pdf"
            aria-label="Télécharger le CV"
          >
            <Lottie
              animationData={downloadAnimation}
              style={{ height: '60px', width: '60px' }}
            />
          </a>
          <div
            role="button"
            aria-label="Visualiser le CV"
            onClick={handleClick}
            className="cursor-pointer"
          >
            <Lottie
              animationData={blinkingAnimation}
              style={{ height: '35px', width: '35px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CurriculumCardMobile;
