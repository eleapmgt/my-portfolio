import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ProfileCard = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${isDarkMode ? 'custom-card-dark' : 'custom-card'} flex h-[calc(2*(100vh-60px)/5)] items-center justify-center tablet:col-span-5 tablet:row-span-3 tablet:h-full tablet:w-full`}
    >
      <div className="profile-card-wrapper m-5 flex flex-col items-center justify-center gap-2">
        <img
          src="/assets/images/elea-pimouguet-profile.webp"
          alt="Avatar"
          loading="lazy"
          className="mb-2 h-20 w-20 rounded-full shadow-2xl tablet:h-32 tablet:w-32"
        />
        <h1 className="text-3xl font-semibold uppercase tablet:pt-2 tablet:text-4xl">
          Elea Pimouguet
        </h1>
        <h2 className="text-lg tablet:pb-4 tablet:text-xl">
          Développeuse Web Full Stack
        </h2>
        <div className="workstatus flex items-center">
          <span className="relative mr-2 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-500"></span>
          </span>
          <span className="text-base">Available for work</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
