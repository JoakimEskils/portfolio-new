'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['TypeScript', 'JavaScript', 'Haskell', 'Elixir', 'Python', 'Scala', 'Go', 'Rust']
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Phoenix Framework', 'REST APIs', 'GraphQL', 'Microservices', 'Serverless', 'WebSockets']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'Query Optimization', 'Data Modeling', 'SQL', 'NoSQL']
    },
    {
      title: 'Frontend Technologies',
      skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'AWS', 'Git', 'Linux', 'CI/CD', 'Testing', 'Monitoring', 'Kubernetes']
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Monitoring', 'Logging', 'Security', 'Performance']
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
