'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/joakimeskils',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/joakimeskils/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:joakim@example.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Joakim Eskils</h3>
            <p className="text-slate-400">
              Software Engineer passionate about building scalable solutions
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400 flex items-center justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Joakim Eskils
            </p>
            <p className="text-slate-500 text-sm mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
