import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Schmid Payen</span>
            </div>
            <p className="text-gray-400 mb-4">
              Senior Software Engineer creating cloud-native, scalable solutions that drive business success and deliver measurable results.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/goldengm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="GitHub Profile"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/schmid-payen-17695a120/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a
                href="mailto:schmid@magehire.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="Email Contact"
              >
                Email
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Cloud-Native Development</li>
              <li>Full-Stack Applications</li>
              <li>AWS & Azure Solutions</li>
              <li>Microservices Architecture</li>
              <li>CI/CD Implementation</li>
              <li>Team Leadership & Mentoring</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <span>© 2025 Schmid Payen. Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>in Bradenton, FL</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <button 
              className="hover:text-white transition-colors duration-200"
              onClick={() => alert('Privacy Policy page would open here')}
            >
              Privacy Policy
            </button>
            <button 
              className="hover:text-white transition-colors duration-200"
              onClick={() => alert('Terms of Service page would open here')}
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-white transition-colors duration-200"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
