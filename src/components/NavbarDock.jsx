import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Briefcase,
  FileText,
  Mail,
  Code,
  Trophy,
  Menu,
  X,
  Heart,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const dockItems = [
  { icon: <Home size={24} />, label: 'Home', to: '/' },
  { icon: <Code size={24} />, label: 'Skills', to: '/skills' },
  { icon: <Briefcase size={24} />, label: 'Projects', to: '/projects' },
  { icon: <Trophy size={24} />, label: 'Hackathons', to: '/hackathons' },
  { icon: <FileText size={24} />, label: 'Resume', to: '/resume' },
  { icon: <Heart size={24} />, label: 'Activities', to: '/activities' },
  { icon: <Mail size={24} />, label: 'Contact', to: '/contact' },
];

const NavbarDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Active item logic
  useEffect(() => {
    let activeIdx = 0;

    if (location.pathname === '/') activeIdx = 0;
    else if (location.pathname === '/skills') activeIdx = 1;
    else if (location.pathname === '/projects') activeIdx = 2;
    else if (location.pathname === '/hackathons') activeIdx = 3;
    else if (location.pathname === '/resume') activeIdx = 4;
    else if (location.pathname === '/activities') activeIdx = 5;
    else if (location.pathname === '/contact') activeIdx = 6;

    setActiveIndex(activeIdx);
  }, [location]);

  // 🔹 Navigation handler (hash + routes)
  const navigateToSection = (to) => {
    if (to.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        window.location.hash = to.substring(1);
      }, 0);
    } else {
      navigate(to);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden md:flex fixed left-4 top-0 h-screen items-center z-40"
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
                    className="absolute left-14 top-1/2 -translate-y-1/2 z-50"
                  >
                    <div className="glass px-3 py-1 rounded-lg text-sm font-medium shadow-xl">
                      {item.label}
                    </div>
                  </motion.div>
                )}

                {/* Active dot */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -right-1 top-1/2 w-1.5 h-1.5 bg-primary rounded-full -translate-y-1/2"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ================= MOBILE MENU BUTTON ================= */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-3 glass rounded-xl border border-primary/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-primary-light" />
        ) : (
          <Menu size={24} className="text-primary-light" />
        )}
      </motion.button>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 glass border-l border-primary/20"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-light mb-8">
                  Navigation
                </h3>

                <div className="space-y-3">
                  {dockItems.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => navigateToSection(item.to)}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full flex items-center space-x-4 p-4 rounded-xl ${
                        activeIndex === index
                          ? 'bg-primary/20 text-primary-light border border-primary/40'
                          : 'text-gray hover:text-primary-light hover:bg-primary/10'
                      }`}
                    >
                      {item.icon}
                      <span className="text-lg">{item.label}</span>

                      {activeIndex === index && (
                        <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4 border border-primary/20 text-center">
                    <p className="text-sm text-gray">Ishita Trivedi</p>
                    <p className="text-xs text-gray-light mt-1">
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
