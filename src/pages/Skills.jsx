import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Palette, Server, Globe, Cloud, Terminal, Brackets, Github } from 'lucide-react';

const Skills = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const containerRef = useRef(null);

  const skills = [
    {
      name: 'React',
      icon: <Code size={24} />,
      level: 90,
      category: 'Frontend',
      description: 'Building interactive UIs with hooks, context, and modern patterns'
    },
    {
      name: 'Node.js',
      icon: <Server size={24} />,
      level: 85,
      category: 'Backend',
      description: 'RESTful APIs, microservices, and server-side applications'
    },
    {
      name: 'MongoDB',
      icon: <Database size={24} />,
      level: 80,
      category: 'Database',
      description: 'NoSQL database design, aggregation, and performance optimization'
    },
    {
      name: 'TypeScript',
      icon: <Brackets size={24} />,
      level: 85,
      category: 'Language',
      description: 'Type-safe JavaScript development with advanced typing'
    },
    {
      name: 'Tailwind CSS',
      icon: <Palette size={24} />,
      level: 90,
      category: 'Styling',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    {
      name: 'Express.js',
      icon: <Server size={24} />,
      level: 85,
      category: 'Backend',
      description: 'Web application framework for Node.js with middleware'
    },
    {
      name: 'Next.js',
      icon: <Globe size={24} />,
      level: 80,
      category: 'Frontend',
      description: 'Full-stack React framework with SSR and SSG'
    },
    {
      name: 'PostgreSQL',
      icon: <Database size={24} />,
      level: 75,
      category: 'Database',
      description: 'Relational database management with complex queries'
    },
    {
      name: 'Docker',
      icon: <Cloud size={24} />,
      level: 70,
      category: 'DevOps',
      description: 'Containerization and orchestration for deployment'
    },
    {
      name: 'AWS',
      icon: <Cloud size={24} />,
      level: 65,
      category: 'Cloud',
      description: 'Cloud services including EC2, S3, and Lambda'
    },
    {
      name: 'Git',
      icon: <Github size={24} />,
      level: 85,
      category: 'Tools',
      description: 'Version control, branching strategies, and collaboration'
    },
    {
      name: 'Python',
      icon: <Terminal size={24} />,
      level: 75,
      category: 'Language',
      description: 'Data analysis, automation, and backend development'
    }
  ];

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating, skills.length]);

  const handleSkillClick = (index) => {
    setActiveSkillIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000); // Resume auto-rotation after 10 seconds
  };

  const calculatePosition = (index, total) => {
    const angle = (index / total) * Math.PI; // Half circle (0 to π)
    const radius = 200;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const getSkillColor = (category) => {
    const colors = {
      'Frontend': 'from-cyan-400 to-blue-500',
      'Backend': 'from-green-400 to-emerald-500',
      'Database': 'from-purple-400 to-pink-500',
      'Language': 'from-yellow-400 to-orange-500',
      'Styling': 'from-pink-400 to-rose-500',
      'DevOps': 'from-indigo-400 to-purple-500',
      'Cloud': 'from-blue-400 to-cyan-500',
      'Tools': 'from-gray-400 to-gray-600'
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-dark text-white px-4 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 font-heading">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-gray-light max-w-3xl mx-auto font-body">
            Explore my technical expertise through an interactive experience. Click on any skill to learn more.
          </p>
        </motion.div>

        {/* Main Skills Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  key={activeSkillIndex}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getSkillColor(skills[activeSkillIndex].category)} flex items-center justify-center text-white shadow-xl`}
                >
                  {skills[activeSkillIndex].icon}
                </motion.div>
                <div>
                  <h2 className="text-3xl font-bold text-white font-heading">
                    {skills[activeSkillIndex].name}
                  </h2>
                  <span className="text-primary-light font-medium">
                    {skills[activeSkillIndex].category}
                  </span>
                </div>
              </div>

              <p className="text-gray-light font-body text-lg mb-6">
                {skills[activeSkillIndex].description}
              </p>

              {/* Skill Level */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-light">Proficiency</span>
                  <span className="text-primary-light font-semibold">{skills[activeSkillIndex].level}%</span>
                </div>
                <div className="w-full bg-dark-light rounded-full h-3 overflow-hidden">
                  <motion.div
                    key={activeSkillIndex}
                    initial={{ width: 0 }}
                    animate={{ width: `${skills[activeSkillIndex].level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${getSkillColor(skills[activeSkillIndex].category)} rounded-full`}
                  />
                </div>
              </div>
            </div>

            {/* Skill Categories */}
            <div className="grid grid-cols-2 gap-4">
              {['Frontend', 'Backend', 'Database', 'DevOps'].map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-sm text-gray-light mb-1">{category}</div>
                  <div className="text-2xl font-bold text-primary-light">
                    {skills.filter(s => s.category === category).length}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Half Circle Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] flex items-center justify-center"
            ref={containerRef}
          >
            {/* Central Active Skill */}
            <motion.div
              key={activeSkillIndex}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute z-20 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-black shadow-2xl border-4 border-primary/30"
            >
              <div className="text-center">
                {skills[activeSkillIndex].icon}
                <div className="text-xs font-bold mt-1">{skills[activeSkillIndex].level}%</div>
              </div>
            </motion.div>

            {/* Half Circle of Skills */}
            {skills.map((skill, index) => {
              const position = calculatePosition(index, skills.length);
              const isActive = index === activeSkillIndex;
              
              return (
                <motion.div
                  key={skill.name}
                  className="absolute cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    x: position.x,
                    y: position.y,
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isActive ? 1.2 : 1, 
                    opacity: 1,
                    zIndex: isActive ? 10 : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    type: "spring",
                    scale: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileHover={{ scale: 1.3 }}
                  onClick={() => handleSkillClick(index)}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getSkillColor(skill.category)} flex items-center justify-center text-white shadow-lg border-2 ${
                    isActive ? 'border-primary-light scale-110' : 'border-transparent'
                  } transition-all duration-300`}>
                    {skill.icon}
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    >
                      <div className="glass px-3 py-1 rounded-full text-xs font-semibold text-primary-light border border-primary/30">
                        {skill.name}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {skills.map((_, index) => {
                const position = calculatePosition(index, skills.length);
                return (
                  <line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + (position.x / 4)}%`}
                    y2={`${50 + (position.y / 4)}%`}
                    stroke="rgba(245, 158, 11, 0.1)"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>
          </motion.div>
        </div>

        {/* Skills Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 font-heading">
            All <span className="gradient-text">Technologies</span>
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {/* First set */}
              {skills.map((skill, index) => (
                <motion.div
                  key={`first-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 w-64 glass rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                  onClick={() => handleSkillClick(index)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getSkillColor(skill.category)} flex items-center justify-center text-white mb-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">{skill.name}</h3>
                  <p className="text-sm text-gray-light mb-3">{skill.category}</p>
                  <div className="w-full bg-dark-light rounded-full h-2">
                    <div 
                      className={`h-full bg-gradient-to-r ${getSkillColor(skill.category)} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {skills.map((skill, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 w-64 glass rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                  onClick={() => handleSkillClick(index)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getSkillColor(skill.category)} flex items-center justify-center text-white mb-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">{skill.name}</h3>
                  <p className="text-sm text-gray-light mb-3">{skill.category}</p>
                  <div className="w-full bg-dark-light rounded-full h-2">
                    <div 
                      className={`h-full bg-gradient-to-r ${getSkillColor(skill.category)} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">{skills.length}</div>
                <div className="text-sm text-gray-light">Total Skills</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">8</div>
                <div className="text-sm text-gray-light">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">85%</div>
                <div className="text-sm text-gray-light">Avg. Proficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">3+</div>
                <div className="text-sm text-gray-light">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
