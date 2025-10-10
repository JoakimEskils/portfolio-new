'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
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
        duration: 0.6
      }
    }
  };

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: 'https://github.com/joakimeskils',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: 'https://www.linkedin.com/in/joakimeskils/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      href: 'mailto:joakim@joakimeskils.com',
      label: 'Email'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
            <img 
              src="/profile.jpg" 
              alt="Joakim Eskils" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#f1f5f9' }}>
            Joakim Eskils
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 font-light" style={{ color: '#cbd5e1' }}>
            Software Engineer at Bricco AB
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#94a3b8' }}>
            Experienced software engineer with 5+ years of professional expertise specializing in server-side development 
            and database management. Passionate about functional programming, distributed systems, and software architecture.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-16">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full transition-all duration-300 hover:scale-110"
              style={{ 
                background: 'rgba(2, 6, 23, 0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(30, 41, 59, 0.2)'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              <div className="transition-colors" style={{ color: '#cbd5e1' }}>
                {link.icon}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => {
              const nextSection = document.querySelector('#about-section');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer"
            style={{ color: '#94a3b8' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
