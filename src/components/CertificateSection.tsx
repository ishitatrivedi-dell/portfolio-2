import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, X } from 'lucide-react';

const CertificationsSection = ({ certificates }: { certificates: any[] }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevCertificate = () => {
    setCurrentCertIndex((prev) => 
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const nextCertificate = () => {
    setCurrentCertIndex((prev) => 
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Animation variants for certificate card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for modal
  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="py-16 px-4 bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-800"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000' fill='none' stroke='rgba(255,215,0,0.15)' stroke-width='3'%3E%3Cpath d='M500,100 C650,100 800,200 850,350 C900,500 850,650 700,750 C550,850 400,850 300,750 C200,650 150,500 200,350 C250,200 350,100 500,100 Z M500,200 C600,200 700,300 700,400 C700,500 600,600 500,600 C400,600 300,500 300,400 C300,300 400,200 500,200 Z'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.5)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex items-center mb-12 max-w-4xl mx-auto"
      >
        <Award size={48} className="text-yellow-300 mr-6" strokeWidth={1.5} />
        <h3 className="text-4xl md:text-5xl font-serif text-white font-bold tracking-wide">
          My Certifications
        </h3>
      </motion.div>

      {certificates.length > 0 && (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-xl border border-yellow-300/20">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 opacity-10 rounded-2xl animate-pulse" />
            <div className="flex items-center justify-between mb-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevCertificate}
                className="p-3 rounded-full bg-yellow-300/20 hover:bg-yellow-300/40 transition-colors"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={32} className="text-white" />
              </motion.button>
              
              <div className="flex space-x-3">
                {certificates.map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{ scale: index === currentCertIndex ? 1.2 : 1 }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCertIndex ? 'bg-yellow-300' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextCertificate}
                className="p-3 rounded-full bg-yellow-300/20 hover:bg-yellow-300/40 transition-colors"
                aria-label="Next certificate"
              >
                <ChevronRight size={32} className="text-white" />
              </motion.button>
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer relative"
                onClick={openModal}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 rounded-xl filter blur-md animate-pulse" />
                <img
                  src={certificates[currentCertIndex]?.image}
                  alt={certificates[currentCertIndex]?.title}
                  className="w-80 h-80 object-cover rounded-xl mx-auto mb-6 shadow-lg relative z-10"
                />
              </motion.div>
              
              <h4 className="text-2xl md:text-3xl font-serif text-white font-bold mb-3">
                {certificates[currentCertIndex]?.title}
              </h4>
              
              <p className="text-yellow-200 text-lg md:text-xl mb-3">
                {certificates[currentCertIndex]?.issuer}
              </p>
              
              <p className="text-gray-300 text-sm md:text-base">
                Issued: {new Date(certificates[currentCertIndex]?.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {isModalOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative max-w-4xl w-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeModal}
              className="absolute -top-12 right-0 p-2 text-white hover:text-yellow-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={36} />
            </motion.button>
            <div className="relative rounded-lg border-4 border-yellow-300/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 animate-pulse" />
              <img
                src={certificates[currentCertIndex]?.image}
                alt={certificates[currentCertIndex]?.title}
                className="w-full max-h-[80vh] object-contain rounded-lg relative z-10"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CertificationsSection;