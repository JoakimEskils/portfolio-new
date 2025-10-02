'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
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

  const education = {
    school: 'Uppsala University',
    degree: 'B.Sc. in Computer Science & Engineering',
    duration: '2017 - 2020',
    location: 'Uppsala, Sweden',
    courses: [
      'Algorithms and Data Structures II',
      'High Performance Programming',
      'Artificial Intelligence',
      'Imperative and Object-Oriented Programming Methodology',
      'Low-Level Parallel Programming'
    ],
    activities: [
      'Teaching assistant in Program Design and Data Structures 1DL201 (Haskell)',
      'Teaching assistant in Computer Programming I UU-12031 (Python)',
      'Vice President and Treasurer, Kodstugan',
      'FUM Representative, Uppsala Technology Union',
      'Member of the Scholarship Committee, Värmland Nation'
    ],
    accomplishments: [
      {
        title: 'Artificial Intelligence Competition',
        date: 'Oct 2019 - Dec 2019',
        description: 'Certificate for completing all demanding projects covering Hidden Markov Models, Reinforcement Learning, Neural Networks, and Deep Learning'
      },
      {
        title: 'Certified Network Security Specialist (CNSS)',
        date: 'Oct 2020 - Dec 2020',
        issuer: 'ICSI',
        description: 'Certification covering network security, operating system hardening, firewalls, intrusion-detection systems, VPNs and Encryption'
      }
    ]
  };

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
              Education
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Academic background and achievements
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="h-6 w-6 text-accent mr-2" />
                    <h3 className="text-2xl font-semibold text-primary">
                      {education.school}
                    </h3>
                  </div>
                  <div className="flex items-center text-muted mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{education.duration}</span>
                  </div>
                  <div className="flex items-center text-muted">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{education.location}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h4 className="text-xl font-medium text-primary mb-4">
                    {education.degree}
                  </h4>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-primary mb-3">Key Courses</h5>
                    <div className="flex flex-wrap gap-2">
                      {education.courses.map((course, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-sm font-medium text-secondary bg-slate-700 rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-primary mb-3">Extracurricular Activities</h5>
                    <ul className="space-y-2">
                      {education.activities.map((activity, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-secondary text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-slate-700 pt-6">
                <h5 className="text-lg font-semibold text-primary mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-accent" />
                  Accomplishments & Certifications
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {education.accomplishments.map((accomplishment, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-slate-600 bg-slate-750 hover:bg-slate-700 transition-colors"
                    >
                      <h6 className="font-semibold text-primary mb-1">
                        {accomplishment.title}
                      </h6>
                      <p className="text-xs text-muted mb-2">
                        {accomplishment.date}
                        {accomplishment.issuer && ` • ${accomplishment.issuer}`}
                      </p>
                      <p className="text-sm text-secondary leading-relaxed">
                        {accomplishment.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
