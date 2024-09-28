import ProfileGrid from '../components/MainGrid/ProfileGrid';
import WorksGrid from '../components/MainGrid/WorksGrid';
import Footer from '../components/Footer';

function Home() {
  return (
    <div
      id="grids-wrapper"
      className="mx-auto my-3 flex max-w-[1200px] flex-col gap-3 desktop:my-[4rem] desktop:mb-3 desktop:mt-[4rem] desktop:gap-5"
    >
      <ProfileGrid />
      <WorksGrid />
      <Footer />
    </div>
  );
}

export default Home;
