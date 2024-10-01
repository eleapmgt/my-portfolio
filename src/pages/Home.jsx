import ProfileGrid from '../components/MainGrid/ProfileGrid';
import WorksGrid from '../components/MainGrid/WorksGrid';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      {isDarkMode ? <Background /> : null}
      <div
        id="grids-wrapper"
        className="mx-auto my-3 flex max-w-[1200px] flex-col gap-3 dark:text-[#f7fff7] desktop:my-[4rem] desktop:mt-[4rem] desktop:gap-5"
      >
        <ProfileGrid />
        <WorksGrid />
        <Footer />
      </div>
    </>
  );
};

export default Home;
