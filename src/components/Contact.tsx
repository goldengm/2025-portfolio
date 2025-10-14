import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'schmid@magehire.com',
      link: 'mailto:schmid@magehire.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 941.580.7652',
      link: 'tel:+19415807652'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bradenton, FL, 34208',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/goldengm',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/schmid-payen-17695a120/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:schmid@magehire.com',
      color: 'hover:text-primary-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing Together?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Whether you have a specific project in mind, a question about my services, or just want to connect, 
            I'm here to help. Let's turn your ideas into a powerful web solution.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200 group black-shadow"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors duration-200">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{info.title}</div>
                      <div className="text-gray-300">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 transition-colors duration-200 ${social.color} black-shadow`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
