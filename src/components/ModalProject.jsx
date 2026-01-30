import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar } from 'lucide-react';

const ModalProject = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 scrollbar-hidden"
            onClick={onClose}
            aria-label="Close modal"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 100 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed inset-6 sm:inset-8 md:inset-12 lg:inset-16 z-50 flex items-center justify-center scrollbar-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-gradient-to-br from-gray-800/5 to-gray-900/90 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-xl scrollbar-hidden">
              <div className="relative p-6 sm:p-8 md:p-10">
                <button
                  onClick={onClose}
                  className=" absolute top-2 right-2 p-2 rounded-full hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-gray-200" />
                </button>

                <div className="grid md:grid-cols-1 gap-6 md:gap-10">
                  <div className="relative">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-700/30" />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 id="modal-title" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h2>
                      <div className="flex items-center text-gray-400 mt-2">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">
                          {new Date(project.createdDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-200 text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-full text-sm border border-orange-500/20 hover:bg-orange-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </motion.a>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center px-6 py-3 bg-gray-700/50 text-gray-200 rounded-xl hover:bg-gray-600/50 border border-gray-600 hover:border-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-gray-400"
                      >
                        <Github size={18} className="mr-2" />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalProject;