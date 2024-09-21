const LastWorkCard = () => {
  return (
    <div className="w-full h-full col-span-9 row-span-3 custom-card relative flex flex-row items-center justify-between">
      <div className="h-full flex items-center w-1/2">
        <img
          className="h-full mx-auto"
          src="assets/images/works-grid/kasa-card.png"
          alt="Preview du projet Kasa"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center">
        <h2 className="font-semibold text-2xl">Projet Kasa</h2>
        <p className="text-sm">Application de location d'appartements</p>
        <p className="">Opacity</p>
      </div>
    </div>
  );
};

export default LastWorkCard;
