import { useState, useEffect } from 'react';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

const TogglerCard = () => {
  const [theme, setTheme] = useState('light');
  const [isSunHovered, setIsSunHovered] = useState(false);
  const [isMoonHovered, setIsMoonHovered] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="tablet:custom-card hidden tablet:col-span-1 tablet:row-span-1 tablet:flex tablet:h-full tablet:items-center tablet:p-2">
      <button
        className={`sun-button relative flex h-full w-full flex-1 items-center justify-center ${theme === 'light' ? 'rounded-2xl bg-white shadow-sm' : ''}`}
        onClick={toggleTheme}
        onMouseEnter={() => setIsSunHovered(true)}
        onMouseLeave={() => setIsSunHovered(false)}
      >
        <SunIcon isHovered={isSunHovered} />
      </button>
      <button
        className={`moon-button relative flex h-full w-full flex-1 items-center justify-center ${theme === 'dark' ? 'rounded-2xl bg-white shadow-sm' : ''}`}
        onClick={toggleTheme}
        onMouseEnter={() => setIsMoonHovered(true)}
        onMouseLeave={() => setIsMoonHovered(false)}
      >
        <MoonIcon isHovered={isMoonHovered} />
      </button>
    </div>
  );
};

export default TogglerCard;
