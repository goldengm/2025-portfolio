import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Cloud-Native Architecture',
      description: 'I design and build scalable, serverless applications using AWS, Azure, and modern cloud technologies. From microservices to IoT solutions, I create robust systems that grow with your business.',
      technologies: ['AWS Services', 'Azure Platform', 'Docker & Kubernetes', 'Serverless Architecture']
    },
    {
      icon: Smartphone,
      title: 'Full-Stack Development',
      description: 'Expert in both frontend and backend technologies including React, .NET, Python, and mobile development. I deliver complete solutions from user interface to database design and API development.',
      technologies: ['React & React Native', 'C# ASP.NET', 'Python Django/Flask', 'GraphQL & REST APIs']
    },
    {
      icon: Zap,
      title: 'Award-Winning Performance',
      description: 'Proven track record of delivering exceptional results with multiple service excellence awards. I focus on performance optimization, clean code, and solutions that drive measurable business impact.',
      technologies: ['Performance Optimization', 'CI/CD Automation', 'Code Quality', 'Team Leadership']
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'C# ASP.NET', icon: '🔷' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' }
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How I Drive Business Success Through Technology
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            As a results-driven Senior Software Engineer with 10+ years of experience, I combine cloud-native technologies 
            with proven methodologies to build scalable solutions that deliver measurable business impact and drive growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 black-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700 black-shadow"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium text-gray-300">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
