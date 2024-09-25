import MapCard from '../../MapCard';
import ProfileCard from '../../ProfileCard';
import IconCard from '../../IconCard';
import CurriculumCard from '../../CurriculumCard';
import TogglerCard from '../../TogglerCard';
import EducationCard from '../../EducationCard';
import SkillsCard from '../../SkillsCard';
import SummaryLastProjectCard from '../../SummaryLastProjectCard';
import ContactFormModal from '../../ContactFormModal';

const ProfileGrid = () => {
  return (
    <section
      id="profile-grid"
      className="grid w-full grid-cols-11 grid-rows-[repeat(7,_6.7rem)] gap-5"
    >
      <ProfileCard />
      <div className="col-span-2 row-span-3 grid h-full w-full grid-cols-1 grid-rows-2 gap-5">
        <MapCard />
        <ContactFormModal />
      </div>
      <div className="col-span-4 row-span-3 grid h-full w-full grid-cols-1 grid-rows-2 gap-5">
        <CurriculumCard />
        <TogglerCard />
      </div>
      <SkillsCard />
      <EducationCard />
      <div className="col-span-2 row-span-3 grid h-full w-full grid-cols-1 grid-rows-2 gap-5">
        <IconCard
          iconRef="https://github.com/eleapmgt"
          iconSrc="/icons/github-black.png"
          description="Icône de Github"
        />
        <IconCard
          iconRef="https://www.linkedin.com/in/elea-pimouguet/"
          iconSrc="/icons/linkedin-black.png"
          description="Icône de Linkedin"
        />
      </div>
      <SummaryLastProjectCard />
    </section>
  );
};

export default ProfileGrid;
