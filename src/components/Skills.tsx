import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Database, 
  Cloud, 
  CheckCircle, 
  Monitor,
  Smartphone,
  Zap,
  Shield,
  GitBranch,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building modern, responsive user interfaces with cutting-edge technologies.',
      icon: Monitor,
      color: 'from-neon-blue to-blue-600',
      skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'AngularJS', 'Blazor SSR'],
      level: 95
    },
    {
      title: 'Backend & APIs',
      description: 'Developing robust, scalable server-side applications and microservices.',
      icon: Database,
      color: 'from-neon-purple to-purple-600',
      skills: ['C# ASP.NET', 'ASP.NET Core', 'Python', 'Django', 'Flask', 'GraphQL', 'RESTful APIs'],
      level: 92
    },
    {
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications in cloud environments.',
      icon: Cloud,
      color: 'from-neon-green to-green-600',
      skills: ['AWS (ECS/ECR/ELB/EC2/S3/IAM)', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
      level: 88
    },
    {
      title: 'Databases & Storage',
      description: 'Designing and managing data storage solutions.',
      icon: Database,
      color: 'from-neon-pink to-pink-600',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'Elasticsearch', 'DynamoDB'],
      level: 85
    },
    {
      title: 'Mobile & Real-time',
      description: 'Building mobile applications and real-time communication systems.',
      icon: Smartphone,
      color: 'from-yellow-400 to-orange-500',
      skills: ['React Native', 'Fastlane', 'Socket.IO', 'WebSockets', 'AWS IoT Core', 'SignalR'],
      level: 82
    }
  ];

  const technologies = [
    { name: 'React', level: 95, color: 'from-blue-400 to-blue-600', icon: '⚛️' },
    { name: 'C# ASP.NET', level: 92, color: 'from-purple-400 to-purple-600', icon: '🔷' },
    { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700', icon: '📘' },
    { name: 'AWS Services', level: 88, color: 'from-orange-400 to-orange-600', icon: '☁️' },
    { name: 'Python', level: 85, color: 'from-green-400 to-green-600', icon: '🐍' },
    { name: 'Docker', level: 82, color: 'from-blue-300 to-blue-500', icon: '🐳' }
  ];

  const strengths = [
    { icon: Zap, title: 'Cloud-Native', description: 'Expert in AWS, Azure, and serverless architectures', color: 'text-neon-blue' },
    { icon: Shield, title: 'Award-Winning', description: 'Multiple service excellence and performance awards', color: 'text-neon-purple' },
    { icon: Smartphone, title: 'Full-Stack', description: 'End-to-end development from frontend to backend', color: 'text-neon-pink' },
    { icon: GitBranch, title: 'Team Leadership', description: 'Mentoring engineers and leading technical teams', color: 'text-neon-green' }
  ];

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-neon-pink/10 to-neon-green/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15,
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
            <span className="gradient-text">Technical Expertise</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive showcase of the technologies, tools, and methodologies I leverage to build 
            <span className="text-neon-blue font-semibold"> high-performance applications</span> and 
            <span className="text-neon-purple font-semibold"> scalable solutions</span>.
          </motion.p>
        </motion.div>

        {/* Interactive Skill Categories */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skill Categories
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="perspective-1000"
                onClick={() => setActiveCategory(index)}
              >
                <motion.div 
                  className={`cyber-card rounded-2xl p-6 cursor-pointer relative overflow-hidden ${
                    activeCategory === index ? 'ring-2 ring-neon-blue' : ''
                  }`}
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${mousePosition.y * -2}deg)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`}
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
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 shadow-neon`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">
                      {category.title}
                    </h4>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Skill level indicator */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Proficiency</span>
                        <span className="text-sm font-bold text-neon-blue">{category.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${category.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.slice(0, 3).map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex}
                          className="flex items-center text-sm text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                          {skill}
                        </motion.div>
                      ))}
                      {category.skills.length > 3 && (
                        <div className="text-xs text-gray-500">
                          +{category.skills.length - 3} more technologies
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Proficiency with 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="cyber-card rounded-3xl p-8 mb-20"
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-12 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Technology Mastery</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  x: 10
                }}
                className="group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-bold text-white text-lg">{tech.name}</span>
                  </div>
                  <motion.span 
                    className="text-lg font-bold text-neon-blue"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech.level}%
                  </motion.span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${tech.color} relative`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ 
                        x: ["-100%", "100%"]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Strengths with 3D Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                z: 50
              }}
              className="perspective-1000"
            >
              <motion.div 
                className="cyber-card rounded-2xl p-6 text-center relative overflow-hidden group"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 1}deg) rotateX(${mousePosition.y * -1}deg)`,
                }}
              >
                {/* Hover effect */}
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
                    className={`w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-neon group-hover:shadow-neon-lg transition-all duration-300`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <strength.icon className={`w-8 h-8 ${strength.color}`} />
                  </motion.div>
                  
                  <motion.h4 
                    className="font-bold text-white mb-3 text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {strength.title}
                  </motion.h4>
                  
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Achievement Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center space-x-8"
        >
          {[
            { icon: Award, text: "5+ Awards", color: "text-yellow-400" },
            { icon: Star, text: "10+ Years", color: "text-neon-blue" },
            { icon: TrendingUp, text: "15+ Tech", color: "text-neon-purple" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 glass-effect rounded-full px-4 py-2"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
              whileHover={{ scale: 1.1 }}
            >
              <badge.icon className={`w-5 h-5 ${badge.color}`} />
              <span className="text-white font-medium text-sm">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
