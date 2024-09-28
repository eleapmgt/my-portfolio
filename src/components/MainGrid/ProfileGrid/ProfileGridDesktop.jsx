import ContactFormModal from '../../ContactFormModal';
import CurriculumCard from '../../CurriculumCard';
import EducationCard from '../../EducationCard';
import IconCard from '../../IconCard';
import MapCard from '../../MapCard';
import ProfileCard from '../../ProfileCard';
import SkillsCard from '../../SkillsCard';
import SummaryLastProjectCard from '../../SummaryLastProjectCard';
import TogglerCard from '../../TogglerCard';

const ProfileGridDesktop = () => {
  return (
    <div
      id="profile-grid-desktop"
      className="hidden desktop:m-0 desktop:grid desktop:w-full desktop:grid-cols-11 desktop:grid-rows-[repeat(7,_6.7rem)] desktop:gap-5"
    >
      <ProfileCard />
      <div
        id="map-contact-wrapper"
        className="hidden justify-center desktop:col-span-2 desktop:row-span-3 desktop:grid desktop:h-full desktop:w-full desktop:grid-cols-1 desktop:grid-rows-2 desktop:justify-normal desktop:gap-5"
      >
        <MapCard />
        <ContactFormModal />
      </div>
      <div
        id="cv-toggler-wrapper"
        className="hidden desktop:col-span-4 desktop:row-span-3 desktop:grid desktop:h-full desktop:w-full desktop:grid-cols-1 desktop:grid-rows-2 desktop:gap-5"
      >
        <CurriculumCard />
        <TogglerCard />
      </div>
      <SkillsCard />
      <EducationCard />
      <div className="hidden desktop:col-span-2 desktop:row-span-3 desktop:grid desktop:h-full desktop:w-full desktop:grid-cols-1 desktop:grid-rows-2 desktop:gap-5">
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
    </div>
  );
};

export default ProfileGridDesktop;
