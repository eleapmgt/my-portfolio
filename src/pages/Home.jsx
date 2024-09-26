import ProfileGrid from '../components/MainGrid/ProfileGrid';
import WorksGrid from '../components/MainGrid/WorksGrid';
import Footer from '../components/Footer';

function Home() {
  return (
    <div
      id="grids-wrapper"
      className="flex flex-col max-w-[1200px] mx-auto tablet:my-[4rem] tablet:gap-5"
    >
      <ProfileGrid />
      <WorksGrid />
      <Footer />
    </div>
  );
}

export default Home;
