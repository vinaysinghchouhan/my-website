import { motion } from 'motion/react';
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import svgPaths from "../imports/svg-mqbbx6jpkj";

const projects = [
  {
    title: "Bookkeeping and Accounting Firm",
    description: "A web application that allows you to track the heartbeat and results of your firm in real-time.",
    link: "https://www.figma.com/proto/7BqjlXJ2f0tMP21Y1XSP5i/Tenant-Portal-UI?node-id=636-21453&p=f&t=AfrF918oYLfRUd6Q-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A210&starting-point-node-id=636%3A21453",
    type: "Prototype",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Web Product - Company Warehouse",
    description: "Introducing WareHouse: Your all-in-one solution. Get everything you need in one place.",
    link: "https://www.figma.com/proto/XyyzKToAJqRd0lZUjkCBz8/Memorres-Warehouse---UI?node-id=77-384&t=QBhqoiRnj573orwd-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=77%3A384",
    type: "Prototype",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Webflow Project - IotCorner",
    description: "At iotCorner.cloud, we lead the IoT evolution with innovative solutions in product design, consulting, and specialized services.",
    link: "https://iotcorner-7ba99a1984567ff411cab115550cc.webflow.io/",
    type: "Website",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Saudi Arabia pavilion (Expo 2025)",
    description: "This highlights the Kingdom's rich traditions and ancient culture while showcasing its aspirations for a shared future.",
    link: "https://www.figma.com/proto/gIVrpsAsKaZCjR70LgW8vR/Homepage?node-id=101-1838&t=dxPJcLH0U6Oc5wtt-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A2&starting-point-node-id=101%3A1838",
    type: "Prototype",
    color: "from-green-500 to-teal-600"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 300
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        rotateX: 5,
        transition: { duration: 0.2 }
      }}
      className="perspective-1000"
    >
      <Card className="h-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
        <CardContent className="p-6 h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-lg text-slate-800 line-clamp-2">
                {project.title}
              </h3>
              <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white shadow-md`}>
                {project.type === "Website" ? (
                  <ExternalLink className="w-4 h-4" />
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 15 15">
                    <path d={svgPaths.p39076c00} />
                  </svg>
                )}
              </div>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
          
          <div className="pt-4">
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="w-full group hover:bg-slate-50"
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Project
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProjectsChapter() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 pt-10 md:pt-0"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600">
            Here are a few selected projects I've worked on.
          </p>
        </motion.div>

        {/* Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Disclaimer: All projects shown below are © Memorres Digital Pvt Ltd. These works remain the exclusive property of the company and are included here only as part of my professional experience showcase.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>



        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl"
          />
        </div>
      </div>
    </div>
  );
}