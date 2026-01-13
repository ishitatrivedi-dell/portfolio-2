import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ModalProject from '../components/ModalProject';
import projectsData from '../data/projects.json';


interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  createdDate: string;
  liveDemo: string;
  github: string;
}

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  category: string;
}

type TabKey = 'projects' | 'dsa';
type DsaTabKey = 'leetcode' | 'videos';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('projects');
  const [activeDsaTab, setActiveDsaTab] = useState<DsaTabKey>('leetcode');
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  useEffect(() => {
    setProjects(projectsData.value);
    import('../data/videos.json').then((data) => {
      setVideos(data.default);
    });
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="py-20 px-4 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold mb-4 font-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto font-body">
            Explore my work and DSA practice.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="glass inline-flex rounded-xl overflow-hidden">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 font-medium transition-colors ${activeTab === 'projects' ? 'bg-primary text-white' : 'text-gray hover:text-primary-light'}`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('dsa')}
              className={`px-4 py-2 font-medium transition-colors ${activeTab === 'dsa' ? 'bg-primary text-white' : 'text-gray hover:text-primary-light'}`}
            >
              DSA
            </button>
          </div>
        </div>

        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass group cursor-pointer overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300"
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors font-heading">
                    {project.title}
                  </h3>
                  <p className="text-gray-light text-sm mb-4 line-clamp-3 font-body">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/20 text-primary-light rounded text-xs border border-primary/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray/20 text-gray rounded text-xs font-medium">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'dsa' && (
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="glass rounded-xl p-4 w-full max-w-3xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white font-heading">LeetCode Activity</h3>
                  <div className="glass inline-flex rounded-lg overflow-hidden">
                    <button
                      onClick={() => setActiveDsaTab('leetcode')}
                      className={`px-3 py-1 text-sm font-medium transition-colors ${activeDsaTab === 'leetcode' ? 'bg-primary text-white' : 'text-gray hover:text-primary-light'}`}
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => setActiveDsaTab('videos')}
                      className={`px-3 py-1 text-sm font-medium transition-colors ${activeDsaTab === 'videos' ? 'bg-primary text-white' : 'text-gray hover:text-primary-light'}`}
                    >
                      Videos
                    </button>
                  </div>
                </div>

                {activeDsaTab === 'leetcode' && (
                  <div className="space-y-4">
                    <p className="text-gray-light font-body">LeetCode overview (profile card):</p>
                    <div className="w-full flex justify-center">
                      <img
                        className="rounded-lg shadow-md"
                        src={`https://leetcard.jacoblin.cool/ishita_trivedi?theme=dark&font=Inter&ext=heatmap`}
                        alt="LeetCode Profile"
                      />
                    </div>
                  </div>
                )}

                {activeDsaTab === 'videos' && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentVideos.map((video) => (
                        <motion.div
                          key={video.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="glass group cursor-pointer overflow-hidden rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
                          onMouseEnter={() => setHoveredVideo(video.id)}
                          onMouseLeave={() => setHoveredVideo(null)}
                        >
                          <div className="relative aspect-video">
                            {hoveredVideo === video.id ? (
                              <iframe
                                className="w-full h-full object-cover"
                                src={`${video.url}?autoplay=1&mute=1`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            ) : (
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            )}
                            <span className="absolute top-2 right-2 px-2 py-1 bg-primary/80 text-white text-xs rounded font-medium">
                              {video.category}
                            </span>
                          </div>
                          <div className="p-4">
                            <h4 className="text-white font-semibold mb-2 group-hover:text-primary-light transition-colors font-heading">
                              {video.title}
                            </h4>
                            <p className="text-gray-light text-sm line-clamp-2 font-body">
                              {video.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center space-x-2 mt-8">
                        <button
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`px-3 py-1 rounded font-medium transition-colors ${currentPage === 1 ? 'bg-gray/20 text-gray cursor-not-allowed' : 'bg-dark-light text-gray hover:bg-primary hover:text-white'}`}
                        >
                          Previous
                        </button>
                        
                        {[...Array(totalPages)].map((_, index) => (
                          <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={`px-3 py-1 rounded font-medium transition-colors ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-dark-light text-gray hover:bg-primary hover:text-white'}`}
                          >
                            {index + 1}
                          </button>
                        ))}
                        
                        <button
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className={`px-3 py-1 rounded font-medium transition-colors ${currentPage === totalPages ? 'bg-gray/20 text-gray cursor-not-allowed' : 'bg-dark-light text-gray hover:bg-primary hover:text-white'}`}
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
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
