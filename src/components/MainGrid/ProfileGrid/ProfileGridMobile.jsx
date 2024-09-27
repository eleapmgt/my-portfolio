import ContactFormModal from '../../ContactFormModal';
import IconCard from '../../IconCard';
import CurriculumCardMobile from '../../CurriculumCard/CurriculumCardMobile';

const ProfileGridMobile = () => {
  return (
    <div className="flex min-w-full flex-col gap-3 tablet:hidden">
      <CurriculumCardMobile />
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
    </div>
  );
};

export default ProfileGridMobile;
