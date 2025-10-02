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
    <section ref={ref} className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and technical projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="rounded-xl border border-slate-700 bg-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <span className="text-muted font-medium">Project Image</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium text-secondary bg-slate-700 rounded-full"
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
                      className="flex items-center text-muted hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted hover:text-primary transition-colors"
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
