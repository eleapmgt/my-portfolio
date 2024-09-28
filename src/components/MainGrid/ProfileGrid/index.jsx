import ProfileGridMobile from './ProfileGridMobile';
import ProfileGridTablet from './ProfileGridTablet';
import ProfileGridDesktop from './ProfileGridDesktop';

const ProfileGrid = () => {
  return (
    <section id="profile-grid">
      {/* Version mobile */}
      <ProfileGridMobile />

      {/* Version tablet */}
      <ProfileGridTablet />

      {/* Version desktop */}
      <ProfileGridDesktop />
    </section>
  );
};

export default ProfileGrid;
