'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const experiences = [
    {
      company: 'Bricco AB',
      position: 'Software Engineer',
      duration: '2023 - Present',
      location: 'Stockholm, Sweden',
      description: 'Developing scalable backend systems and database solutions for enterprise applications.',
      achievements: [
        'Built high-performance REST APIs serving millions of requests',
        'Optimized database queries resulting in 40% performance improvement',
        'Implemented microservices architecture for better scalability',
        'Led technical decisions for new feature development'
      ]
    },
    {
      company: 'Previous Company',
      position: 'Full-Stack Developer',
      duration: '2021 - 2023',
      location: 'Stockholm, Sweden',
      description: 'Developed full-stack applications using modern web technologies.',
      achievements: [
        'Developed responsive web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver projects on time',
        'Implemented automated testing strategies',
        'Mentored junior developers'
      ]
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Work Experience
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              My professional journey and key achievements
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="flex items-center mb-2">
                      <Building className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      {exp.position}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-600 dark:text-slate-400 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index < experiences.length - 1 && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 md:left-1/3 md:ml-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
