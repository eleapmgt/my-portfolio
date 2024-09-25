import { motion } from 'framer-motion';
import GithubIcon from '../GithubIcon';

const GithubLink = ({ githubLink }) => {
  return (
    <motion.a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Lien vers le compte GitHub"
      className="inline-flex items-end text-gray-700 hover:text-gray-900 transition-colors gap-2 pt-2"
      style={{
        transformStyle: 'preserve-3d',
        transform: 'translateZ(0)',
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 10,
        },
      }}
    >
      <GithubIcon />
      <span className="text-base relative top-1">Voir sur GitHub</span>
    </motion.a>
  );
};

export default GithubLink;
