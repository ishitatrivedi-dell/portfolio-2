import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download, Eye, ChevronLeft, ChevronRight, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const [education, setEducation] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

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

  const downloadResume = () => {
    // Create download link for resume
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1kqm3Q7a-0VyvN8jFyavWJSP8_GxnGwGm/view?usp=sharing';
    link.download = 'Ishita_Trivedi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeUrl = 'https://drive.google.com/file/d/1kqm3Q7a-0VyvN8jFyavWJSP8_GxnGwGm/preview';

  return (
    <div className="min-h-screen bg-dark text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 font-heading">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-gray-light max-w-3xl mx-auto font-body">
            Download my resume or preview it online. Explore my educational background and professional certifications.
          </p>
        </motion.div>

        {/* Resume Download and Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Download Section */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4 font-heading">
                  Get My Resume
                </h2>
                <p className="text-gray-light mb-6 font-body">
                  Download my complete resume in PDF format to learn more about my experience, skills, and qualifications.
                </p>
                
                <motion.button
                  onClick={downloadResume}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-black rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg mx-auto md:mx-0"
                >
                  <Download size={24} />
                  Download Resume
                </motion.button>
              </div>

              {/* Preview Section */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Quick Preview
                </h3>
                
                <motion.button
                  onClick={() => setShowPreview(!showPreview)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-xl font-semibold transition-all duration-300 hover:bg-primary hover:text-black mb-4 mx-auto"
                >
                  <Eye size={20} />
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </motion.button>

                {showPreview && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-xl overflow-hidden border border-primary/20"
                  >
                    <iframe
                      src={resumeUrl}
                      className="w-full h-96 md:h-[500px]"
                      title="Resume Preview"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <GraduationCap size={32} className="text-primary-light mr-4" />
            <h2 className="text-3xl font-bold text-white font-heading">Education Background</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">{edu.degree}</h3>
                    <p className="text-primary-light font-semibold">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-light text-sm mb-1">
                      <Calendar size={14} className="mr-1" />
                      {edu.duration}
                    </div>
                    {edu.gpa && (
                      <div className="text-primary-light text-sm font-semibold">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-light font-body">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <Award size={32} className="text-primary-light mr-4" />
            <h2 className="text-3xl font-bold text-white font-heading">Professional Certifications</h2>
          </div>

          {certificates.length > 0 && (
            <div className="relative">
              <div className="glass rounded-2xl p-8 border border-primary/20">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevCertificate}
                    className="p-3 rounded-full hover:bg-primary/10 transition-colors border border-primary/20"
                  >
                    <ChevronLeft size={24} className="text-primary-light" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {certificates.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentCertIndex ? 'bg-primary w-8' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextCertificate}
                    className="p-3 rounded-full hover:bg-primary/10 transition-colors border border-primary/20"
                  >
                    <ChevronRight size={24} className="text-primary-light" />
                  </button>
                </div>

                <div className="text-center">
                  <motion.div
                    key={currentCertIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={certificates[currentCertIndex]?.image}
                      alt={certificates[currentCertIndex]?.title}
                      className="w-full max-w-2xl aspect-video object-cover rounded-xl mx-auto mb-6 shadow-xl"
                    />
                    
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                      {certificates[currentCertIndex]?.title}
                    </h3>
                    
                    <p className="text-primary-light text-lg mb-2">
                      {certificates[currentCertIndex]?.issuer}
                    </p>
                    
                    
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">{education.length}</div>
                <div className="text-sm text-gray-light">Education</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">{certificates.length}</div>
                <div className="text-sm text-gray-light">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">2+</div>
                <div className="text-sm text-gray-light">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">15+</div>
                <div className="text-sm text-gray-light">Skills Mastered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;