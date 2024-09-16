const Map = () => {
  return (
    <>
      <div className="col-span-1 row-span-1 custom-card overflow-hidden relative">
        <img
          src="/assets/images/bordeaux-map.png"
          alt="Bordeaux's map"
          className="w-full h-full object-cover"
        />
        <div className="p-[0.7rem] bg-white absolute bottom-0 w-full flex items-center pl-[2.5rem]">
          <div
            className="absolute top-[0.6rem] left-3"
            dangerouslySetInnerHTML={{
              __html: `
              <lord-icon
                src="https://cdn.lordicon.com/iikoxwld.json"
                trigger="loop"
                delay="2000"
                colors="primary:#dc143c"
                style="width:24px;height:24px"
              </lord-icon>
            `,
            }}
          />
          <span className="uppercase font-semibold">Bordeaux</span>
        </div>
      </div>
    </>
  );
};

export default Map;
