import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import {
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

const ContactFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [state, handleSubmit] = useForm('mjkbqqde');
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useOutsideClick(modalRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <>
      <motion.button
        onClick={toggleModal}
        animate="initial"
        whileHover="hover"
        className="custom-card flex h-full w-full items-center justify-center tablet:col-span-1 tablet:row-span-1"
      >
        <motion.img
          src="/icons/mail-black.png"
          alt="Icône de mail pour accéder au formulaire de contact"
          className="h-16 w-16"
          variants={{
            initial: {
              rotate: 0,
              transition: { duration: 0.3, ease: 'easeOut' },
            },
            hover: {
              rotate: [0, -5, 5, -5],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'mirror',
              },
            },
          }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20"
          >
            <Overlay />
            <motion.div
              ref={modalRef}
              initial={{
                opacity: 0,
                scale: 0.5,
                rotateX: 40,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 15 }}
              className="relative z-50 w-full max-w-lg space-y-6 rounded-3xl bg-white p-10 shadow-xl"
            >
              <CloseIcon onClick={toggleModal} />
              <h2 className="text-left text-2xl font-semibold">Me contacter</h2>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-md mb-2 block font-medium"
                  >
                    Adresse e-mail
                  </label>
                  <div className="flex items-center space-y-1">
                    <EnvelopeIcon className="absolute ml-3 h-5 w-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-gray-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-md mb-2 block font-medium"
                  >
                    Message
                  </label>
                  <div className="flex items-start space-y-1">
                    <ChatBubbleBottomCenterTextIcon className="absolute ml-3 mt-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 pl-10 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-gray-200"
                      placeholder="Votre message ici..."
                    />
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full transform rounded-lg bg-gray-600 px-4 py-2 text-white transition duration-200 ease-in-out hover:-translate-y-1 hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-gray-500 focus:ring-opacity-50"
                  >
                    {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </div>
              </form>
              {state.succeeded && (
                <div className="font-semibold text-green-800">
                  Merci pour votre message !
                </div>
              )}
              {state.errors && (
                <div role="alert" className="mt-2 text-sm text-red-500">
                  Une erreur s&apos;est produite. Veuillez vérifier vos
                  informations et réessayer.
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Overlay = ({ className }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: 'blur(10px)',
      }}
      exit={{
        opacity: 0,
        backdropFilter: 'blur(0px)',
      }}
      className={`fixed inset-0 z-50 h-full w-full bg-black bg-opacity-50 ${className}`}
    ></motion.div>
  );
};

const CloseIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute right-10 top-8 z-[51]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default ContactFormModal;
