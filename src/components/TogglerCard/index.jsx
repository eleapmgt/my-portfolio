import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

const TogglerCard = () => {
  const [theme, setTheme] = useState('light');

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
        className={`relative flex-1 flex items-center justify-center ${theme === 'light' ? 'bg-white shadow-sm h-full rounded-2xl' : ''}`}
        onClick={toggleTheme}
      >
        <SunIcon />
      </button>
      <button
        className={`relative flex-1 flex items-center justify-center ${theme === 'dark' ? 'bg-white shadow-sm h-full rounded-2xl' : ''}`}
        onClick={toggleTheme}
      >
        <MoonIcon />
      </button>
    </div>
  );
};

export default TogglerCard;
