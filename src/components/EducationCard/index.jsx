import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoursesData from '/src/data/courses.json';

const EducationCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const courses = CoursesData;

  const nextCourse = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const prevCourse = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + courses.length) % courses.length
    );
  };

  return (
    <section className="section-education col-span-4 row-span-4 flex flex-col items-center justify-between p-10 custom-card space-y-1 relative">
      <h2 className="text-xl uppercase font-semibold">Formations</h2>
      <div className="course-container flex flex-col w-full relative">
        <div className="flex items-center justify-center h-32 pb-4">
          <AnimatePresence mode="wait">
            <motion.div
              className="flex flex-col space-y-2 items-center"
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={courses[currentIndex].icon}
                alt={`Icône de la formation ${courses[currentIndex].organisation}`}
                className=" h-12 w-12 rounded-xl"
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
            className="h-40
          overflow-y-auto"
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            <p className="leading-relaxed text-justify hyphens-auto mx-5">
              {courses[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="courses-slider flex space-x-3 mt-4">
        {courses.map((_, index) => (
          <motion.button
            key={index}
            className="w-2.5 h-2.5 rounded-full bg-gray-300"
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
        className="absolute left-0 top-0 w-1/2 h-full cursor-left"
        onClick={prevCourse}
      />
      <div
        className="absolute right-0 top-0 w-1/2 h-full cursor-right"
        onClick={nextCourse}
      />
    </section>
  );
};

export default EducationCard;
