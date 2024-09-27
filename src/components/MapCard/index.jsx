import Lottie from 'react-lottie-player';
import pinAnimation from '/src/animations/pin-animation.json';

const MapCard = () => {
  return (
    <>
      <div className="tablet:custom-card hidden tablet:relative tablet:col-span-1 tablet:row-span-1 tablet:flex tablet:overflow-hidden">
        <img
          src="/assets/images/profile-grid/bordeaux-map.png"
          alt="Bordeaux's map"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 flex h-[3.1rem] w-full items-center bg-white bg-fixed pl-[1rem]">
          <Lottie
            loop
            animationData={pinAnimation}
            play
            style={{ height: '24px', width: '24px' }}
          />
          <span className="pl-1.5 pt-1 font-semibold uppercase">Bordeaux</span>
        </div>
      </div>
    </>
  );
};

export default MapCard;
