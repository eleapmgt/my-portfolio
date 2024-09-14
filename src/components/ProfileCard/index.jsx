const ProfileCard = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center col-span-5 row-span-3 custom-card">
      <img
        src="./icons/profile-icon.png"
        alt="Avatar"
        className="h-32 w-32 border-4 rounded-full border-white shadow-md"
      />
      <h1 className="pt-8 text-4xl uppercase font-semibold tracking-wide">
        Elea Pimouguet
      </h1>
      <h2 className="text-xl pb-7">Développeuse Web Full Stack</h2>
      <div className="workstatus flex items-center">
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
        </span>
        <span>Available for work</span>
      </div>
    </div>
  );
};

export default ProfileCard;
