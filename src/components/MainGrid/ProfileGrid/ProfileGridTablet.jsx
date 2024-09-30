import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import ContactFormModal from '../../ContactFormModal';
import IconCard from '../../IconCard';
import SkillsCard from '../../SkillsCard';
import EducationCard from '../../EducationCard';
import ProfileCard from '../../ProfileCard';
import CurriculumCard from '../../CurriculumCard';
import SummaryLastProjectCard from '../../SummaryLastProjectCard';

const ProfileGridTablet = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      id="profile-grid-tablet"
      className="hidden tablet:mx-3 tablet:flex tablet:flex-row tablet:gap-3 desktop:hidden"
    >
      <div id="tablet-left-side" className="flex w-1/2 flex-col gap-3">
        <div id="tablet-profile" className="h-[calc(2*(100vh-48px)/5)]">
          <ProfileCard />
        </div>
        <div id="tablet-msg" className="h-[calc((100vh-48px)/5)]">
          <ContactFormModal />
        </div>
        <div
          id="tablet-summmary-project"
          className="h-[calc(2*(100vh-48px)/5)]"
        >
          <SummaryLastProjectCard />
        </div>
      </div>
      <div id="tablet-right-side" className="flex w-1/2 flex-col gap-3">
        <div
          id="tablet-cv-skills"
          className="flex h-[calc(2*(100vh-48px)/5)] flex-col gap-3"
        >
          <CurriculumCard />
          <SkillsCard />
        </div>
        <div
          id="tablet-github-linkedin"
          className="grid h-[calc((100vh-48px)/5)] grid-cols-2 grid-rows-1 gap-3"
        >
          <IconCard
            iconRef="https://github.com/eleapmgt"
            iconSrc={`${isDarkMode ? '/icons/github-white.png' : '/icons/github-black.png'}`}
            description="Icône de Github"
          />
          <IconCard
            iconRef="https://www.linkedin.com/in/elea-pimouguet/"
            iconSrc={`${isDarkMode ? '/icons/linkedin-white.png' : '/icons/linkedin-black.png'}`}
            description="Icône de Linkedin"
          />
        </div>
        <div id="tablet-education" className="h-[calc(2*(100vh-48px)/5)]">
          <EducationCard />
        </div>
      </div>
    </div>
  );
};

export default ProfileGridTablet;
