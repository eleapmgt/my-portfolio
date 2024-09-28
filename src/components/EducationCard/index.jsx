import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoursesData from '/src/data/courses.json';

const EducationCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const courses = CoursesData;

  const nextCourse = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const prevCourse = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + courses.length) % courses.length
    );
  };

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <section
      id="section-education"
      className="custom-card relative flex flex-col items-center justify-between space-y-4 p-10 tablet:h-full tablet:justify-center tablet:space-y-2 desktop:col-span-4 desktop:row-span-4 desktop:justify-between"
    >
      <h2 className="py-4 text-xl font-semibold uppercase tablet:py-0 desktop:py-2">
        Formations
      </h2>
      <div
        id="courses-container"
        className="relative flex w-full flex-col tablet:h-4/5"
      >
        <div
          id="courses-title"
          className="flex items-center justify-center pb-4 tablet:h-1/3 tablet:pb-0 desktop:h-32 desktop:pb-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              className="flex flex-col items-center space-y-6 tablet:flex-row tablet:gap-4 tablet:space-y-0 desktop:flex-col desktop:gap-0 desktop:space-y-6"
              key={currentIndex}
              initial={isFirstRender ? {} : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={courses[currentIndex].icon}
                alt={`Icône de la formation ${courses[currentIndex].organisation}`}
                className="h-12 w-12 rounded-xl"
              />
              <div className="flex flex-col items-center tablet:items-start desktop:items-center">
                <h3 className="font-semibold">
                  {courses[currentIndex].organisation}
                </h3>
                <span>
                  <span>
                    {courses[currentIndex].title &&
                      `${courses[currentIndex].title} - `}
                    {courses[currentIndex].year}
                  </span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            id="courses-description"
            className="mb-2 flex items-center overflow-y-auto tablet:h-2/3 desktop:h-40"
            key={currentIndex}
            initial={isFirstRender ? {} : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            <p className="mx-5 hyphens-auto text-justify leading-relaxed">
              {courses[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div id="courses-slider" className="flex space-x-3 tablet:mt-0">
        {courses.map((_, index) => (
          <motion.button
            key={index}
            className="h-2.5 w-2.5 rounded-full bg-gray-300"
            animate={{
              scale: index === currentIndex ? 1.5 : 1,
              backgroundColor: index === currentIndex ? '#5F084C' : '#D1D5DB',
            }}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller à la formation ${index + 1}`}
          />
        ))}
      </div>

      {/* Curseurs gauche et droite */}
      <div
        className="cursor-left absolute left-0 top-0 h-full w-1/2"
        onClick={prevCourse}
      />
      <div
        className="cursor-right absolute right-0 top-0 h-full w-1/2"
        onClick={nextCourse}
      />
    </section>
  );
};

export default EducationCard;
