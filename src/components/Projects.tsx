'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

export default function Projects() {
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

  const projects = [
    {
      title: "Haskell Animation System",
      description: "A continuous animation rendering system built in Haskell, showcasing functional programming concepts and animation techniques. Features real-time rendering and smooth transitions.",
      image: "/api/placeholder/600/400",
      period: "Dec 2020",
      type: "Hobby Project",
      technologies: ["Haskell", "Animation", "Functional Programming", "Graphics"],
      github: "https://github.com/joakimeskils/haskell-animation",
      demo: "#",
      featured: true
    },
    {
      title: "Elixir Phoenix Chat Application",
      description: "A distributed chat application built with Elixir Phoenix framework. Demonstrates real-time communication, WebSocket connections, and distributed system concepts.",
      image: "/api/placeholder/600/400",
      period: "Nov 2020",
      type: "Hobby Project",
      technologies: ["Elixir", "Phoenix", "WebSocket", "Real-time", "Distributed Systems"],
      github: "https://github.com/joakimeskils/phoenix-chat",
      demo: "#",
      featured: true
    },
    {
      title: "Blackjack Simulation in Haskell",
      description: "An interactive blackjack game written in Haskell using stack. Demonstrates functional programming principles in game development with clean architecture.",
      image: "/api/placeholder/600/400",
      period: "Oct 2020 - Nov 2020",
      type: "Hobby Project",
      technologies: ["Haskell", "Game Development", "Stack", "Functional Programming"],
      github: "https://github.com/joakimeskils/haskell-blackjack",
      demo: "#",
      featured: false
    },
    {
      title: "Deep Learning Image Segmentation",
      description: "Research project developing a deep learning neural network architecture (Deeplab) for segmenting zebrafish eyes. Achieved 95.88% accuracy with data augmentation.",
      image: "/api/placeholder/600/400",
      period: "2020",
      type: "Research Publication",
      technologies: ["Deep Learning", "Computer Vision", "Image Segmentation", "Deeplab", "Python"],
      github: "https://github.com/joakimeskils/deep-learning-segmentation",
      demo: "#",
      featured: true
    },
    {
      title: "Node.js REST API",
      description: "High-performance REST API built with Node.js and Express. Features authentication, rate limiting, and comprehensive error handling.",
      image: "/api/placeholder/600/400",
      period: "2021",
      type: "Professional Project",
      technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "JWT"],
      github: "https://github.com/joakimeskils/node-api",
      demo: "#",
      featured: false
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices architecture implementation with Docker, Kubernetes, and service mesh. Includes monitoring, logging, and CI/CD pipelines.",
      image: "/api/placeholder/600/400",
      period: "2022",
      type: "Professional Project",
      technologies: ["Docker", "Kubernetes", "Microservices", "CI/CD", "Monitoring"],
      github: "https://github.com/joakimeskils/microservices",
      demo: "#",
      featured: true
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
              A showcase of my recent work, including personal projects, research, and professional contributions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-md group cursor-pointer overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                    <div className="text-blue-600 dark:text-blue-400 text-4xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      <span>{project.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/joakimeskils"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500"
            >
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
