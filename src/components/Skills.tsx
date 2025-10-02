'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
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

    const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['TypeScript', 'JavaScript', 'Scala', 'Haskell', 'Node.js', 'Java', 'Python']
    },
    {
      title: 'Frontend Development',
      skills: ['React.js', 'Material UI', 'Apollo (GraphQL)', 'REST APIs', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend & Server-Side',
      skills: ['Node.js', 'Express', 'GraphQL', 'Scala', 'Haskell', 'Typelevel Stack (cats, fs2)', 'Http4s', 'REST APIs']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Database Setup & Configuration', 'AWS RDS', 'MongoDB Atlas', 'Advanced Queries & Aggregates', 'SQL', 'NoSQL']
    },
    {
      title: 'Cloud Infrastructure',
      skills: ['AWS (RDS, Route53, EC2, S3)', 'Google Cloud Platform (GCP)', 'Docker', 'Terraform', 'Ansible', 'Vercel']
    },
    {
      title: 'DevOps & Tools',
      skills: ['CircleCI', 'Jenkins', 'Github Actions', 'Jira', 'Bitbucket', 'Kafka', 'Nix', 'Sbt', 'Git', 'CI/CD']
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      className="px-3 py-1.5 text-sm font-medium text-secondary bg-slate-700 rounded-full hover:bg-slate-600 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
