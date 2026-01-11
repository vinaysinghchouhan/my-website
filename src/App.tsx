import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './components/ui/button';
import IntroChapter from './components/IntroChapter';
import SkillsChapter from './components/SkillsChapter';
import ProjectsChapter from './components/ProjectsChapter';
import ExperienceChapter from './components/ExperienceChapter';
import ContactChapter from './components/ContactChapter';

const chapters = [
  { id: 'intro', title: 'Introduction', component: IntroChapter },
  { id: 'skills', title: 'Skills', component: SkillsChapter },
  { id: 'projects', title: 'Projects', component: ProjectsChapter },
  { id: 'experience', title: 'Experience', component: ExperienceChapter },
  { id: 'contact', title: 'Contact', component: ContactChapter },
];

export default function App() {
  const [currentChapter, setCurrentChapter] = useState(0);

  // Set document title
  useEffect(() => {
    document.title = 'Vinay Singh Chouhan – Design Lead';
  }, []);

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      // Reset scroll position to top
      window.scrollTo(0, 0);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      // Reset scroll position to top
      window.scrollTo(0, 0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        nextChapter();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevChapter();
      } else if (event.key >= '1' && event.key <= '5') {
        const chapterIndex = parseInt(event.key) - 1;
        if (chapterIndex >= 0 && chapterIndex < chapters.length) {
          setCurrentChapter(chapterIndex);
          // Reset scroll position to top for direct chapter navigation
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapter]);



  const CurrentComponent = chapters[currentChapter].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-600"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentChapter + 1) / chapters.length) * 100}%` }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </div>

      {/* Chapter Indicator */}
      <div className="fixed top-6 left-6 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <span className="text-sm font-medium text-slate-600">
            {currentChapter + 1} / {chapters.length}
          </span>
        </div>
      </div>

      {/* Chapter Title */}
      <div className="fixed top-6 right-6 z-40">
        <motion.div
          key={currentChapter}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg"
        >
          <span className="text-sm font-medium text-slate-700">
            {chapters[currentChapter].title}
          </span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.23, 1, 0.32, 1],
              staggerChildren: 0.1
            }}
            className="w-full max-w-6xl"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevChapter}
            disabled={currentChapter === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="flex gap-2">
            {chapters.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentChapter(index);
                  // Reset scroll position to top when clicking dots
                  window.scrollTo(0, 0);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentChapter 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextChapter}
            disabled={currentChapter === chapters.length - 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>


    </div>
  );
}