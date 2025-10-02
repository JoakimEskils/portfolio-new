'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

export default function Experience() {
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

    const experiences = [
    {
      company: 'Bricco AB',
      position: 'Software Engineer',
      duration: 'Oct 2022 - Present',
      location: 'Stockholm, Sweden',
      description: 'Consultancy in software engineering and architecture.',
      achievements: [
        'Functioning as a software architect and engineering consultant towards several client projects',
        'Full-stack development, cloud infrastructure, database management, and software architecture design',
        'Working with Node.js, Express, React.js, TypeScript, and Apollo (GraphQL)',
        'Using MongoDB (NoSQL Database), CircleCI (CI/CD), Material UI, Google Cloud Platform, Github Actions, Jira, Bitbucket, and Vercel'
      ]
    },
    {
      company: 'Klarna',
      position: 'Software Engineer',
      duration: 'Nov 2021 - Oct 2022',
      location: 'Stockholm, Sweden',
      description: 'Swedish fintech company providing online financial services such as payments for online storefronts and direct payments.',
      achievements: [
        'Handling the issuing and lifecycle of credit and debit cards',
        'Developing microservices in Scala using functional programming paradigm (Typelevel-stack: cats and fs2)',
        'Building serverless AWS Lambdas in Haskell',
        'Working with Terraform, Ansible, Docker, Http4s, AWS (RDS, Route53, EC2, S3), Jenkins, Kafka, Event-sourcing, TypeScript/React.js, PostgreSQL, and Nix'
      ]
    },
    {
      company: 'Bricco AB',
      position: 'Software Developer',
      duration: 'Jun 2020 - Sep 2021',
      location: 'Stockholm, Sweden',
      description: 'Consultancy in software engineering and architecture.',
      achievements: [
        'Consultant in a team towards projects focused on full-stack development',
        'Cloud infrastructure, database management, and software architecture',
        'Using Node.js, Express, React.js, TypeScript, and Apollo (GraphQL)',
        'Working with MongoDB, CircleCI, Material UI, Google Cloud Platform, Github Actions, Jira, Bitbucket, and Vercel'
      ]
    },
    {
      company: 'Saab',
      position: 'Software Engineer Intern',
      duration: 'Jun 2019 - Aug 2019',
      location: 'Järfälla, Sweden',
      description: 'Serving the global market with world-leading products, services and solutions from military defence to civil security.',
      achievements: [
        'Developed support systems for electronic warfare and airborne platforms using Java'
      ]
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
              Work Experience
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              My professional journey and key achievements
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.position}`}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="flex items-center mb-2">
                      <Building className="h-5 w-5 text-accent mr-2" />
                      <h3 className="text-xl font-semibold text-primary">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center text-muted mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-muted">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-medium text-primary mb-2">
                      {exp.position}
                    </h4>
                    <p className="text-secondary mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-secondary text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index < experiences.length - 1 && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-700 md:left-1/3 md:ml-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
