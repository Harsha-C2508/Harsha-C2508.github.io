import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experienceData = [
  {
    position: 'Software Engineer 1',
    company: 'Opsera.io',
    location: 'Chennai, India',
    duration: 'September 2024 - Present',
    description: 'Working as a full-time software engineer, focusing on frontend development and contributing to enterprise-level applications in the Salesforce team.',
    responsibilities: [
      'Leading the development of new features and improvements in the Salesforce platform',
      'Mentoring junior developers and conducting code reviews',
      'Collaborating with cross-functional teams to deliver high-quality solutions',
      'Implementing best practices for code quality and performance optimization',
      'Contributing to architectural decisions and technical documentation',
      'Driving the adoption of new technologies and development practices',
    ],
    technologies: ['React', 'Salesforce', 'JavaScript', 'HTML/CSS', 'Git', 'CI/CD', 'Jira', 'Confluence', 'Figma', 'Nodejs', 'Expressjs', 'MongoDB']
  },
  {
    position: 'Software Engineer Intern',
    company: 'Opsera.io',
    location: 'Chennai, India',
    duration: 'June 2023 - August 2024',
    description: 'Worked as a frontend developer in the Salesforce team, contributing to the development of enterprise-level applications and learning industry best practices.',
    responsibilities: [
      'Developed and maintained frontend components using React and Salesforce technologies',
      'Collaborated with the team to implement new features and improve existing functionality',
      'Worked on responsive design and user interface improvements',
      'Participated in code reviews and agile development processes',
      'Integrated with Salesforce APIs and services',
      'Contributed to the development of CI/CD pipelines',
    ],
    technologies: ['React', 'Salesforce', 'JavaScript', 'HTML/CSS', 'Git', 'Jira', 'CI/CD', 'Confluence', 'Figma', 'Nodejs', 'Expressjs', 'MongoDB']
  },
];

const Experience = () => {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="heading-primary">Work Experience</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          My professional journey has been marked by continuous learning and growth,
          working on challenging projects and embracing new technologies.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800" />

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10">
                <FaBriefcase className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} md:text-right`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{exp.position}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-500 mb-2">{exp.location}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{exp.duration}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8"
      >
        <h3 className="heading-secondary text-center mb-8">Professional Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Projects Contributed',
              value: '15+',
              description: 'Successfully delivered enterprise-level applications',
            },
            {
              title: 'Technologies Mastered',
              value: '8+',
              description: 'Expertise in modern web and Salesforce technologies',
            },
            {
              title: 'Career Growth',
              value: '2x',
              description: 'Promoted from Intern to Software Engineer 1',
            },
          ].map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h4 className="text-4xl font-bold text-blue-600 mb-2">{highlight.value}</h4>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {highlight.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience; 