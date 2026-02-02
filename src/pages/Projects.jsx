import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ExternalLink, Github, Figma, Code, Copy } from 'lucide-react';
import ModalProject from '../components/ModalProject.jsx';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('fullstack');

  // Sample data for different project types
  const figmaProjects = [
    {
      id: 101,
      title: "Boodoo - Astrology & Horoscope",
      description: "Comprehensive astrology and horoscope community app design with modern UI/UX",
      thumbnail: "https://res.cloudinary.com/dnfqhhyoo/image/upload/v1769839300/Screenshot_2026-01-31_113042_aoqhi2.png",
      techStack: ["Figma", "UI/UX", "Mobile Design", "Community Features"],
      createdDate: "2024-01-15",
      liveDemo: "https://www.figma.com/design/6tzjVrrUbkcKMXstLEwVHI/Boodoo---Astrology---Horoscope--Community-?node-id=0-1&t=q7jAbtyD2IN3WGM2-1",
      github: ""
    },
    {
      id: 102,
      title: "Skills Scheduler",
      description: "Professional skills scheduling and management application with intuitive interface",
      thumbnail: "https://res.cloudinary.com/dnfqhhyoo/image/upload/v1769839336/Screenshot_2026-01-31_113202_owcbka.png",
      techStack: ["Figma", "UI/UX", "Productivity", "Scheduling"],
      createdDate: "2024-02-20",
      liveDemo: "https://www.figma.com/design/1PDr2aGXQJMBxMr5OSgDRF/Skills-Schedular?node-id=0-1&t=AS6iY27sfpXA1RZU-1",
      github: ""
    },
    {
      id: 103,
      title: "Learning App",
      description: "Educational learning platform design with engaging user experience and modern aesthetics",
      thumbnail: "https://res.cloudinary.com/dnfqhhyoo/image/upload/v1769839367/Screenshot_2026-01-31_113235_p8honj.png",
      techStack: ["Figma", "UI/UX", "Education", "Mobile Design"],
      createdDate: "2024-03-10",
      liveDemo: "https://www.figma.com/design/zFLRIgR7VtGg7h13rDXNTl/learning-app?node-id=0-1&t=beCSmoBKIywjHvWf-1",
      github: ""
    },
    {
      id: 104,
      title: "Netflix Clone Design",
      description: "Netflix streaming platform clone design with modern UI and user experience patterns",
      thumbnail: "https://res.cloudinary.com/dnfqhhyoo/image/upload/v1769839397/Screenshot_2026-01-31_113304_kuoog2.png",
      techStack: ["Figma", "UI/UX", "Streaming", "Entertainment"],
      createdDate: "2024-04-05",
      liveDemo: "https://www.figma.com/design/wJb1h7bgafI1s3GMHYgmLT/Untitled?node-id=0-1&t=p5QUv1JlY36nKbhz-1",
      github: ""
    },
    {
      id: 105,
      title: "Instagram Clone Design",
      description: "Social media platform clone design with modern Instagram-like UI/UX and features",
      thumbnail: "https://res.cloudinary.com/dnfqhhyoo/image/upload/v1769839434/Screenshot_2026-01-31_113340_pd3e32.png",
      techStack: ["Figma", "UI/UX", "Social Media", "Mobile Design"],
      createdDate: "2024-05-10",
      liveDemo: "https://www.figma.com/design/QGN8z9OQnQCPzHi7IIbdcA/instagram?node-id=0-1&t=o8S0DDyxgHU26GIj-1",
      github: ""
    }
  ];

  const cloneProjects = [
    {
      id: 201,
      title: "Spotify Clone",
      description: "Static Spotify clone",
      thumbnail: "https://res.cloudinary.com/dliataxzf/image/upload/v1770041875/Screenshot_2026-02-02_194741_upy9in.png",
      techStack: ["HTML", "CSS"],
      liveDemo: "https://spotify-react-wine.vercel.app/",
      github: "https://github.com/ishitatrivedi-dell/Spotify-react"
    },
    {
      id: 202,
      title: "NST Clone",
      description: "Newton School of Technology clone with educational platform features",
      thumbnail: "https://res.cloudinary.com/dliataxzf/image/upload/v1770041285/Screenshot_2026-02-02_193036_glqjay.png",
      techStack: ["HTML", "CSS"],
      liveDemo: "https://nst-qdm7.vercel.app/",
      github: "https://github.com/ishitatrivedi-dell/nst"
    },
    {
      id: 203,
      title: "Netflix Clone",
      description: "Full-stack Netflix clone with authentication and streaming features",
      thumbnail: "https://res.cloudinary.com/dliataxzf/image/upload/v1770041285/Screenshot_2026-02-02_192257_iluxod.png",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
      createdDate: "2024-03-10",
      liveDemo: "https://netflix-opal-five.vercel.app/",
      github: "https://github.com/ishitatrivedi-dell/Netflix"
    }
  ];

  useEffect(() => {
    setProjects(projectsData.value);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getProjectsByType = () => {
    switch (activeTab) {
      case 'figma':
        return figmaProjects;
      case 'fullstack':
        return projects;
      case 'clone':
        return cloneProjects;
      default:
        return projects;
    }
  };

  const getTabIcon = (tab) => {
    switch (tab) {
      case 'figma':
        return <Figma size={20} />;
      case 'fullstack':
        return <Code size={20} />;
      case 'clone':
        return <Copy size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  const getTabLabel = (tab) => {
    switch (tab) {
      case 'figma':
        return 'Figma Designs';
      case 'fullstack':
        return 'Full Stack';
      case 'clone':
        return 'Clones';
      default:
        return 'Projects';
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 font-heading">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-light max-w-3xl mx-auto font-body">
            Explore my diverse portfolio including Figma designs, full-stack applications, 
            hackathon projects, and popular platform clones.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass inline-flex rounded-xl overflow-hidden p-1">
            {(['figma', 'fullstack', 'clone']).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-black shadow-lg'
                    : 'text-gray hover:text-primary-light hover:bg-primary/10'
                }`}
              >
                {getTabIcon(tab)}
                <span>{getTabLabel(tab)}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getProjectsByType().map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass group cursor-pointer overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className="glass px-3 py-1 rounded-full flex items-center gap-1">
                    {getTabIcon(activeTab)}
                    <span className="text-xs text-primary-light font-medium capitalize">
                      {activeTab}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors font-heading">
                  {project.title}
                </h3>
                <p className="text-gray-light text-sm mb-4 line-clamp-3 font-body">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary-light rounded text-xs border border-primary/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-dark-light/50 text-gray rounded text-xs font-medium">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-black rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-black transition-all duration-300"
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">
                  {projects.length + cloneProjects.length}
                </div>
                <div className="text-sm text-gray-light">Full Stack Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">
                  {figmaProjects.length}
                </div>
                <div className="text-sm text-gray-light">Figma Designs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">
                  {cloneProjects.length}
                </div>
                <div className="text-sm text-gray-light">Platform Clones</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ModalProject
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Projects;
