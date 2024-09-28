import { useState, useRef, useEffect } from 'react';
import SkillsSpans from '../shared/SkillsSpans';
import VideoKasa from '/assets/videos/works-grid/kasa-video.mp4';
import GithubLink from '../shared/GithubLink';

const LastWorkCard = () => {
  const skills = ['React', 'React Router', 'JavaScript', 'Sass', 'Responsive'];

  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

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
      videoRef.current.playbackRate = -1;
      videoRef.current.play();
    }
  };

  return (
    <div className="custom-card flex h-[calc(100dvh-24px)] w-full flex-col-reverse items-center overflow-hidden tablet:col-span-9 tablet:row-span-3 tablet:h-[376px] tablet:flex-row">
      <div
        id="card-text"
        className="flex h-3/5 w-full flex-col items-start justify-between space-y-3 p-6 text-justify min-[600px]:p-10 tablet:h-full tablet:w-[65%] tablet:justify-center desktop:w-7/12 desktop:p-20"
      >
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Kasa Website</h2>
          <p className="text-lg text-gray-700 tablet:text-base">
            Plateforme de location immobilière
          </p>
        </div>
        <div className="line-clamp-6 text-base leading-relaxed text-gray-600 min-[600px]:line-clamp-none tablet:pb-0 tablet:text-sm desktop:pb-3">
          Le projet consistait à développer le front-end de l&apos;application
          avec React et React Router pour optimiser l&apos;expérience
          utilisateur et la navigation. L&apos;interface responsive a été
          réalisée à partir de maquettes Figma. Les défis incluaient la gestion
          du routage, la création de composants réutilisables, l&apos;animation
          des menus déroulants et la galerie d&apos;images interactive.
        </div>
        <SkillsSpans skills={skills} />
        <GithubLink githubLink="https://github.com/eleapmgt/kasa-website" />
      </div>
      <div
        id="card-video"
        className="flex h-2/5 w-full items-center justify-center tablet:h-full tablet:flex-1"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-white shadow-sm tablet:h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            className="h-full w-auto p-6 tablet:h-auto desktop:p-12"
            loop={false}
            muted
            playsInline
          >
            <source src={VideoKasa} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </div>
  );
};

export default LastWorkCard;
