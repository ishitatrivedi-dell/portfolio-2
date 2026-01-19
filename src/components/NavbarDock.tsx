import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, FileText, Mail, Code, Trophy, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden md:block fixed left-6 top-1/2 transform -translate-y-1/2 z-40"
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

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-3 glass rounded-xl border border-primary/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-primary-light" />
          ) : (
            <Menu size={24} className="text-primary-light" />
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 glass border-l border-primary/20"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-light mb-8 font-heading">
                  Navigation
                </h3>
                
                <div className="space-y-3">
                  {dockItems.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => navigateToSection(item.to)}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                        activeIndex === index
                          ? 'bg-primary/20 text-primary-light border border-primary/40'
                          : 'text-gray hover:text-primary-light hover:bg-primary/10'
                      }`}
                    >
                      <motion.div
                        animate={{
                          scale: activeIndex === index ? 1.2 : 1,
                          rotate: activeIndex === index ? 360 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="font-medium text-lg">{item.label}</span>
                      
                      {/* Active indicator for mobile */}
                      {activeIndex === index && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="ml-auto w-2 h-2 bg-primary rounded-full"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4 border border-primary/20">
                    <p className="text-sm text-gray text-center">
                      Ishita Trivedi
                    </p>
                    <p className="text-xs text-gray-light text-center mt-1">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarDock;