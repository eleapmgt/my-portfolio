import MapCard from '../MapCard';
import ProfileCard from '../ProfileCard';
import IconCard from '../IconCard';
import CurriculumCard from '../CurriculumCard';
import TogglerCard from '../TogglerCard';
import EducationCard from '../EducationCard';
import SkillsCard from '../SkillsCard';
import LastProjectCard from '../LastProjectCard';

const Grid = () => {
  return (
    <div
      id="grids-wrapper"
      className="flex flex-col max-w-[1200px] min-w-[1200px] mx-auto my-[4rem] gap-5"
    >
      <section
        id="profile-grid"
        className="grid w-full grid-cols-11 grid-rows-[repeat(7,_6.7rem)] gap-5"
      >
        <ProfileCard />
        <div className="col-span-2 row-span-3 grid h-full w-full grid-cols-1 grid-rows-2 gap-5">
          <MapCard />
          <IconCard
            iconSrc="/icons/mail-black.png"
            description="Icône de contact par mail"
          />
        </div>
        <div className="col-span-4 row-span-3 grid h-full w-full grid-cols-1 grid-rows-2 gap-5">
          <CurriculumCard />
          <TogglerCard />
        </div>
        <SkillsCard />
        <EducationCard />
        <div className="col-span-2 row-span-3 grid h-full w-full grid-cols-1 grid-rows-2 gap-5">
          <IconCard
            colSpan="col-span-2"
            iconSrc="/icons/github-black.png"
            description="Icône de Github"
          />
          <IconCard
            colSpan="col-span-2"
            iconSrc="/icons/linkedin-black.png"
            description="Icône de Linkedin"
          />
        </div>
        <LastProjectCard />
      </section>
      <section
        id="works-grid"
        className="grid w-full grid-cols-9 grid-rows-[repeat(9,_7rem)] gap-5"
      >
        <div className="w-full h-full col-span-9 row-span-3 custom-card"></div>
        <div className="w-full h-full col-span-3 row-span-6 custom-card"></div>
        <div className="w-full h-full col-span-6 row-span-3 custom-card"></div>
        <div className="w-full h-full col-span-6 row-span-3 custom-card"></div>
      </section>
    </div>
  );
};

export default Grid;
