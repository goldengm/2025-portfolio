import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'EarthSoft',
      position: 'Software Engineer (Remote)',
      duration: 'NOV 2022 - SEP 2025',
      location: 'Remote',
      description: 'Earned Service Excellence Award after only two months and Service Level Award within four months, demonstrating exceptional performance.',
      responsibilities: [
        'Conducted initial requirements gathering and strategically selected Next.js (front-end) and NestJS (back-end) for development.',
        'Facilitated the onboarding of engineers to the project, created multiple components as examples and helped out coding during crunch time.',
        'Implemented TypeScript and GraphQL, providing necessary mentoring for engineers unfamiliar with these technologies.',
        'Employed React, GraphQL, and Codegen with Next.js, and Express, TypeScript, GraphQL and TypeORM with NestJS.',
        'Utilized Docker and GitHub Actions for CI/CD and automated rollout of deployment to Google Kubernetes for each environment (QA, UAT and Production).',
        'Completed 2 .NET Core Projects; one interfaced with ClinicalTrials.gov and the other Go Systems Tax Returns. Both projects were managed in Microsoft Azure Platform, which I had to set up App Services and Databases.'
      ],
      logo: '🏆'
    },
    {
      company: 'Exigo',
      position: 'Senior .NET Engineer (Remote)',
      duration: 'APR 2021 - JUN 2022',
      location: 'Remote',
      description: 'Led development of cross-platform learning and health backend solutions with Python, Django, Flask, and React Native.',
      responsibilities: [
        'Architected and built an ECommerce based website and it allows sales reps to log in and manage orders for their customers.',
        'Built other tool-based applications, such as an application to generate labels via a label printer for shipping orders, application to generate PDF presentations for the sales reps to highlight specific collection of products to their customers.',
        'Built all application using ASP.NET, C#, Blazor and GraphQL, and Managed from the ground up using AWS ECR/ECS/ALB/Route53/Certificates.',
        'Developed robust middleware solutions that facilitated secure communication and command execution for cutting-edge audio and network devices using AWS IoT Core and custom WebSockets.'
      ],
      logo: '💻'
    },
    {
      company: 'CORPSMART',
      position: 'Senior Software Engineer, Contractor (Remote)',
      duration: 'MAY 2019 - FEB 2021',
      location: 'Remote',
      description: 'Conducted requirements gathering and strategically selected Next.js and NestJS for development, facilitating engineer onboarding.',
      responsibilities: [
        'Architected and built an Event Registrations, Trip Reservations, Member Sites and Administration Sites all using ASP.NET, C# Angular and GraphQL.',
        'Leveraged both Stripe and PriorityPay DirectPay APIs, and Implemented a 2-Tier Affiliate network to promote multiple membership packages.',
        'Orchestrated containerized services in a serverless AWS env with Docker, leveraging ECS for autoscaling to handle surges in traffic while optimizing resource allocation.'
      ],
      logo: '🚀'
    },
    {
      company: 'National Taxi Services',
      position: 'Full Stack .NET Engineer (Remote)',
      duration: 'FEB 2018 - JUN 2019',
      location: 'Remote',
      description: 'Developed comprehensive taxi management solutions with full-stack .NET technologies and modern web frameworks.',
      responsibilities: [
        'Designed and developed cloud-native backend services using ASP.NET MVC C#, ASP.NET WebAPI, React using TypeScript.',
        'Redesigned Social Inbox to improve rendering performance by utilizing React.',
        'Designed and implemented Authentication Server that issued OAuth JWT Tokens for web and mobile.'
      ],
      logo: '🚕'
    },
    {
      company: 'National Taxi Services',
      position: 'Mid .NET/Angular Engineer',
      duration: 'SEP 2017 - FEB 2018',
      location: 'Remote',
      description: 'Specialized in Angular development and .NET backend services for transportation management systems.',
      responsibilities: [
        'Ported .NET application to AngularJS SPA application including SignalR.',
        'Created a Common library as Nuget Package to wrap NHibernate/Fluent NHibernate using Autofac IOC as well as an AngularJS Web Application starter site as a Visual Studio Template.',
        'Created a Nuget Package, and Used SignalR for real time updating of download status and zip file retrieval.',
        'Implemented CI/CD automation pipelines with comprehensive testing frameworks, significantly improving delivery reliability.',
        'Created scalable, cloud-native services in a serverless AWS environment utilizing Lambda, S3, RDS, and DynamoDB.'
      ],
      logo: '🚕'
    },
    {
      company: 'Envision2bWell Inc',
      position: 'Software Engineer',
      duration: 'APR 2015 - AUG 2017',
      location: 'New York, NY',
      description: 'Developed health and wellness applications with focus on user experience and data management.',
      responsibilities: [
        'Integrated mobile and web applications with MySQL databases for synchronized user experiences, optimizing data flow.',
        'Implemented CI/CD workflows, enabling faster and more reliable deployments and automating testing pipelines.',
        'Owned the development of cross-platform learning and health backend solutions with Python, Django, Flask, React Native, focusing on creating cloud-native services.',
        'Collaborated cross-functionally with UI/UX designers to translate complex business workflows into intuitive responsive tools.'
      ],
      logo: '🏥'
    },
    {
      company: 'Bee Mortgage App',
      position: 'Full Stack Developer',
      duration: 'FEB 2014 - APR 2015',
      location: 'Bradenton, FL',
      description: 'Contributed to BeeMortgage\'s rise as a top mortgage broker in FL and IN, helping secure two major industry awards through technology-driven solutions.',
      responsibilities: [
        'Contributed to BeeMortgage\'s rise as a top mortgage broker in FL and IN, helping secure two major industry awards through technology-driven media recognition, showcasing direct impact on business success.',
        'Integrated third-party credit and underwriting APIs into backend services, streamlining the mortgage application process.',
        'Collaborated with product and compliance teams to ensure all user flows met regulatory requirements and enhanced customer trust, demonstrating Relationship-building and attention to detail.'
      ],
      logo: '🏦'
    }
  ];

  const skills = [
    'React', 'React Native', 'TypeScript', 'JavaScript', 'C#', 'ASP.NET', 
    'AWS Services', 'Docker', 'GraphQL', 'Python', 'Django', 'Flask',
    'MongoDB', 'MySQL', 'PostgreSQL', 'Git/GitHub', 'CI/CD', 'Kubernetes',
    'Azure', 'Microservices', 'RESTful APIs', 'OAuth/JWT', 'WebSockets'
  ];

  return (
    <section id="experience" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here's where I've applied my skills to create meaningful impact and drive results for businesses and teams.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl mb-4">
                    {exp.logo}
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 ml-8"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-900 rounded-2xl p-8 black-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-semibold text-primary-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-sm text-gray-300 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 italic">
                    "{exp.description}"
                  </p>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-2xl p-8 black-shadow"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Skills Developed Through Experience
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200 black-shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
