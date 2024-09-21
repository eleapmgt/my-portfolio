import LastWorkCard from '../../WorksCard/LastWorkCard';

const WorkGrid = () => {
  return (
    <section
      id="works-grid"
      className="grid w-full grid-cols-9 grid-rows-[repeat(9,_7rem)] gap-5"
    >
      <LastWorkCard />
      <div className="w-full h-full col-span-3 row-span-6 custom-card"></div>
      <div className="w-full h-full col-span-6 row-span-3 custom-card"></div>
      <div className="w-full h-full col-span-6 row-span-3 custom-card"></div>
    </section>
  );
};

export default WorkGrid;
