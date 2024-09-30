import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

const TogglerCard = () => {
  const [isSunHovered, setIsSunHovered] = useState(false);
  const [isMoonHovered, setIsMoonHovered] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${isDarkMode ? 'tablet:custom-card-dark' : 'tablet:custom-card'} hidden tablet:col-span-1 tablet:row-span-1 tablet:flex tablet:h-full tablet:items-center tablet:p-2`}
    >
      <button
        className={`sun-button relative flex h-full w-full flex-1 items-center justify-center ${!isDarkMode ? 'rounded-2xl bg-white shadow-sm' : ''}`}
        onClick={toggleDarkMode}
        onMouseEnter={() => setIsSunHovered(true)}
        onMouseLeave={() => setIsSunHovered(false)}
      >
        <SunIcon isHovered={isSunHovered} />
      </button>
      <button
        className={`moon-button relative flex h-full w-full flex-1 items-center justify-center ${isDarkMode ? 'rounded-2xl bg-white shadow-sm' : ''}`}
        onClick={toggleDarkMode}
        onMouseEnter={() => setIsMoonHovered(true)}
        onMouseLeave={() => setIsMoonHovered(false)}
      >
        <MoonIcon isHovered={isMoonHovered} />
      </button>
    </div>
  );
};

export default TogglerCard;
