import ProfileGrid from '../components/MainGrid/ProfileGrid';
import WorksGrid from '../components/MainGrid/WorksGrid';

function Home() {
  return (
    <div
      id="grids-wrapper"
      className="flex flex-col max-w-[1200px] min-w-[1200px] mx-auto my-[4rem] gap-5"
    >
      <ProfileGrid />
      <WorksGrid />
    </div>
  );
}

export default Home;
