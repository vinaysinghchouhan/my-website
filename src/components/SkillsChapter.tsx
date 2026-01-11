import { motion } from 'motion/react';
import { Badge } from './ui/badge';

const designSkills = [
  'User Research and Analysis',
  'Empathy Maps',
  'User Personas',
  'Wireframing',
  'Interaction Design',
  'Information Architecture',
  'Design System',
  'Figma',
  'Storyboarding',
  'Journey Mapping'
];

const developmentSkills = [
  'Webflow',
  'HTML and Semantic Markup',
  'PUG Templating',
  'CSS3',
  'SASS',
  'ITCSS',
  'JavaScript & jQuery',
  'GSAP Animations',
  'Github',
  'Collaborate with the frontend team'
];

const coreCompetencies = [
  'Problem Solver',
  'Innovative Thinker',
  'Team Player',
  'Detail-Oriented',
  'Strategic Planner',
  'Collaborative Leader',
  'Strategic Thinking',
  'Creative Visionary',
  'User-Centric Approach',
  'Process Improvement',
  'Presentation Skills',
  'Multitasker',
  'Communication Skills'
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  }
};

function SkillCategory({ title, skills, color, delay = 0 }: { 
  title: string; 
  skills: string[]; 
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">{title}</h3>
        <div className={`w-16 h-1 ${color} mx-auto rounded-full`} />
      </div>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div key={skill} variants={item}>
            <Badge 
              variant="secondary" 
              className="text-sm py-2 px-4 bg-white/80 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-sm"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function SkillsChapter() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 pt-10 md:pt-0"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
            Expertise & Capabilities
          </h2>
          <p className="text-xl text-slate-600">
            A blend of design expertise, technical skills, and collaboration to create seamless user experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-16">
          <SkillCategory 
            title="Design Expertise" 
            skills={designSkills} 
            color="bg-gradient-to-r from-purple-500 to-pink-500"
            delay={0.2}
          />
          
          <SkillCategory 
            title="Development Collaboration" 
            skills={developmentSkills} 
            color="bg-gradient-to-r from-blue-500 to-cyan-500"
            delay={0.4}
          />
          
          <SkillCategory 
            title="Core Competencies" 
            skills={coreCompetencies} 
            color="bg-gradient-to-r from-green-500 to-emerald-500"
            delay={0.6}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-8 w-16 h-16 bg-purple-400/20 rounded-lg blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-8 w-12 h-12 bg-blue-400/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 right-1/4 w-8 h-20 bg-green-400/20 rounded-full blur-sm"
          />
        </div>
      </div>
    </div>
  );
}