import { useState, useRef, useEffect } from 'react';
import GithubIcon from '../GithubIcon';
import VideoKasa from '/assets/videos/works-grid/kasa-video.mp4';

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
    <div className="w-full h-full col-span-9 row-span-3 custom-card flex flex-row items-center justify-between">
      <div className="w-7/12 flex flex-col items-start justify-center p-20 space-y-3 text-justify">
        <div className="space-y-1">
          <h2 className="font-semibold text-2xl">Kasa Website</h2>
          <p className="text-base text-gray-700">
            Plateforme de location immobilière
          </p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed pb-3">
          Le projet consistait à développer le front-end de l&apos;application
          avec React et React Router pour optimiser l&apos;expérience
          utilisateur et la navigation. L&apos;interface responsive a été
          réalisée à partir de maquettes Figma. Les défis incluaient la gestion
          du routage, la création de composants réutilisables, l&apos;animation
          des menus déroulants et la galerie d&apos;images interactive.
        </p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/eleapmgt/kasa-website"
          target="_blank"
          className="inline-flex items-end text-gray-700 hover:text-gray-900 transition-colors gap-2 pt-2"
        >
          <GithubIcon />
          <span className="text-base relative top-1">Voir sur GitHub</span>
        </a>
      </div>
      <div className="h-full flex flex-1 items-center justify-center p-5">
        <div
          className="bg-white h-full w-full rounded-2xl shadow-sm flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            className="w-auto h-auto p-12"
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
