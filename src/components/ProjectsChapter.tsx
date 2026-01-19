import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import projectImg1 from "../assets/Digital-Finance-Management-Platform.png";
import projectImg2 from "../assets/Mentorship-&-Learning-Platform.png";
import projectImg3 from "../assets/Fitness-&-Training-Marketplace-Platform.png";
import projectImg4 from "../assets/Project&Resource-Management-System.png";

const projects = [
  {
    title: "Digital Finance Management Platform",
    description: "Designed polished user interfaces with micro-interactions, visual graphics, and animations across web and mobile experiences to build trust and clarity.",
    focusAreas: ["Interface Design", "Design Systems", "Prototyping"],
    image: projectImg1,
  },
  {
    title: "Mentorship & Learning Platform",
    description: "Built reusable UI components, design system, and interactive prototypes to support scalable learning experiences and consistent product growth.",
    focusAreas: ["Design Systems", "Prototyping", "Interface Design"],
    image: projectImg2,
  },
  {
    title: "Fitness & Training Marketplace Platform",
    description: "Defined user flows, wireframes, and user journey maps to create adaptive experiences optimized for multiple devices and user scenarios.",
    focusAreas: ["UX Strategy", "Interface Design", "Prototyping"],
    image: projectImg3,
  },
  {
    title: "Project & Resource Management System",
    description: "Conducted user research and analysis to design minimal, responsive UI and functional prototypes aligned with internal user needs and workflows.",
    focusAreas: ["UX Strategy", "Interface Design", "Prototyping"],
    image: projectImg4,
  }
];

export default function ProjectsChapter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
            Featured Projects
          </h2>
        </motion.div>

        {/* Main Project Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Desktop Layout */}
            <div className="hidden md:block">
              {/* Title & Navigation Row */}
              <div className="flex items-center justify-between mb-8">
                {/* Project Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight max-w-2xl"
                >
                  {currentProject.title}
                </motion.h3>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={goToPrev}
                    className="group p-3 rounded-full border border-slate-300 hover:border-slate-800 hover:bg-slate-800 transition-all duration-300"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="group p-3 rounded-full border border-slate-300 hover:border-slate-800 hover:bg-slate-800 transition-all duration-300"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>

              {/* Image & Metadata Row */}
              <div className="grid grid-cols-12 gap-12 lg:gap-16">
                {/* Left: Project Image */}
                <div className="col-span-8">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative w-full"
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Right: Metadata Stack */}
                <div className="col-span-4 flex flex-col justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-8"
                  >
                    {/* Focus Areas */}
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Focus Areas</p>
                      <div className="space-y-2">
                        {currentProject.focusAreas.map((area, idx) => (
                          <p key={idx} className="text-slate-700">{area}</p>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {currentProject.description}
                      </p>
                    </div>

                    {/* Project Counter */}
                    <div className="text-sm text-slate-400 pt-4">
                      <span className="text-slate-800 font-medium">
                        {String(currentIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="mx-1">/</span>
                      <span>{String(projects.length).padStart(2, '0')}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-8">
              {/* Project Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-slate-800 leading-tight"
              >
                {currentProject.title}
              </motion.h3>

              {/* Project Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Focus Areas */}
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Focus Areas</p>
                <div className="space-y-2">
                  {currentProject.focusAreas.map((area, idx) => (
                    <p key={idx} className="text-slate-700">{area}</p>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Project Counter */}
              <div className="text-sm text-slate-400">
                <span className="text-slate-800 font-medium">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="mx-1">/</span>
                <span>{String(projects.length).padStart(2, '0')}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Mobile Only */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-12">
          <button
            onClick={goToPrev}
            className="group p-3 rounded-full border border-slate-300 hover:border-slate-800 hover:bg-slate-800 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
          </button>
          
          <button
            onClick={goToNext}
            className="group p-3 rounded-full border border-slate-300 hover:border-slate-800 hover:bg-slate-800 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}