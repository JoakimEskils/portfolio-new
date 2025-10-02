'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/joakimeskils/ecommerce',
      live: 'https://ecommerce-demo.com'
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time messaging application built with Elixir Phoenix and WebSockets. Supports multiple chat rooms, file sharing, and user presence indicators.',
      image: '/api/placeholder/400/250',
      technologies: ['Elixir', 'Phoenix', 'WebSockets', 'PostgreSQL', 'LiveView'],
      github: 'https://github.com/joakimeskils/chat-app',
      live: 'https://chat-demo.com'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for tracking business metrics. Built with React, D3.js, and a robust backend API.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/joakimeskils/analytics',
      live: 'https://analytics-demo.com'
    },
    {
      title: 'Microservices Architecture',
      description: 'A distributed system architecture using Docker containers, API gateways, and service discovery. Demonstrates scalable backend design patterns.',
      image: '/api/placeholder/400/250',
      technologies: ['Docker', 'Kubernetes', 'Node.js', 'Redis', 'Nginx'],
      github: 'https://github.com/joakimeskils/microservices',
      live: 'https://microservices-demo.com'
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
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and technical projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
