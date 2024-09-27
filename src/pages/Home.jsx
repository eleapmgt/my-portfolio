import ProfileGrid from '../components/MainGrid/ProfileGrid';
import WorksGrid from '../components/MainGrid/WorksGrid';
import Footer from '../components/Footer';

function Home() {
  return (
    <div
      id="grids-wrapper"
      className="mx-auto my-3 flex max-w-[1200px] flex-col gap-3 tablet:my-[4rem] tablet:gap-5"
    >
      <ProfileGrid />
      <WorksGrid />
      <Footer />
    </div>
  );
}

export default Home;
