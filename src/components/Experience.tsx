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
        'Using MongoDB (NoSQL Database), CircleCI (CI/CD), Material UI, Google Cloud Platform, Github Actions, Jira, Bitbucket, and Vercel.'
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
        'Working with Terraform, Ansible, Docker, Http4s, AWS (RDS, Route53, EC2, S3), Jenkins, Kafka, Event-sourcing, TypeScript/React.js, PostgreSQL, and Nix.'
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
        'Working with MongoDB, CircleCI, Material UI, Google Cloud Platform, Github Actions, Jira, Bitbucket, and Vercel.'
      ]
    },
    {
      company: 'Bazaro',
      position: 'Machine Learning Engineer',
      duration: 'Apr 2020 - Aug 2021',
      location: 'Stockholm, Sweden',
      description: 'Developed and implemented machine learning solutions for predictive analytics and forecasting.',
      achievements: [
        'Developed and implemented a machine learning solution in Python and Java to generate forecasts',
        'Leveraged data analysis and predictive modelling techniques for business intelligence',
        'Used Azure for hosting and deploying machine learning models and data pipelines.'
      ]
    },
    {
      company: 'Saab',
      position: 'Software Engineer Intern',
      duration: 'Jun 2019 - Aug 2019',
      location: 'Järfälla, Sweden',
      description: 'Serving the global market with world-leading products, services and solutions from military defence to civil security.',
      achievements: [
        'Developed support systems for electronic warfare and airborne platforms using Java.'
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

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.position}`}
                variants={itemVariants}
                className="group relative"
              >
                <div className="p-6 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-slate-600">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="mb-4 sm:mb-0">
                      <div className="flex items-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-600 text-white mr-3">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-primary">
                            {exp.company}
                          </h3>
                          <h4 className="text-lg font-medium text-accent">
                            {exp.position}
                          </h4>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:items-end space-y-1">
                      <div className="flex items-center text-muted">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-muted">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary mb-6 leading-relaxed text-base">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div>
                    <h5 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                      Responsibilities & Impact
                    </h5>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-400 transition-colors duration-300"></div>
                      <p className="text-secondary text-sm leading-relaxed">
                        {exp.achievements.join('. ')}
                      </p>
                    </div>
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
