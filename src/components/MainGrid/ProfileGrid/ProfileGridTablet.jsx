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
        <div id="tablet-profile" className="h-[350px]">
          <ProfileCard />
        </div>
        <div id="tablet-msg" className="h-[175px]">
          <ContactFormModal />
        </div>
        <div id="tablet-summmary-project" className="h-[350px]">
          <SummaryLastProjectCard />
        </div>
      </div>
      <div id="tablet-right-side" className="flex w-1/2 flex-col gap-3">
        <div id="tablet-cv-skills" className="flex h-[350px] flex-col gap-3">
          <div className="h-1/2">
            <CurriculumCard />
          </div>
          <div className="h-1/2">
            <SkillsCard />
          </div>
        </div>
        <div
          id="tablet-github-linkedin"
          className="grid h-[175px] grid-cols-2 grid-rows-1 gap-3"
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
        <div id="tablet-education" className="h-[350px]">
          <EducationCard />
        </div>
      </div>
    </div>
  );
};

export default ProfileGridTablet;
