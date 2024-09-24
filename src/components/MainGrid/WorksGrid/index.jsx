import LastWorkCard from '../../WorksCard/LastWorkCard';
import HorizontalWorkCard from '../../WorksCard/HorizontalWorkCard';

const WorkGrid = () => {
  return (
    <section
      id="works-grid"
      className="grid w-full grid-cols-9 grid-rows-[repeat(9,_7rem)] gap-5"
    >
      <LastWorkCard />
      <div className="w-full h-full col-span-3 row-span-6 custom-card"></div>
      <HorizontalWorkCard
        title="Sophie Bluel Website"
        description="Portfolio architecte d'intérieur"
        details="Réalisation d'une page web dynamique avec une galerie de projets filtrable, une page de connexion et une interface d'administration. Les projets sont gérés via une API et une modale, avec un formulaire pour la collecte des données, tout en respectant les maquettes Figma."
        skills={['JavaScript', 'HTML/CSS', 'API', 'Figma']}
        githubLink="https://github.com/eleapmgt/Portfolio-architecte-sophie-bluel"
        imageSrc="/assets/images/works-grid/sophie-bluel-preview.png"
        customImageStyle="h-full object-cover object-[70%]"
      />
      <HorizontalWorkCard
        title="Booki Website"
        description="Page d'accueil d'une agence de voyage"
        details="Développement d'une interface responsive basée sur les maquettes Figma fournies pour desktop, tablette et mobile. Le projet se concentre sur l'intégration HTML/CSS avec un formulaire de recherche et l'optimisation du positionnement des éléments à l'aide de Flexbox."
        skills={['HTML', 'CSS', 'Responsive', 'Figma']}
        githubLink="https://github.com/eleapmgt/booki-website"
        imageSrc="/assets/images/works-grid/booki-preview.png"
        customImageStyle="object-cover h-full pl-5"
      />
    </section>
  );
};

export default WorkGrid;
