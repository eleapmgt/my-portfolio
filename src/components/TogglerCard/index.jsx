import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

const TogglerCard = () => {
  const [isSunHovered, setIsSunHovered] = useState(false);
  const [isMoonHovered, setIsMoonHovered] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <article
      className={`${isDarkMode ? 'tablet:custom-card-dark' : 'tablet:custom-card'} hidden tablet:col-span-1 tablet:row-span-1 tablet:flex tablet:h-full tablet:items-center tablet:p-2`}
    >
      <button
        id="sun-toggle"
        className={`relative flex h-full w-full flex-1 items-center justify-center ${!isDarkMode ? 'rounded-2xl bg-white shadow-sm dark:bg-[rgba(60,60,60,0.8)]' : ''}`}
        onClick={toggleDarkMode}
        onMouseEnter={() => setIsSunHovered(true)}
        onMouseLeave={() => setIsSunHovered(false)}
        aria-label="Activer le mode clair"
        tabIndex={0}
      >
        <SunIcon isHovered={isSunHovered} />
      </button>
      <button
        id="moon-toggle"
        className={`relative flex h-full w-full flex-1 items-center justify-center ${isDarkMode ? 'rounded-2xl bg-white shadow-sm dark:bg-[rgba(60,60,60,0.8)]' : ''}`}
        onClick={toggleDarkMode}
        onMouseEnter={() => setIsMoonHovered(true)}
        onMouseLeave={() => setIsMoonHovered(false)}
        aria-label="Activer le mode sombre"
        tabIndex={0}
      >
        <MoonIcon isHovered={isMoonHovered} />
      </button>
    </article>
  );
};

export default TogglerCard;
