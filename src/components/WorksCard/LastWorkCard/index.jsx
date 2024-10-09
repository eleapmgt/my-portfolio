import { useState, useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { motion } from 'framer-motion';
import SkillsSpans from '../shared/SkillsSpans';
import VideoKasa from '/assets/videos/works-grid/kasa-video.mp4';
import GithubLink from '../shared/GithubLink';

const LastWorkCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const skills = ['React', 'React Router', 'JavaScript', 'Sass', 'Responsive'];
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
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

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.error('Video playback error:', error));
    }
  }, [isHovered]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      /*       videoRef.current.playbackRate = -1;
       */ videoRef.current.play();
    }
  };

  return (
    <article
      ref={cardRef}
      className={`${isDarkMode ? 'custom-card-dark' : 'custom-card'} flex max-h-[100lvh] min-h-[100lvh] w-full flex-col-reverse items-center overflow-hidden tablet:col-span-9 tablet:row-span-3 tablet:h-[376px] tablet:max-h-[376px] tablet:min-h-[376px] tablet:flex-row`}
      aria-labelledby="last-work-title"
    >
      <div
        id="card-text"
        className="flex h-3/5 w-full flex-col items-start justify-between space-y-3 p-6 min-[600px]:p-10 tablet:h-full tablet:w-2/3 tablet:justify-center tablet:space-y-4 desktop:w-7/12 desktop:p-12"
      >
        <header className="space-y-1">
          <h2
            id="last-work-title"
            className="text-left text-2xl font-medium tracking-wide desktop:text-3xl"
          >
            Kasa Website
          </h2>
          <p className="desktop:font-regular text-lg text-gray-700 dark:text-[#e7f5e7] tablet:text-base desktop:text-xl">
            Plateforme de location immobilière
          </p>
        </header>
        <div className="min-w-[400px]:line-clamp-4 line-clamp-2 text-justify text-base leading-relaxed text-gray-600 dark:font-light dark:text-[#ffffff] dark:opacity-60 tablet:line-clamp-none tablet:pb-0 tablet:text-sm desktop:pb-3 desktop:text-[15px]">
          Le projet consistait à développer le front-end de l&apos;application
          avec React et React Router pour optimiser l&apos;expérience
          utilisateur et la navigation. L&apos;interface responsive a été
          réalisée à partir de maquettes Figma. Les défis incluaient la gestion
          du routage, la création de composants réutilisables, l&apos;animation
          des menus déroulants et la galerie d&apos;images interactive.
        </div>
        <SkillsSpans skills={skills} />
        <GithubLink
          githubLink="https://github.com/eleapmgt/kasa-website"
          aria-label="Voir le code source de Kasa Website sur GitHub"
        />
      </div>

      {/* Image for mobile and tablet */}
      <motion.div
        id="workcard-img"
        className="flex w-full items-center justify-center tablet:h-full tablet:w-1/3 desktop:hidden"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.07 : 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <picture className="tablet:h-full tablet:w-auto">
          <source
            media="(min-width: 768px)"
            srcSet="/assets/images/works-grid/kasa/kasa-preview.webp"
          />
          <img
            src="/assets/images/works-grid/kasa/kasa-mobile.webp"
            alt="Preview de Kasa Website"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </picture>
      </motion.div>

      {/* Video for desktop */}
      <div
        id="card-video"
        className="hidden desktop:flex desktop:h-full desktop:w-full desktop:flex-1 desktop:items-center desktop:justify-center"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-white shadow-sm dark:grayscale-[5%] tablet:h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            className="h-full w-auto p-6 tablet:h-auto desktop:p-12"
            loop={false}
            muted
            playsInline
            aria-label="Vidéo de présentation du site Kasa"
          >
            <source src={VideoKasa} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </article>
  );
};

export default LastWorkCard;
