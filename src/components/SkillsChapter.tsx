import { motion } from 'motion/react';
import { Sparkles, Target, Rocket } from 'lucide-react';

const skillGroups = [
  {
    title: 'Discovery & Strategy',
    number: '01',
    icon: Target,
    description: 'Understanding user needs, business goals, and problem space before design execution.',
    skills: [
      'User Research & Analysis',
      'User Personas & Empathy Mapping',
      'User Flows & Journey Mapping',
      'Information Architecture'
    ],
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-500/10 via-pink-500/10 to-rose-500/10',
    position: 'left'
  },
  {
    title: 'Design & Systems',
    number: '02',
    icon: Sparkles,
    description: 'Designing consistent, scalable, and user-centered interfaces across products.',
    skills: [
      'UI/UX Design',
      'Design Systems & Reusable Components',
      'Wireframing & Prototyping',
      'Interaction & Visual Design'
    ],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    bgGradient: 'from-blue-500/10 via-cyan-500/10 to-teal-500/10',
    position: 'center'
  },
  {
    title: 'Collaboration & Delivery',
    number: '03',
    icon: Rocket,
    description: 'Collaborating closely with product and engineering to deliver high-quality outcomes.',
    skills: [
      'Design Leadership & Mentorship',
      'Developer Collaboration & Handoff',
      'Frontend Collaboration (HTML, CSS understanding)',
      'Iteration & Feedback'
    ],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgGradient: 'from-green-500/10 via-emerald-500/10 to-teal-500/10',
    position: 'right'
  }
];

function SkillStage({ group, index, total }: { group: typeof skillGroups[0]; index: number; total: number }) {
  const Icon = group.icon;
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative">
      {/* Main Stage Container */}
      <motion.div
        initial={{ opacity: 0, y: isEven ? 50 : -50, rotateX: 45 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: index * 0.3 }}
        className="relative group"
      >
        {/* Huge Background Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.3 }}
          className="absolute -top-12 -left-8 z-0 pointer-events-none"
        >
          <span className={`text-[180px] font-bold bg-gradient-to-br ${group.gradient} bg-clip-text text-transparent opacity-10 select-none`}>
            {group.number}
          </span>
        </motion.div>

        {/* Stage Content */}
        <div className="relative z-10">
          {/* Icon & Title Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.3 }}
            className="mb-6"
          >
            {/* Title */}
            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.3 }}
                className={`text-sm font-semibold bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent tracking-wider uppercase`}
              >
                Step {group.number}
              </motion.span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                {group.title}
              </h3>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.3 }}
            className="text-slate-600 text-lg mb-6 leading-relaxed max-w-md"
          >
            {group.description}
          </motion.p>

          {/* Skills - Single Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.3 }}
            className="bg-white rounded-lg px-4 py-4 border border-slate-200"
          >
            <div className="space-y-3">
              {group.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.8 + index * 0.3 + skillIndex * 0.08,
                  }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${group.gradient}`} />
                  <span className="text-slate-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating background elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${group.bgGradient} rounded-full blur-3xl pointer-events-none -z-10`}
        />
      </motion.div>
    </div>
  );
}

export default function SkillsChapter() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pt-10 md:pt-0"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-4"
          >
            <div class="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent overflow-visible">
              <h2 class="text-5xl md:text-6xl font-bold tracking-tight leading-[1.2] py-2">
              Design Approach & Capabilities
            </h2>
          </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            A blend of design expertise, technical skills, and collaboration to create seamless user experiences.
          </motion.p>
        </motion.div>

        {/* Process Flow - Desktop: Horizontal, Mobile: Vertical */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-24">
          {skillGroups.map((group, index) => (
            <SkillStage 
              key={group.title} 
              group={group} 
              index={index} 
              total={skillGroups.length}
            />
          ))}
        </div>

        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${skillGroups[i % 3].gradient} blur-sm`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`
            }}
          />
        ))}
      </div>
    </div>
  );
}