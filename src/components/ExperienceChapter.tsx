import { motion } from 'motion/react';
import { Calendar, Building } from 'lucide-react';
import imgImage1 from "figma:asset/9521fcebcd207ea109fa3d5bf2f2c2ea80993ccb.png";
import imgImage6 from "figma:asset/3789b85fe5e6f795f04583fca7414b7ce7f52eba.png";
import imgImage3 from "figma:asset/eefd72b63b9abf7c32c2229177cdb164a3665eb5.png";

const experiences = [
  {
    role: "Design Lead",
    company: "Memorres Digital Pvt Ltd",
    period: "Jun 2021 – Present",
    duration: "4+ Years",
    description: "Promoted to Design Lead, I managed a team of designers, enhancing my skills in project management and collaboration. Consistently delivered projects on time and contributed to company growth.",
    image: imgImage3,
    skills: ["Team Leadership", "Design Systems", "Project Management", "Stakeholder Communication"],
  },
  {
    role: "UI/UX Designer",
    company: "Memorres Digital Pvt Ltd",
    period: "Jun 2018 – Jun 2021",
    duration: "3 Years",
    description: "After a year at Memorres, I transitioned to UI/UX Designer, gaining expertise in empathy mapping, personas, journey maps, wireframes, and prototyping. I also collaborated closely with developers using PUG, SASS, and ITCSS.",
    image: imgImage6,
    skills: ["Empathy Mapping", "Personas", "Journey Maps", "Wireframes", "Prototyping", "PUG", "SASS", "ITCSS"],
  },
  {
    role: "Web Designer",
    company: "Memorres Digital Pvt Ltd",
    period: "Jun 2017 – Jun 2018",
    duration: "1 Year",
    description: "After completing my MCA, I started as a Web Designer at Memorres, creating website layouts, app designs, and marketing collaterals. I also worked on slicing and gained hands-on experience with HTML, CSS, and JavaScript.",
    image: imgImage1,
    skills: ["Web Design", "App Design", "HTML", "CSS", "JavaScript", "UI Slicing"],
  },
  {
    role: "Education",
    company: "",
    period: "2011 - 2017",
    duration: "6 Years",
    description: "Master of Computer Application (2014 – 2017)\nBachelor of Computer Application (2011 – 2014)",
    image: imgImage1,
    skills: ["Computer Science", "Software Engineering", "Database Management", "Web Technologies"],
  }
];

function ExperienceCard({ experience, index, isLast }: { 
  experience: typeof experiences[0]; 
  index: number; 
  isLast: boolean;
}) {
  return (
    <div className="relative">
      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="mb-8"
      >
        <div className="bg-white border border-slate-200/60 rounded-lg p-6 md:p-8 hover:border-slate-300 transition-colors duration-200">
          {/* Header Row with Title and Date Chips */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            {/* Role with gradient - Larger and Bolder */}
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {experience.role}
            </h3>

            {/* Date & Duration Chips - Desktop Only on Right with Brand Accent */}
            <div className="hidden md:flex items-center gap-2">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/60 text-sm font-medium text-indigo-700">
                {experience.period}
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/60 text-sm font-medium text-indigo-700">
                {experience.duration}
              </span>
            </div>
          </div>

          {/* Company - Below title */}
          {experience.company && (
            <div className="flex items-center gap-2 text-slate-600 mb-4">
              <Building className="w-4 h-4" />
              <span className="text-sm">{experience.company}</span>
            </div>
          )}

          {/* Date & Duration Chips - Mobile Only */}
          <div className="flex md:hidden items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600">
              {experience.period}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600">
              {experience.duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-600 leading-[1.7] whitespace-pre-line text-[15px] mb-4">
            {experience.description}
          </p>

          {/* Skill Chips */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-xs text-slate-600 border border-slate-200/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceChapter() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center pt-10 md:pt-0"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900">
            Career Journey & Impact
          </h2>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          {/* Desktop Layout */}
          <div className="hidden md:inline-flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/60 rounded-full px-6 py-3">
            <Building className="w-5 h-5 text-indigo-600" />
            <span className="text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Memorres Digital Pvt Ltd</span>
            <span className="text-indigo-300">•</span>
            <span className="text-base font-medium text-indigo-700">8+ Years</span>
            <span className="text-indigo-300">•</span>
            <span className="text-base font-medium text-indigo-700">Jun 2017 - Present</span>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden bg-slate-50 border border-slate-200/60 rounded-xl px-5 py-4 inline-block">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-slate-500" />
                <span className="text-slate-900 text-sm">Memorres Digital Pvt Ltd</span>
              </div>
              <span className="text-slate-600 text-sm">8+ Years</span>
              <span className="text-slate-500 text-sm">Jun 2017 – Present</span>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative pt-4">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.role} 
              experience={experience} 
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}