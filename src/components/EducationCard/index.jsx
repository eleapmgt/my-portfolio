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
      className="custom-card relative flex flex-col items-center justify-between space-y-4 p-10 tablet:col-span-4 tablet:row-span-4 tablet:space-y-0"
    >
      <h2 className="py-4 text-xl font-semibold uppercase tablet:py-2">
        Formations
      </h2>
      <div className="course-container relative flex w-full flex-col">
        <div className="flex h-32 items-center justify-center pb-4 tablet:pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              className="flex flex-col items-center space-y-6"
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
              <div className="flex flex-col items-center">
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
            className="h-40 overflow-y-auto"
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
      <div className="courses-slider mt-4 flex space-x-3">
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
