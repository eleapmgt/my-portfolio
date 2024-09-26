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
        className="col-span-1 row-span-1 flex justify-center items-center custom-card"
      >
        <motion.img
          src="/icons/mail-black.png"
          alt="Icône de mail pour accéder au formulaire de contact"
          className="w-16 h-16"
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
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50"
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
              className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full space-y-6 z-50 relative"
            >
              <CloseIcon onClick={toggleModal} />
              <h2 className="text-2xl font-semibold text-left">Me contacter</h2>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-md font-medium block mb-2"
                  >
                    Adresse e-mail
                  </label>
                  <div className="flex items-center space-y-1">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute ml-3" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none transition duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-md font-medium block mb-2"
                  >
                    Message
                  </label>
                  <div className="flex items-start space-y-1">
                    <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mt-3 text-gray-400 absolute ml-3" />
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none transition duration-200 resize-none"
                      placeholder="Votre message ici..."
                    />
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-gray-500 focus:ring-opacity-50 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </div>
              </form>
              {state.succeeded && (
                <div className="text-green-800 font-semibold">
                  Merci pour votre message !
                </div>
              )}
              {state.errors && (
                <div role="alert" className="text-red-500 text-sm mt-2">
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
      className={`fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`}
    ></motion.div>
  );
};

const CloseIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="z-[51] absolute right-10 top-8">
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
        className="text-black h-5 w-5"
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
