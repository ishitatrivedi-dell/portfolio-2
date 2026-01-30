import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';

const Loader = () => {
  // Typewriter animation variants for text
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Split text into individual letters for animation
  const portfolioText = "Ishita Trivedi's Portfolio".split('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-800"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000' fill='none' stroke='rgba(255,215,0,0.15)' stroke-width='3'%3E%3Cpath d='M500,100 C650,100 800,200 850,350 C900,500 850,650 700,750 C550,850 400,850 300,750 C200,650 150,500 200,350 C250,200 350,100 500,100 Z M500,200 C600,200 700,300 700,400 C700,500 600,600 500,600 C400,600 300,500 300,400 C300,300 400,200 500,200 Z'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full filter blur-xl opacity-30 animate-pulse" />
          <FolderOpen size={80} className="text-yellow-300 mx-auto relative z-10" strokeWidth={1.5} />
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl text-white font-serif tracking-wide"
        >
          {portfolioText.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-lg md:text-xl text-yellow-200 font-light mt-4 italic"
        >
          Unveiling Creativity...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;