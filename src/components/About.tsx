'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

export default function About() {
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

  const expertise = [
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Backend Development',
      description: 'Building scalable server-side applications with Node.js, Express, and Phoenix Framework'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Database Management',
      description: 'Designing and optimizing PostgreSQL and MongoDB databases for high-performance applications'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Functional Programming',
      description: 'Expertise in Haskell and Elixir for building robust, maintainable software systems'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'System Architecture',
      description: 'Designing distributed systems and microservices architectures for enterprise applications'
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Software Engineer at Bricco AB specializing in server-side development, database management, 
              functional programming, and distributed systems architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="p-6 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-blue-600 text-primary mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
