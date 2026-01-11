import { motion } from 'motion/react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent } from './ui/card';
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
    color: "from-blue-600 to-purple-600",
    bgColor: "bg-blue-50"
  },
  {
    role: "UI/UX Designer",
    company: "Memorres Digital Pvt Ltd",
    period: "Jun 2018 – Jun 2021",
    duration: "3 Years",
    description: "After a year at Memorres, I transitioned to UI/UX Designer, gaining expertise in empathy mapping, personas, journey maps, wireframes, and prototyping. I also collaborated closely with developers using PUG, SASS, and ITCSS.",
    image: imgImage6,
    color: "from-green-600 to-teal-600",
    bgColor: "bg-green-50"
  },
  {
    role: "Web Designer",
    company: "Memorres Digital Pvt Ltd",
    period: "Jun 2017 – Jun 2018",
    duration: "1 Year",
    description: "After completing my MCA, I started as a Web Designer at Memorres, creating website layouts, app designs, and marketing collaterals. I also worked on slicing and gained hands-on experience with HTML, CSS, and JavaScript.",
    image: imgImage1,
    color: "from-orange-600 to-pink-600",
    bgColor: "bg-orange-50"
  },
  {
    role: "Education",
    company: "",
    period: "2011 - 2017",
    duration: "6 Years",
    description: "Master of Computer Application (2014 – 2017)\nBachelor of Computer Application (2011 – 2014)",
    image: imgImage1,
    color: "from-indigo-600 to-blue-600",
    bgColor: "bg-indigo-50"
  }
];

function ExperienceCard({ experience, index, isLast }: { 
  experience: typeof experiences[0]; 
  index: number; 
  isLast: boolean;
}) {
  return (
    <div className="relative">
      {/* Timeline Line - Desktop Only */}
      {!isLast && (
        <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-slate-300 to-transparent" />
      )}
      
      {/* Timeline Dot - Desktop Only */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="hidden md:block absolute left-6 top-8 z-10"
      >
        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} shadow-lg`} />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
        className="md:ml-16 mb-12"
      >
        <Card className={`${experience.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              {/* Company Logo */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex-shrink-0"
              >
                <div 
                  className="w-12 h-12 rounded-lg bg-cover bg-center shadow-md" 
                  style={{ backgroundImage: `url('${experience.image}')` }}
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {experience.role}
                  </h3>
                  {experience.company && (
                    <div className="flex items-center gap-1 text-slate-600">
                      <Building className="w-4 h-4" />
                      <span className="text-sm">{experience.company}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="px-2 py-1 bg-white/70 rounded-full text-xs font-medium">
                    {experience.duration}
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {experience.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default function ExperienceChapter() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 pt-10 md:pt-0"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
            Career Journey & Impact
          </h2>
          <p className="text-xl text-slate-600">
            Over 8 years designing systems, leading teams, and creating scalable digital experiences.
          </p>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          {/* Desktop Layout */}
          <div className="hidden md:inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <Building className="w-5 h-5 text-slate-600" />
            <span className="text-slate-800 font-medium">Memorres Digital Pvt Ltd</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-600">8+ Years</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-600">Jun 2017 - Present</span>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg inline-block">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-slate-600" />
                <span className="text-slate-800 font-medium">Memorres Digital Pvt Ltd</span>
              </div>
              <span className="text-slate-600 font-medium">8+ Years</span>
              <span className="text-slate-600">Jun 2017 – Present</span>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.role} 
              experience={experience} 
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>



        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-8 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 25, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 left-8 w-20 h-20 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-xl"
          />
        </div>
      </div>
    </div>
  );
}