import { motion } from 'motion/react';
import svgPaths from "../imports/svg-mqbbx6jpkj";
import imgImage from "figma:asset/2f1a3482c4931069e6c37f90b39ed109fe2ee445.png";

export default function IntroChapter() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto text-center space-y-8 pt-10 md:pt-0">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div 
            className="w-40 h-40 rounded-full bg-cover bg-center shadow-2xl ring-4 ring-white"
            style={{ backgroundImage: `url('${imgImage}')` }}
          />
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-slate-800 tracking-tight">
            Vinay Singh Chouhan
          </h1>
          <div className="bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-transparent">
            <h2 className="text-2xl md:text-3xl font-medium leading-relaxed">
              Design Lead
            </h2>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <blockquote className="text-lg md:text-xl text-slate-700 italic leading-relaxed">
              With 8+ years of experience, I transform complex challenges into user-focused solutions and build design systems that empower teams to move faster with consistency.
            </blockquote>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl"
          />
        </div>

        {/* Journey Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="pt-8"
        >
          <p className="text-lg text-slate-600 text-center">
            Let's dive into the work, skills, and stories that define my design journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}