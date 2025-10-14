import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Zap, Rocket, Mail, Linkedin, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black"
    >
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient overlay with more contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/70 to-gray-900/90"></div>
        
        {/* Prominent animated gradient orbs with enhanced visibility */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/25 to-pink-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            x: [0, 30, -20, 0],
            y: [0, -25, 35, 0]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Enhanced floating geometric shapes with glow effects */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400/40 rotate-45 shadow-lg shadow-cyan-400/20"
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400/50 rounded-full shadow-lg shadow-purple-400/20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-green-400/40 rotate-12 shadow-lg shadow-green-400/20"
          animate={{ 
            rotate: [12, 192, 12],
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Additional geometric elements for more visual interest */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-16 h-16 border border-pink-400/30 rotate-45"
          animate={{ 
            rotate: [45, 405, 45],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-blue-400/40 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Enhanced energy waves with more prominent rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-96 h-96 border-2 border-cyan-400/30 rounded-full shadow-lg shadow-cyan-400/10"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute w-80 h-80 border-2 border-purple-400/25 rounded-full shadow-lg shadow-purple-400/10"
            animate={{ 
              scale: [1.3, 1, 1.3],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute w-64 h-64 border-2 border-green-400/20 rounded-full shadow-lg shadow-green-400/10"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute w-48 h-48 border border-pink-400/15 rounded-full"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>
        
        {/* Animated connecting lines for network effect */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.line
            x1="20%"
            y1="30%"
            x2="80%"
            y2="70%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.line
            x1="80%"
            y1="30%"
            x2="20%"
            y2="70%"
            stroke="url(#gradient2)"
            strokeWidth="1"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#bf00ff" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff0080" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00ff80" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <motion.div 
        style={{ y, opacity }}
        className="container-max py-16 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-sm text-gray-300 mb-8"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              Available for new projects
            </motion.div>
            
            {/* Main Heading */}
              <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
              <span className="block text-white mb-2">Schmid Payen</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-400 font-light">
                Senior Software Engineer
              </span>
              </motion.h1>
              
            {/* Subtitle */}
              <motion.div 
              className="text-xl md:text-2xl text-gray-300 font-medium mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
              Building <span className="text-white font-semibold">Cloud-Native Solutions</span> with Modern Technologies
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Results-driven Senior Software Engineer with <span className="text-white font-semibold">10+ years</span> of experience in full-stack development. 
              I specialize in <span className="text-white font-semibold">React, .NET, AWS cloud services</span>, and building scalable applications that drive business success. 
              Proven track record of delivering high-performance solutions and leading technical teams.
            </motion.p>


            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex justify-center space-x-6 mb-16"
            >
              {[
                { icon: Github, href: "https://github.com/goldengm", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/schmid-payen-17695a120/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:schmid@magehire.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 bg-gray-900/80 border border-gray-700 text-gray-300 hover:text-white hover:border-white hover:bg-white/10 rounded-lg transition-all duration-300 black-shadow"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: "10+", label: "Years Experience", icon: Code },
                { number: "15+", label: "Technologies", icon: Zap },
                { number: "5", label: "Awards Earned", icon: Rocket }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-lg black-shadow"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium flex items-center justify-center">
                    <stat.icon className="mr-2 text-gray-500" size={16} />
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            className="flex flex-col items-center text-gray-400 group cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.span 
              className="text-sm mb-3 font-medium group-hover:text-white transition-colors duration-300"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.div 
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-white transition-colors duration-300"
              whileHover={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
            >
              <motion.div 
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
