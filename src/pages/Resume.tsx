import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Award } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  description: string;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const Resume = () => {
  const [education, setEducation] = useState<Education[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  useEffect(() => {
    import('../data/education.json').then((data) => {
      setEducation(data.default);
    });
    
    import('../data/certificates.json').then((data) => {
      setCertificates(data.default);
    });
  }, []);

  const nextCertificate = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My educational background and professional certifications
          </p>
        </motion.div>


        {/* Education Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <GraduationCap size={32} className="text-orange-500 mr-4" />
            <h3 className="text-3xl font-bold text-white">Education</h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-transparent"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-8 ml-12"
              >
                <div className="absolute -left-10 top-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900"></div>
                
                <div className="glass p-6 hover:bg-white/5 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <span className="text-orange-400 font-semibold">{edu.duration}</span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                    {/* <p className="text-orange-300">GPA: {edu.gpa}</p> */}
                  </div>
                  
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <Award size={32} className="text-orange-500 mr-4" />
            <h3 className="text-3xl font-bold text-white">Certifications</h3>
          </motion.div>

          {certificates.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass p-8 w-full mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevCertificate}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft size={24} className="text-gray-300" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {certificates.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentCertIndex ? 'bg-orange-500' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextCertificate}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight size={24} className="text-gray-300" />
                  </button>
                </div>

                <div className="text-center">
                  <img
                    src={certificates[currentCertIndex]?.image}
                    alt={certificates[currentCertIndex]?.title}
                    className="w-full aspect-video object-cover rounded-xl mx-auto mb-4"
                  />
                  
                  <h4 className="text-xl font-bold text-white mb-2">
                    {certificates[currentCertIndex]?.title}
                  </h4>
                  
                  <p className="text-orange-400 mb-2">
                    {certificates[currentCertIndex]?.issuer}
                  </p>
                  
                  <p className="text-gray-400">
                    Issued: {new Date(certificates[currentCertIndex]?.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;