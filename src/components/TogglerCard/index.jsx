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
    <div className="col-span-1 row-span-1 flex items-center h-full p-2 custom-card">
      <button
        className={`sun-button relative flex-1 flex h-full w-full items-center justify-center ${theme === 'light' ? 'bg-white shadow-sm rounded-2xl' : ''}`}
        onClick={toggleTheme}
        onMouseEnter={() => setIsSunHovered(true)}
        onMouseLeave={() => setIsSunHovered(false)}
      >
        <SunIcon isHovered={isSunHovered} />
      </button>
      <button
        className={`moon-button relative flex-1 flex h-full w-full items-center justify-center ${theme === 'dark' ? 'bg-white shadow-sm rounded-2xl' : ''}`}
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
