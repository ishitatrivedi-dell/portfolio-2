import { motion } from 'framer-motion';
import { Home, Briefcase, FileText, Mail } from 'lucide-react';
import { useState } from 'react';

interface DockItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const dockItems: DockItem[] = [
  { icon: <Home size={24} />, label: 'Home', href: '#home' },
  { icon: <Briefcase size={24} />, label: 'Portfolio', href: '#portfolio' },
  { icon: <FileText size={24} />, label: 'Resume', href: '#resume' },
  { icon: <Mail size={24} />, label: 'Contact', href: '#contact' },
];

const NavbarDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number, href: string) => {
    setActiveIndex(index);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 left-0 right-0 flex justify-center z-40"
    >
      <div className="glass dock-shadow px-4 py-3 rounded-2xl max-w-md w-fit mx-4">
        <div className="flex items-center justify-center space-x-2">
          {dockItems.map((item, index) => (
            <motion.button
              key={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleClick(index, item.href)}
              whileHover={{ scale: 1.2, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-3 rounded-xl transition-all duration-200 ${
                activeIndex === index
                  ? 'bg-white/20 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.icon}
              
              {/* Tooltip */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2"
                >
                  <div className="glass px-2 py-1 rounded-lg text-sm whitespace-nowrap">
                    {item.label}
                  </div>
                </motion.div>
              )}
              
              {/* Active indicator */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 w-1 h-1 bg-orange-500 rounded-full transform -translate-x-1/2"
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