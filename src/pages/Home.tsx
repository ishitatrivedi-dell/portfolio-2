import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Code, Database, Palette } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle URL changes and scroll to section
    const hash = location.hash.replace('#', '') || 'home';
    
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    // Update URL when scrolling
    let lastScrollTop = 0;
    const handleScroll = () => {
      const sections = ['home', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Only update on scroll direction change or significant position change
      if (Math.abs(lastScrollTop - scrollPosition) > 50) {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const elementBottom = elementTop + rect.height;
            
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              const currentHash = location.hash.replace('#', '') || 'home';
              if (currentHash !== section) {
                navigate(`#${section}`, { replace: true });
              }
              break;
            }
          }
        }
        lastScrollTop = scrollPosition;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigate, location.hash]);

  const goToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-smooth">
      {/* Home Section */}
      <section id="home" className="min-h-screen bg-dark text-white flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, type: "spring" }}
                className="text-7xl md:text-9xl font-heading font-bold text-white leading-tight"
              >
                PORTFOLIO
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl md:text-6xl font-heading font-bold text-primary-light"
              >
                Ishita Trivedi
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray font-body tracking-wider uppercase"
              >
                Full Stack Developer & Creative Coder
              </motion.div>
            </div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="max-w-3xl mx-auto bg-dark-light/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
            >
              <p className="text-lg text-gray-light leading-relaxed mb-8 font-body">
                Passionate full-stack developer specializing in MERN stack applications. 
                I transform complex problems into elegant, scalable solutions with clean code 
                and exceptional user experiences. Expert in React.js, Node.js, MongoDB, and 
                modern web technologies.
              </p>

              {/* Skills Icons */}
              <div className="flex justify-center space-x-8 mb-8">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-primary-light"
                >
                  <Code size={32} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="text-secondary"
                >
                  <Database size={32} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-accent"
                >
                  <Palette size={32} />
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  onClick={() => goToSection('projects')}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-black rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                >
                  View My Work
                  <ArrowDown size={20} className="ml-2" />
                </motion.button>

                <motion.a
                  href="https://drive.google.com/file/d/1kqm3Q7a-0VyvN8jFyavWJSP8_GxnGwGm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-10 py-4 bg-transparent border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-black transition-all duration-300"
                >
                  <Download size={20} className="mr-2" />
                  Get Resume
                </motion.a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex justify-center space-x-6"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-gray hover:text-primary-light transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-gray hover:text-primary-light transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-gray hover:text-primary-light transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-light"
            >
              <ArrowDown size={28} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Resume Section */}
      <section id="resume">
        <Resume />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
