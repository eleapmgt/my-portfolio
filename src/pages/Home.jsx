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
      {console.log('isDarkMode', isDarkMode)}
      {isDarkMode ? <Background /> : null}
      <div
        id="grids-wrapper"
        className="mx-auto my-3 flex max-w-[1200px] flex-col gap-3 desktop:my-[4rem] desktop:mb-3 desktop:mt-[4rem] desktop:gap-5 dark:text-[#f7fff7]"
      >
        <ProfileGrid />
        <WorksGrid />
        <Footer />
      </div>
    </>
  );
};

export default Home;
