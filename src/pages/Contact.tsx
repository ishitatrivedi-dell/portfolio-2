import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log('Form data:', data);
    // Handle form submission here
    alert('Message sent successfully!');
    reset();
  };

  const socialLinks = [
    { icon: <Github size={24} />, label: 'GitHub', href: 'https://github.com/ishitatrivedi-dell' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ishita-trivedi0611/' },
    { icon: <Twitter size={24} />, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <Mail size={24} />, label: 'Email', href: 'mailto:ishita.trivedi.cg@gmail.com' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-8 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <MapPin size={20} className="mr-4 text-orange-500" />
                  <span>Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail size={20} className="mr-4 text-orange-500" />
                  <span>ishita.trivedi.cg@gmail.com</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center p-4 glass border border-gray-600 rounded-xl hover:border-orange-500 transition-colors group"
                  >
                    <span className="text-gray-300 group-hover:text-orange-400 transition-colors mr-3">
                      {link.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass p-8">
              <h4 className="text-xl font-bold text-white mb-4">Available for</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Full-stack web development</li>
                <li>• React & Node.js projects</li>
                <li>• UI/UX design consultation</li>
                <li>• Code reviews & mentoring</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-gray-600"
        >
          <p className="text-gray-400">
            © 2024 Alex Developer. Built with React & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;