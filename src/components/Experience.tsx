'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building2, Award } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Bricco AB',
      location: 'Stockholm, Sweden',
      period: '2021 - Present',
      type: 'Full-time',
      description: 'Developing and maintaining backend systems, optimizing database performance, and implementing scalable solutions for high-traffic applications.',
      achievements: [
        'Improved system performance by 40% through database optimization',
        'Led migration to microservices architecture',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      title: 'Backend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Stockholm, Sweden',
      period: '2019 - 2021',
      type: 'Full-time',
      description: 'Built RESTful APIs and worked on database design for e-commerce platforms. Collaborated with frontend teams to deliver seamless user experiences.',
      achievements: [
        'Developed high-performance APIs handling 10k+ requests per minute',
        'Designed and implemented database schemas for complex business logic',
        'Integrated third-party payment systems and shipping providers',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['JavaScript', 'Express.js', 'MongoDB', 'Redis', 'Git']
    }
  ];

  const education = [
    {
      title: 'Master of Science in Computer Science',
      institution: 'Uppsala University',
      location: 'Uppsala, Sweden',
      period: '2017 - 2019',
      description: 'Specialized in artificial intelligence, machine learning, and distributed systems. Completed thesis on deep learning applications in computer vision.',
      achievements: [
        'Graduated with distinction (GPA: 3.8/4.0)',
        'Published research paper on neural network optimization',
        'Completed AI competition with top 10% ranking',
        'Active member of computer science student association'
      ]
    },
    {
      title: 'Bachelor of Science in Software Engineering',
      institution: 'Stockholm University',
      location: 'Stockholm, Sweden',
      period: '2014 - 2017',
      description: 'Comprehensive study of software development, algorithms, data structures, and software engineering principles.',
      achievements: [
        'Dean\'s List for academic excellence',
        'Led team project developing mobile application',
        'Completed internship at local software company',
        'Volunteered as programming tutor for underclassmen'
      ]
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Experience & Education
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              My professional journey and academic background
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center">
              <Building2 className="h-8 w-8 mr-3 text-blue-600" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-md relative"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                        <Building2 className="h-4 w-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400">
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center">
              <Award className="h-8 w-8 mr-3 text-blue-600" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  variants={itemVariants}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                        {edu.title}
                      </h4>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                        <Building2 className="h-4 w-4 mr-2" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400">
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
