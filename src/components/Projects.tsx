'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github } from 'lucide-react';

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
      title: 'PingPad',
      description: 'A SaaS platform for testing REST API endpoints and logging webhooks. Built with microservices architecture using Spring Boot, React, Go, and PostgreSQL for high-performance API health monitoring.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'Go', 'PostgreSQL', 'Docker', 'gRPC', 'Kafka'],
      github: 'https://github.com/JoakimEskils/ping-pad',
      icon: '🚀'
    },
    {
      title: 'Haskell Animation',
      description: 'Continuous Animation Rendering in Haskell. A hobby project exploring functional programming concepts in graphics rendering and animation systems.',
      technologies: ['Haskell', 'Graphics', 'Functional Programming'],
      github: 'https://github.com/JoakimEskils/haskell-animation',
      icon: '🎬'
    },
    {
      title: 'Blackjack Simulation in Haskell',
      description: 'Interactive blackjack game written in Haskell using stack. Demonstrates functional programming principles, game logic implementation, and pure functional design.',
      technologies: ['Haskell', 'Stack', 'Functional Programming'],
      github: 'https://github.com/JoakimEskils/blackjack',
      icon: '🃏'
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative p-6 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:border-slate-600 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Icon Header */}
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-secondary mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium text-accent bg-slate-700/50 rounded-md border border-slate-600 group-hover:border-slate-500 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted hover:text-accent transition-colors duration-300 group/link"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  
                  {/* Subtle arrow indicator */}
                  <div className="text-muted group-hover:text-accent transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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
