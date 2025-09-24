import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Landing = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold"
            >
              Hello, I'm{' '}
              <span className="gradient-text">Ishita Trivedi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 font-light"
            >
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="glass p-8 max-w-2xl mx-auto"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a full-stack developer passionate about building scalable, user-friendly web apps with the MERN stack. I’ve built projects with secure auth, dynamic dashboards, and smooth API integrations, focusing on clean performance and great UX. With hands-on experience in React.js, Node.js, MongoDB, and RESTful APIs, I enjoy turning real-world problems into functional, impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={scrollToPortfolio}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
              >
                View My Work
                <ArrowDown size={18} className="ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-3 glass border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 transition-colors"
              >
                <Download size={18} className="mr-2" />
                <a href="https://drive.google.com/file/d/1jyl0cNftPz6UQym7I13_duCdB7eY2-gP/view?usp=drive_link">Get Resume</a>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;