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
      <h2 className="text-xl">Développeuse Web Full Stack</h2>
      <div className="workstatus flex items-center pt-7">
        <div className="h-2.5 w-2.5 mt-0.5 mr-2 rounded-full bg-green-500"></div>
        <span>Available for work</span>
      </div>
    </div>
  );
};

export default ProfileCard;
