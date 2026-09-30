import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experienceData = [
  {
    position: 'Software Engineer I',
    company: 'Opsera.IO',
    location: 'Chennai, India',
    duration: 'September 2024 – Present',
    description: 'Developing and enhancing frontend features for enterprise SaaS applications used by engineering teams.',
    responsibilities: [
      'Collaborated with product managers, designers, QA, and backend engineers to deliver production-ready solutions',
      'Investigated and resolved issues across QA, UAT, and Production environments',
      'Built reusable React components and improved overall user experience',
      'Integrated frontend applications with REST APIs and backend services',
      'Participated in code reviews and contributed to maintainable, scalable codebases',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'REST APIs', 'Git', 'Playwright', 'Jira']
  },
  {
    position: 'Software Engineer Intern',
    company: 'Opsera.IO',
    location: 'Chennai, India',
    duration: 'June 2023 – August 2024',
    description: 'Developed frontend features using React and JavaScript for Salesforce-related applications.',
    responsibilities: [
      'Implemented responsive UI components and improved application usability',
      'Worked closely with senior engineers to debug and resolve issues',
      'Integrated APIs and contributed to feature development across multiple releases',
      'Gained hands-on experience with enterprise software development practices and CI/CD workflows',
    ],
    technologies: ['React', 'JavaScript', 'Salesforce', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'CI/CD']
  },
];

const Experience = () => {
  return (
    <div className="py-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wide uppercase text-sm">My Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          My professional journey has been marked by continuous learning and growth,
          working on challenging projects and embracing new technologies.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.position}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-16 md:pl-20"
            >
              <div className="absolute left-4 md:left-6 top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow-sm z-10 flex items-center justify-center">
                <FaBriefcase className="w-2 h-2 text-white hidden md:block" />
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-medium">
                    {exp.duration}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{exp.position}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
