import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Hackathons from './Hackathons';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'Express.js', icon: '📟', color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-teal-500' },
    { name: 'Git', icon: '📦', color: 'from-orange-400 to-red-500' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-700 to-gray-900' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-blue-700' },
    { name: 'Figma', icon: '🎯', color: 'from-purple-400 to-pink-500' },
    { name: 'Postman', icon: '🚀', color: 'from-orange-500 to-red-500' },
    { name: 'Redux', icon: '🔄', color: 'from-purple-500 to-purple-700' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' },
    { name: 'Firebase', icon: '🔥', color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML5', icon: '📄', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-blue-600' }
  ];

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
      const sections = ['home', 'skills', 'projects', 'hackathons', 'resume', 'contact'];
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

        <div className="text-center max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Hero Section with Split Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="text-left space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="inline-block"
                >
                  <span className="px-4 py-2 bg-primary/20 text-primary-light rounded-full text-sm font-semibold border border-primary/30">
                    👋 Hello, I'm
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 1, type: "spring" }}
                  className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight"
                >
                  Ishita
                  <span className="block text-4xl md:text-6xl text-primary-light">Trivedi</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="space-y-2"
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-light">
                    Full Stack Developer
                  </h2>
                  <p className="text-lg text-gray font-body">
                    Building scalable web applications with modern technologies
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.button
                    onClick={() => goToSection('projects')}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-black rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                  >
                    View Projects
                    <ArrowDown size={20} className="ml-2" />
                  </motion.button>

                  <motion.a
                    href="https://drive.google.com/file/d/1kqm3Q7a-0VyvN8jFyavWJSP8_GxnGwGm/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-8 py-3 bg-transparent border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-black transition-all duration-300"
                  >
                    <Download size={20} className="mr-2" />
                    Resume
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Content - Skills & Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="space-y-8"
              >
                {/* Skills Grid */}
                <div className="glass rounded-2xl p-6 border border-primary/20">
                  <h3 className="text-xl font-semibold text-primary-light mb-4 font-heading">Tech Stack</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: '⚛️', name: 'React' },
                      { icon: '🚀', name: 'Node.js' },
                      { icon: '📊', name: 'MongoDB' },
                      { icon: '🎨', name: 'Tailwind' },
                      { icon: '🔧', name: 'Express' },
                      { icon: '📱', name: 'Next.js' }
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-center p-3 rounded-xl bg-dark-light/50 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="text-2xl mb-1">{skill.icon}</div>
                        <div className="text-xs text-gray-light font-medium">{skill.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="glass rounded-xl p-4 text-center border border-primary/20"
                  >
                    <div className="text-3xl font-bold text-primary-light">4+</div>
                    <div className="text-sm text-gray-light">Projects</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="glass rounded-xl p-4 text-center border border-primary/20"
                  >
                    <div className="text-3xl font-bold text-primary-light">5+</div>
                    <div className="text-sm text-gray-light">Certificates</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex justify-center space-x-6 pt-8"
            >
              <motion.a
                href="https://github.com/ishitatrivedi-dell"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-gray hover:text-primary-light transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ishita-trivedi0611/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-gray hover:text-primary-light transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:ishita.trivedi.cg@gmail.com"
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
            transition={{ delay: 2, duration: 1 }}
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 font-heading">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-light max-w-2xl mx-auto font-body">
              Technologies and tools I work with to build amazing applications
            </p>
          </motion.div>

          {/* Skills Carousel */}
          <div className="relative overflow-hidden">
            {/* Continuous Scrolling Animation */}
            <div className="relative">
              <motion.div
                animate={{ x: [0, -100 * skills.length] }}
                transition={{ 
                  duration: skills.length * 2, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex"
              >
                {/* First set of skills */}
                {skills.map((skill, index) => (
                  <motion.div
                    key={`first-${index}`}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="min-w-[300px] flex flex-col items-center justify-center px-4"
                  >
                    <div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 w-full">
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-4xl mb-4 shadow-2xl mx-auto`}
                      >
                        {skill.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white font-heading mb-2 text-center">
                        {skill.name}
                      </h3>
                      <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            className="w-1.5 h-1.5 bg-primary-light rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {skills.map((skill, index) => (
                  <motion.div
                    key={`second-${index}`}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="min-w-[300px] flex flex-col items-center justify-center px-4"
                  >
                    <div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 w-full">
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-4xl mb-4 shadow-2xl mx-auto`}
                      >
                        {skill.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white font-heading mb-2 text-center">
                        {skill.name}
                      </h3>
                      <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            className="w-1.5 h-1.5 bg-primary-light rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-semibold text-primary-light mb-6 font-heading text-center">All Technologies</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center p-4 rounded-xl bg-dark-light/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl mb-2`}>
                      {skill.icon}
                    </div>
                    <span className="text-xs text-gray-light font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Hackathons Section */}
      <section id="hackathons">
        <Hackathons />
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
