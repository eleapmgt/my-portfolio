import { motion } from 'framer-motion';
import GithubIcon from '../GithubIcon';

const GithubLink = ({ githubLink }) => {
  return (
    <motion.a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Voir le code source du projet sur GitHub"
      className="inline-flex min-w-full items-end justify-center gap-2 rounded-2xl bg-black pb-6 pt-4 text-white tablet:min-w-0 tablet:justify-normal tablet:bg-transparent tablet:px-0 tablet:pb-0 tablet:pt-0 tablet:text-[#313132] desktop:pt-2"
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
      <span className="relative top-1 text-base dark:text-[#e7f5e7] dark:opacity-90">
        Voir sur GitHub
      </span>
    </motion.a>
  );
};

export default GithubLink;
