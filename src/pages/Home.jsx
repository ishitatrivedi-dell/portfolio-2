import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Code, Database, Palette, MapPin, Phone, Briefcase, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Simplified Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-24 h-24"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg backdrop-blur-sm"></div>
          </motion.div>

          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 right-20 w-32 h-32"
          >
            <div className="w-full h-full bg-gradient-to-bl from-amber-500/10 to-yellow-500/5 border border-amber-500/20 rounded-full backdrop-blur-sm"></div>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-yellow-500/3" />
        </div>

        <div className="text-center max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Hero Content */}
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
                    onClick={() => navigateToPage('/projects')}
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
                    <div className="text-3xl font-bold text-primary-light">10+</div>
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
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Portfolio <span className="gradient-text">Preview</span>
            </h2>
            <p className="text-xl text-gray-light max-w-2xl mx-auto font-body">
              A glimpse into my work, skills, and journey as a developer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Projects Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => navigateToPage('/projects')}
              className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary-light transition-colors">
                Projects
              </h3>
              <p className="text-gray-light font-body mb-4">
                Full-stack applications, clones, and innovative solutions built with modern technologies
              </p>
              <div className="text-sm text-primary-light font-semibold">
                10+ Projects →
              </div>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => navigateToPage('/skills')}
              className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary-light transition-colors">
                Skills
              </h3>
              <p className="text-gray-light font-body mb-4">
                Technical expertise spanning frontend, backend, databases, and modern development tools
              </p>
              <div className="text-sm text-primary-light font-semibold">
                15+ Technologies →
              </div>
            </motion.div>

            {/* Activities Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
              onClick={() => navigateToPage('/activities')}
              className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary-light transition-colors">
                Activities
              </h3>
              <p className="text-gray-light font-body mb-4">
                Personal interests including reading, music, traveling, journaling, and self-reflection
              </p>
              <div className="text-sm text-primary-light font-semibold">
                5 Passions →
              </div>
            </motion.div>
          </div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-light mb-2">3+</div>
                  <div className="text-sm text-gray-light">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-light mb-2">6+</div>
                  <div className="text-sm text-gray-light">Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-light mb-2">5+</div>
                  <div className="text-sm text-gray-light">Certificates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-light mb-2">2+</div>
                  <div className="text-sm text-gray-light">Years Experience working with these techs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Explore My <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-light max-w-2xl mx-auto font-body">
              Discover my projects, skills, resume, and more
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Projects', desc: 'Full-stack applications and clones', icon: '🚀', path: '/projects' },
              { title: 'Skills', desc: 'Technical expertise and technologies', icon: '⚡', path: '/skills' },
              { title: 'Resume', desc: 'Download and preview my resume', icon: '📄', path: '/resume' },
              { title: 'Activities', desc: 'Personal interests and hobbies', icon: '🎨', path: '/activities' },
              { title: 'Hackathons', desc: 'Competition projects and achievements', icon: '🏆', path: '/#hackathons' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => navigateToPage(item.path)}
                className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-light text-sm font-body">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-dark to-dark-light">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto font-body mb-8">
              I'm always excited to discuss new opportunities, collaborations, or just chat about technology and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://drive.google.com/file/d/1kqm3Q7a-0VyvN8jFyavWJSP8_GxnGwGm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-xl font-semibold transition-all duration-300 hover:bg-primary hover:text-black"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
              
              <motion.button
                onClick={() => navigateToPage('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-black rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Mail size={20} />
                Send Message
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
