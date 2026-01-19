import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vinaysinghchouhan2@gmail.com",
    href: "mailto:vinaysinghchouhan2@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vinay-singh-chouhan",
    href: "https://www.linkedin.com/in/vinay-singh-chouhan",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+91) 8561058866",
    href: "tel:8561058866",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "G1 35, Suraj Nagar, Kalwar Road, Jaipur",
    href: "#",
    color: "from-purple-500 to-pink-500"
  }
];



function ContactCard({ contact, index }: { contact: typeof contactInfo[0]; index: number }) {
  const Icon = contact.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 300
      }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Card className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} text-white shadow-md`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-500 font-medium">{contact.label}</div>
              {contact.href && contact.href !== "#" ? (
                <a 
                  href={contact.href}
                  className="text-slate-800 hover:text-blue-600 transition-colors font-medium break-all"
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {contact.value}
                </a>
              ) : (
                <div className="text-slate-800 font-medium break-all">{contact.value}</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}



export default function ContactChapter() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 pt-10 md:pt-0"
        >
            <div class="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent overflow-visible">
              <h2 class="text-5xl md:text-6xl font-bold tracking-tight leading-[1.2] py-2">
              Open for Opportunities
            </h2>
          </div>
          <p className="text-xl text-slate-600">
            I'm open to new roles where design, strategy, and collaboration come together.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="space-y-4">
            {contactInfo.map((content, index) => (
              <ContactCard key={content.label} contact={content} index={index} />
            ))}
          </div>
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-slate-800 mb-3">
            Thank You for Your Time
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Thank you for exploring my journey. I look forward to connecting and discussing how I can bring value to your team and future projects.
          </p>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.4, 1]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-1/4 left-10 w-24 h-24 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-xl"
          />
        </div>
      </div>
    </div>
  );
}