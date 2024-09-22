import GithubIcon from '../GithubIcon';

const LastWorkCard = () => {
  const skills = ['React', 'React Router', 'JavaScript', 'Sass', 'Responsive'];

  return (
    <div className="w-full h-full col-span-9 row-span-3 custom-card relative flex flex-row items-center justify-between">
      <div className="w-1/2 flex flex-col items-start justify-center pl-20 space-y-3 text-justify">
        <div>
          <h2 className="font-semibold text-2xl uppercase">Kasa Website</h2>
          <p className="text-base text-gray-700">
            Plateforme de location immobilière
          </p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed pb-3">
          Le projet consistait à développer le front-end de l'application avec
          React et React Router pour optimiser l'expérience utilisateur et la
          navigation. L'interface responsive a été réalisée à partir de
          maquettes Figma. Les défis incluaient la gestion du routage, la
          création de composants réutilisables, l'animation des menus déroulants
          et la galerie d'images interactive.
        </p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="inline-flex items-end text-gray-700 hover:text-gray-900 transition-colors gap-2 pt-2"
        >
          <GithubIcon />
          <span className="text-base relative top-1">Voir sur GitHub</span>
        </a>
      </div>
      <div className="h-full flex items-center w-1/2">
        <img
          className="h-full mx-auto"
          src="assets/images/works-grid/kasa-card.png"
          alt="Preview du projet Kasa"
        />
      </div>
    </div>
  );
};

export default LastWorkCard;
