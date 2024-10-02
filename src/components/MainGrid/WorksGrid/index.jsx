import LastWorkCard from '../../WorksCard/LastWorkCard';
import WorkCard from '../../WorksCard/WorkCard';

const WorkGrid = () => {
  return (
    <section
      id="works-grid"
      className="mx-3 flex flex-col gap-3 desktop:m-0 desktop:grid desktop:w-full desktop:grid-cols-9 desktop:grid-rows-[repeat(9,_7rem)] desktop:gap-5"
    >
      <LastWorkCard />
      <WorkCard
        title="Mon Vieux Grimoire"
        description="Référencement et de notation de livres"
        details="Développement du back-end avec Express et MongoDB, en veillant à la sécurisation des opérations CRUD et à la gestion des authentifications et fichiers utilisateurs, avec une architecture MVC."
        skills={['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT']}
        githubLink="https://github.com/eleapmgt/Mon-Vieux-Grimoire-website"
        imageSrcDesktop="/assets/images/works-grid/mon-vieux-grimoire/mvg-preview.webp"
        imageSrcTablet="assets/images/works-grid/mon-vieux-grimoire/mvg-tablet.webp"
        imageSrcMobile="assets/images/works-grid/mon-vieux-grimoire/mvg-preview.webp"
        customImgStyle="tablet:object-[40%]"
      />
      <WorkCard
        isVertical={false}
        title="Sophie Bluel Website"
        description="Portfolio architecte d'intérieur"
        details="Réalisation d'une page web dynamique avec une galerie de projets filtrable, une page de connexion et une interface d'administration. Les projets sont gérés via une API et une modale, avec un formulaire pour la collecte des données, tout en respectant les maquettes Figma."
        skills={['JavaScript', 'HTML/CSS', 'API', 'Figma']}
        githubLink="https://github.com/eleapmgt/Portfolio-architecte-sophie-bluel"
        imageSrcDesktop="/assets/images/works-grid/sophie-bluel/sophie-bluel-preview.webp"
        imageSrcTablet="/assets/images/works-grid/sophie-bluel/sophie-bluel-preview.webp"
        imageSrcMobile="/assets/images/works-grid/sophie-bluel/sophie-bluel-mobile.webp"
      />
      <WorkCard
        isVertical={false}
        title="Booki Website"
        description="Page d'accueil d'une agence de voyage"
        details="Création d'une interface responsive basée sur les maquettes Figma fournies pour desktop, tablette et mobile. Le projet se concentre sur l'intégration HTML/CSS avec un formulaire de recherche et l'optimisation du positionnement des éléments à l'aide de Flexbox."
        skills={['HTML', 'CSS', 'Responsive', 'Figma']}
        githubLink="https://github.com/eleapmgt/booki-website"
        imageSrcDesktop="/assets/images/works-grid/booki/booki-preview.webp"
        imageSrcTablet="/assets/images/works-grid/booki/booki-preview.webp"
        imageSrcMobile="/assets/images/works-grid/booki/booki-mobile.webp"
        customImgStyle="tablet:object-[30%]"
      />
    </section>
  );
};

export default WorkGrid;
