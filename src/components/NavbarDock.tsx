import { motion } from 'framer-motion';
import { Home, Briefcase, FileText, Mail, Code, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface DockItem {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const dockItems: DockItem[] = [
  { icon: <Home size={24} />, label: 'Home', to: '#home' },
  { icon: <Code size={24} />, label: 'Skills', to: '#skills' },
  { icon: <Briefcase size={24} />, label: 'Projects', to: '#projects' },
  { icon: <Trophy size={24} />, label: 'Hackathons', to: '#hackathons' },
  { icon: <FileText size={24} />, label: 'Resume', to: '#resume' },
  { icon: <Mail size={24} />, label: 'Contact', to: '#contact' },
];

const NavbarDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '') || 'home';
    const idx = dockItems.findIndex((item) => item.to === `#${hash}`);
    setActiveIndex(idx === -1 ? 0 : idx);
  }, [location.hash]);

  const navigateToSection = (to: string) => {
    const sectionId = to.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40"
    >
      <div className="glass dock-shadow px-3 py-4 rounded-2xl">
        <div className="flex flex-col items-center space-y-2">
          {dockItems.map((item, index) => (
            <motion.button
              key={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => navigateToSection(item.to)}
              whileHover={{ scale: 1.2, x: 8 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-3 rounded-xl transition-all duration-200 ${
                activeIndex === index
                  ? 'bg-primary/20 text-primary-light border border-primary/40'
                  : 'text-gray hover:text-primary-light'
              }`}
            >
              {item.icon}
              
              {/* Tooltip */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute left-16 top-1/2 transform -translate-y-1/2"
                >
                  <div className="glass px-3 py-1 rounded-lg text-sm whitespace-nowrap font-medium">
                    {item.label}
                  </div>
                </motion.div>
              )}
              
              {/* Active indicator */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -right-1 top-1/2 w-1 h-1 bg-primary rounded-full transform -translate-y-1/2"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarDock;