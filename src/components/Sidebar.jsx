import { motion } from 'framer-motion';
import { 
  
  Mail, Code, Globe } from 'lucide-react';

const Sidebar = () => {
  // Typewriter animation variants for name
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const nameText = "Ishita Trivedi".split('');

  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed top-0 left-0 h-full w-80 z-40 bg-gradient-to-b from-purple-800 via-indigo-900 to-blue-800 shadow-2xl"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000' fill='none' stroke='rgba(255,215,0,0.15)' stroke-width='2'%3E%3Cpath d='M500,100 C650,100 800,200 850,350 C900,500 850,650 700,750 C550,850 400,850 300,750 C200,650 150,500 200,350 C250,200 350,100 500,100 Z'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-6 flex flex-col h-full text-white">
        <div className="relative mb-6">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 opacity-30 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
              alt="Ishita Trivedi"
              className="w-full h-full object-cover relative z-10"
            />
          </motion.div>
        </div>
        <motion.div
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-serif text-yellow-200 text-center tracking-wide mb-2"
        >
          {nameText.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <div className="text-lg text-gray-200 font-light text-center mb-4">
          Full-Stack Developer
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm text-gray-300 font-light mb-6"
        >
          <p className="text-center">
            Passionate about crafting innovative web solutions with a blend of creativity and technology.
          </p>
        </motion.div>
        <div className="space-y-4 mt-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Mail size={20} className="text-yellow-300" />
            <a href="mailto:ishita.trivedi@example.com" className="text-gray-200 hover:text-yellow-300 transition">
              ishita.trivedi@example.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Globe size={20} className="text-yellow-300" />
            <a href="https://ishitatrivedi.com" className="text-gray-200 hover:text-yellow-300 transition">
              ishitatrivedi.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Code size={20} className="text-yellow-300" />
            <span className="text-gray-200">React | Node.js | Python</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;