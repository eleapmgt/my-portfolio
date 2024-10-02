import { useState, useContext } from 'react';
import { HyperText } from '../../animations/HyperTextAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import Earth from './Globe';

const MapCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const handleMouseEnter = () => {
    setTriggerAnimation((prev) => !prev);
  };

  return (
    <>
      <article
        className={`${isDarkMode ? 'desktop:custom-card-dark' : 'desktop:custom-card'} hidden desktop:col-span-1 desktop:row-span-1 desktop:flex desktop:items-center desktop:justify-center desktop:overflow-hidden`}
        onMouseEnter={handleMouseEnter}
        aria-label="Carte animée représentant Bordeaux avec ses coordonnées"
      >
        <div className="absolute left-7 top-5 z-10 font-mono uppercase">
          Bordeaux
        </div>
        <div className="absolute left-7 top-9 z-10">
          <HyperText
            text="44.8378, -0.5792"
            triggerAnimation={triggerAnimation}
            className="text-[10px] italic"
          />
        </div>
        <div className="absolute -bottom-9 -right-6 h-full w-full">
          <Earth size={300} />
        </div>
      </article>
    </>
  );
};

export default MapCard;
