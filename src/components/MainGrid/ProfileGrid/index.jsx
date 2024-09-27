import MapCard from '../../MapCard';
import ProfileCard from '../../ProfileCard';
import IconCard from '../../IconCard';
import CurriculumCard from '../../CurriculumCard';
import TogglerCard from '../../TogglerCard';
import EducationCard from '../../EducationCard';
import SkillsCard from '../../SkillsCard';
import SummaryLastProjectCard from '../../SummaryLastProjectCard';
import ContactFormModal from '../../ContactFormModal';
import ProfileGridMobile from './ProfileGridMobile';

const ProfileGrid = () => {
  return (
    <section
      id="profile-grid"
      className="mx-3 flex flex-col gap-3 tablet:m-0 tablet:grid tablet:w-full tablet:grid-cols-11 tablet:grid-rows-[repeat(7,_6.7rem)] tablet:gap-5"
    >
      <ProfileCard />
      <ProfileGridMobile />
      <div
        id="map-contact-wrapper"
        className="hidden justify-center tablet:col-span-2 tablet:row-span-3 tablet:grid tablet:h-full tablet:w-full tablet:grid-cols-1 tablet:grid-rows-2 tablet:justify-normal tablet:gap-5"
      >
        <MapCard />
        <ContactFormModal />
      </div>
      <div
        id="cv-toggler-wrapper"
        className="hidden tablet:col-span-4 tablet:row-span-3 tablet:grid tablet:h-full tablet:w-full tablet:grid-cols-1 tablet:grid-rows-2 tablet:gap-5"
      >
        <CurriculumCard />
        <TogglerCard />
      </div>
      <SkillsCard />
      <EducationCard />
      <div className="tablet-auto hidden tablet:col-span-2 tablet:row-span-3 tablet:grid tablet:h-full tablet:w-full tablet:grid-cols-1 tablet:grid-rows-2 tablet:gap-5">
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
