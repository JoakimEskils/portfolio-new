'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30, 41, 59, 0.2)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold transition-colors duration-300"
              style={{ color: '#f1f5f9' }}
            >
              Joakim Eskils
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{ color: '#cbd5e1' }}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4 pl-4" style={{ borderLeft: '1px solid #475569' }}>
              <a
                href="https://github.com/joakimeskils"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md transition-all duration-300 hover:scale-105"
                style={{ color: '#cbd5e1' }}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joakimeskils/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md transition-all duration-300 hover:scale-105"
                style={{ color: '#cbd5e1' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md transition-colors duration-300"
              style={{ color: '#cbd5e1' }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1" style={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid rgba(30, 41, 59, 0.2)'
              }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    style={{ color: '#cbd5e1' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4" style={{ borderTop: '1px solid rgba(30, 41, 59, 0.2)' }}>
                  <a
                    href="https://github.com/joakimeskils"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors"
                    style={{ color: '#cbd5e1' }}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/joakimeskils/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors"
                    style={{ color: '#cbd5e1' }}
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
