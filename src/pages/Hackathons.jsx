import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Trophy } from 'lucide-react';
import hackathonsData from '../data/hackathons.json';

const Hackathons = () => {
  return (
    <div className="min-h-screen bg-dark text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 font-heading">
            <span className="gradient-text">Hackathon</span> Projects
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto font-body">
            Innovative solutions developed during intense hackathon competitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathonsData.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-light">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="glass px-3 py-1 rounded-full flex items-center gap-1">
                    <Trophy size={14} className="text-primary-light" />
                    <span className="text-xs text-primary-light font-medium">Hackathon</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                  {project.title}
                </h3>
                <p className="text-gray-light mb-4 text-sm font-body line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech: any, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary-light rounded text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-dark-light/50 text-gray-light rounded text-xs font-medium">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-black rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-black transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-gray-light text-xs">
                  <Calendar size={14} />
                  <span>{new Date(project.createdDate).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">{hackathonsData.length}</div>
                <div className="text-sm text-gray-light">Hackathon Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">48h</div>
                <div className="text-sm text-gray-light">Avg. Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">15+</div>
                <div className="text-sm text-gray-light">Technologies Used</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">3</div>
                <div className="text-sm text-gray-light">Competitions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hackathons;
