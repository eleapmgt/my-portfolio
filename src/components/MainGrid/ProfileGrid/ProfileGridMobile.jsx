import ContactFormModal from '../../ContactFormModal';
import IconCard from '../../IconCard';
import CurriculumCard from '../../CurriculumCard';
import ProfileCard from '../../ProfileCard';
import SkillsCard from '../../SkillsCard';
import EducationCard from '../../EducationCard';

const ProfileGridMobile = () => {
  return (
    <div
      id="profile-grid-mobile"
      className="mx-3 flex max-w-full flex-col gap-3 tablet:hidden"
    >
      <ProfileCard />
      <CurriculumCard />
      <div
        id="icons-wrapper"
        className="grid h-[calc((100vh-60px)/5)] grid-cols-3 gap-3"
      >
        <IconCard
          iconRef="https://github.com/eleapmgt"
          iconSrc="/icons/github-black.png"
          description="Icône de Github"
          className="h-full w-full"
        />
        <div className="h-full w-full">
          <ContactFormModal className="h-full w-full" />
        </div>
        <IconCard
          iconRef="https://www.linkedin.com/in/elea-pimouguet/"
          iconSrc="/icons/linkedin-black.png"
          description="Icône de Linkedin"
          className="h-full w-full"
        />
      </div>
      <SkillsCard />
      <EducationCard />
    </div>
  );
};

export default ProfileGridMobile;
