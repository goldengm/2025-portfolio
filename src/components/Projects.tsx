import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Award, Zap, Cloud, Database, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  // const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'Cloud-Native Audio Device Management',
      client: 'EarthSoft',
      description: 'Developed robust middleware solutions for cutting-edge audio and network devices using AWS IoT Core and custom WebSockets. Implemented CI/CD automation pipelines with comprehensive testing frameworks.',
      technologies: ['AWS IoT Core', 'WebSockets', 'C#', 'Docker', 'CI/CD'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-neon-blue to-blue-600',
      icon: Cloud,
      achievements: ['99.9% Uptime', 'Real-time Processing', 'Scalable Architecture'],
      year: '2024'
    },
    {
      title: 'Mortgage Application Platform',
      client: 'Bee Mortgage App',
      description: 'Designed and developed cloud-native backend services using ASP.NET MVC C#, ASP.NET WebAPI, and React with TypeScript. Integrated third-party credit and underwriting APIs, contributing to industry awards.',
      technologies: ['ASP.NET', 'React', 'TypeScript', 'OAuth/JWT', 'RESTful APIs'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-neon-purple to-purple-600',
      icon: Database,
      achievements: ['Industry Award Winner', '50% Faster Processing', '99.5% Accuracy'],
      year: '2023'
    },
    {
      title: 'E-Commerce Sales Management System',
      client: 'Exigo',
      description: 'Architected and built an ECommerce website allowing sales reps to manage customer orders. Built tool-based applications including label printer integration and PDF presentation generators.',
      technologies: ['ASP.NET', 'C#', 'Blazor', 'GraphQL', 'AWS ECS/ECR'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-neon-pink to-pink-600',
      icon: Zap,
      achievements: ['300% Sales Increase', 'Automated Workflows', 'Multi-tenant Architecture'],
      year: '2023'
    }
  ];

  const projectStats = [
    { number: '35+', label: 'Projects Delivered', icon: Code },
    { number: '8', label: 'Awards Won', icon: Award },
    { number: '99.9%', label: 'Client Satisfaction', icon: Eye },
    { number: '18+', label: 'Technologies Mastered', icon: Zap }
  ];

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-neon-blue/10 to-neon-green/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container-max relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my most impactful projects, where I've transformed 
            <span className="text-neon-blue font-semibold"> complex business challenges</span> into 
            <span className="text-neon-purple font-semibold"> innovative digital solutions</span>.
          </motion.p>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {projectStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <motion.div 
                className="cyber-card rounded-2xl p-6 relative overflow-hidden group"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(0, 245, 255, 0.3)"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center mx-auto mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-2xl font-bold gradient-text mb-1"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
              // onMouseEnter={() => setHoveredProject(index)}
              // onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div 
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${mousePosition.y * -2}deg)`,
                }}
              >
                {/* Project Image/Visual */}
                <motion.div 
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="cyber-card rounded-3xl p-8 relative overflow-hidden group"
                    whileHover={{ 
                      boxShadow: "0 0 50px rgba(0, 245, 255, 0.3)"
                    }}
                  >
                    {/* Animated background */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Project visual representation */}
                    <div className="relative z-10">
                      <motion.div 
                        className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-neon"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <project.icon className="w-12 h-12 text-neon-blue" />
                      </motion.div>
                      
                      <div className="text-center mb-6">
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.title}
                        </motion.h3>
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                          <span>Client: {project.client}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                      
                      {/* Achievement badges */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <motion.span
                            key={achIndex}
                            className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue text-xs rounded-full border border-neon-blue/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Project Details */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="cyber-card rounded-3xl p-8 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 40px rgba(0, 245, 255, 0.2)"
                    }}
                  >
                    {/* Hover effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.p 
                        className="text-lg text-gray-300 mb-8 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                      
                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-white font-semibold mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 text-sm rounded-lg border border-gray-600 hover:border-neon-blue transition-colors duration-300"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ 
                                scale: 1.1,
                                backgroundColor: "rgba(0, 245, 255, 0.1)"
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Projects;
