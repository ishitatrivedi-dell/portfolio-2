import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone, Briefcase, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/mrbpjqkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Thank you for your message! I'll get back to you soon.");
        reset();
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "ishita.trivedi.cg@gmail.com",
      href: "mailto:ishita.trivedi.cg@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/ishitatrivedi-dell",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ishita-trivedi0611/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-300"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle size={24} />,
      title: "Quick Response",
      description: "I typically respond within 24 hours"
    },
    {
      icon: <Star size={24} />,
      title: "Professional Communication",
      description: "Clear, concise, and project-focused discussions"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Project Collaboration",
      description: "Open to freelance and full-time opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 font-heading">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-gray-light max-w-3xl mx-auto font-body">
            I'm always excited to discuss new opportunities, collaborations, or just chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-light mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      className="w-full px-4 py-3 bg-dark-light border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-light transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-light mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address"
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 bg-dark-light border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-light transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-light mb-2">
                    Subject *
                  </label>
                  <input
                    {...register("subject", { required: "Subject is required" })}
                    type="text"
                    className="w-full px-4 py-3 bg-dark-light border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-light transition-colors"
                    placeholder="Project Collaboration | Job Opportunity | General Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-light mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", { 
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters"
                      }
                    })}
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-light border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-light transition-colors resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-black rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg"
                >
                  <Send size={20} />
                  Send Message
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary-light">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-light">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl bg-dark-light border border-gray-600 flex items-center justify-center text-gray transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Contact Me */}
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                Why Work With Me?
              </h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary-light flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-light">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={20} className="text-primary-light" />
                <h4 className="text-lg font-semibold text-white">Availability</h4>
              </div>
              <p className="text-sm text-gray-light mb-3">
                Currently open to new opportunities and collaborations
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-primary/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-light mb-6 max-w-2xl mx-auto">
              Whether you're looking for a full-stack developer, project collaboration, or just want to discuss ideas, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://drive.google.com/file/d/1kqm3Q7a-0VyvN8jFyavWJSP8_GxnGwGm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-xl font-semibold transition-all duration-300 hover:bg-primary hover:text-black"
              >
                <Briefcase size={20} />
                Download Resume
              </motion.a>
              <motion.a
                href="https://github.com/ishitatrivedi-dell"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-black rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Github size={20} />
                View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
