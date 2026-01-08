import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import NavbarDock from './components/NavbarDock';
import Home from './pages/Home';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="scroll-smooth">
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/*" element={<Home />} />
            </Routes>
          </motion.div>

          <NavbarDock />
        </>
      )}
    </div>
  );
}

export default App;