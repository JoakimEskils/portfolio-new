'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Contact() {
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


  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      href: 'https://github.com/joakimeskils',
      description: 'Check out my code repositories and open source contributions'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joakimeskils/',
      description: 'Connect with me professionally and view my work experience'
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
              Get In Touch
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can work together to build something amazing
            </p>
          </motion.div>

          {/* Social Links - Centered */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="max-w-md w-full">
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg bg-slate-700 border border-slate-600 hover:shadow-lg hover:border-accent transition-all duration-200 hover:scale-105 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-slate-600 text-secondary group-hover:bg-blue-600 group-hover:text-primary transition-colors">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">
                          {social.label}
                        </h4>
                        <p className="text-sm text-muted mt-1">
                          {social.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
