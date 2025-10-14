import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Code, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', icon: Code },
    { name: 'About', href: '#about', icon: Zap },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#experience', icon: Zap },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Contact', href: '#contact', icon: Zap },
  ];

  const socialLinks = [
    {
      href: "https://github.com/goldengm",
      icon: Github,
      label: "GitHub Profile",
      color: "hover:text-neon-blue"
    },
    {
      href: "https://www.linkedin.com/in/schmid-payen-17695a120/",
      icon: Linkedin,
      label: "LinkedIn Profile",
      color: "hover:text-neon-purple"
    },
    {
      href: "mailto:schmid@magehire.com",
      icon: Mail,
      label: "Email Contact",
      color: "hover:text-neon-pink"
    }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700'
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-max py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex items-center space-x-3 z-10 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg border border-gray-300 relative overflow-hidden"
              whileHover={{ 
                rotate: 360,
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-pink opacity-0 hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="text-gray-800 font-bold text-lg relative z-10">S</span>
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Schmid Payen
            </motion.span>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 z-10 relative">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative group px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-white bg-white/20 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={16} />
                  <span className="font-medium">{item.name}</span>
                </div>
                
                {/* Active indicator */}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                    layoutId="activeSection"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* Enhanced Social Links */}
          <div className="hidden md:flex items-center space-x-3 z-10 relative">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-3 bg-white/10 border border-gray-600 text-gray-300 ${social.color} hover:border-white hover:bg-white/20 rounded-xl transition-all duration-300 relative overflow-hidden group`}
                title={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <social.icon size={20} className="relative z-10" />
              </motion.a>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 bg-white/10 border border-gray-600 text-gray-300 hover:text-white hover:border-white hover:bg-white/20 rounded-xl transition-all duration-300 relative overflow-hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 py-6 bg-gray-900/95 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 rounded-lg relative overflow-hidden group ${
                      activeSection === item.href.slice(1)
                        ? 'text-white bg-white/20'
                        : 'hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <item.icon size={18} className="relative z-10" />
                    <span className="relative z-10">{item.name}</span>
                  </motion.a>
                ))}
                
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-600 px-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`p-3 bg-white/10 border border-gray-600 text-gray-300 ${social.color} hover:border-white hover:bg-white/20 rounded-xl transition-all duration-300 relative overflow-hidden group`}
                      title={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ 
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <social.icon size={20} className="relative z-10" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
