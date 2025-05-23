import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Master of Computer Science',
    institution: 'University Name',
    location: 'City, Country',
    duration: '2020 - 2022',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.',
    courses: ['Advanced Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'University Name',
    location: 'City, Country',
    duration: '2016 - 2020',
    description: 'Focused on Software Engineering and Web Development. Active member of the Computer Science Club.',
    courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Software Engineering'],
  },
];

const Education = () => {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="heading-primary">Education</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          My academic journey has equipped me with a strong foundation in computer science
          and practical skills in software development.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800" />

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
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
                <FaGraduationCap className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} md:text-right`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-500 mb-2">{edu.location}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{edu.duration}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-end">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16"
      >
        <h3 className="heading-secondary text-center mb-8">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'AWS Certified Developer',
              issuer: 'Amazon Web Services',
              date: '2023',
            },
            {
              name: 'Professional Scrum Master I',
              issuer: 'Scrum.org',
              date: '2022',
            },
            {
              name: 'Google Cloud Professional Developer',
              issuer: 'Google Cloud',
              date: '2022',
            },
          ].map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-lg font-semibold text-blue-600 mb-2">{cert.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education; 