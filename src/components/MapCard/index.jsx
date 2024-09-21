import Lottie from 'react-lottie-player';
import pinAnimation from '/src/animations/pin-animation.json';

const MapCard = () => {
  return (
    <>
      <div className="col-span-1 row-span-1 custom-card overflow-hidden relative">
        <img
          src="/assets/images/profile-grid/bordeaux-map.png"
          alt="Bordeaux's map"
          className="w-full h-full object-cover"
        />
        <div className="bg-white bg-fixed absolute bottom-0 w-full h-[3.1rem] flex items-center pl-[1rem]">
          <Lottie
            loop
            animationData={pinAnimation}
            play
            style={{ height: '24px', width: '24px' }}
          />
          <span className="uppercase font-semibold pl-1.5 pt-1">Bordeaux</span>
        </div>
      </div>
    </>
  );
};

export default MapCard;
