'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Cpu, GitBranch } from 'lucide-react';

export default function About() {
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

  const skills = [
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, TypeScript, and functional programming languages like Haskell and Elixir.'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and optimizing database schemas, working with PostgreSQL, MongoDB, and implementing efficient data access patterns.'
    },
    {
      icon: Cpu,
      title: 'System Architecture',
      description: 'Designing distributed systems, microservices architecture, and scalable solutions for high-performance applications.'
    },
    {
      icon: GitBranch,
      title: 'Functional Programming',
      description: 'Applying functional programming principles, working with immutable data structures and pure functions for reliable code.'
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
              About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate software engineer with a focus on backend development, 
              database management, and distributed systems. I love solving complex problems 
              and building scalable solutions.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently working as a Software Engineer at Bricco AB, where I focus on 
                building robust backend systems and optimizing database performance. 
                I have a strong foundation in functional programming and enjoy exploring 
                new technologies and architectural patterns.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                What I Do
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I specialize in server-side development, working with modern technologies 
                to build scalable applications. My expertise includes database design, 
                API development, and implementing distributed systems that can handle 
                high loads efficiently.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-md text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <skill.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
