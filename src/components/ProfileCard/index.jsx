import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ProfileCard = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <article
      className={`${isDarkMode ? 'custom-card-dark' : 'custom-card'} flex h-[calc(2*(100vh-60px)/5)] items-center justify-center tablet:col-span-5 tablet:row-span-3 tablet:h-full tablet:w-full`}
      aria-labelledby="profile-name profile-title"
    >
      <div className="profile-card-wrapper m-5 flex flex-col items-center justify-center gap-2">
        <img
          src="/assets/images/elea-pimouguet-profile.webp"
          alt="Photo de profil d'Eléa Pimouguet"
          loading="lazy"
          className="mb-2 h-28 w-28 rounded-full shadow-2xl"
        />
        <h1
          id="profile-name"
          className="text-3xl font-medium uppercase tablet:pt-2 tablet:text-4xl"
        >
          Elea Pimouguet
        </h1>
        <h2
          id="profile-title"
          className="text-lg font-medium dark:font-light dark:opacity-90 tablet:pb-4 tablet:text-xl"
        >
          Développeuse web full stack
        </h2>
        <div
          className="workstatus flex items-center"
          aria-label="Disponibilité professionnelle"
        >
          <span className="relative mr-2 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-500"></span>
          </span>
          <span className="text-base dark:opacity-90">Available for work</span>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
