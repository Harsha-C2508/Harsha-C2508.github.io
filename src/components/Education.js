import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Bachelor of Arts (English Major)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    location: 'Distance Learning',
    duration: '2024 – Present | Expected 2027',
    status: 'In Progress — 3rd Year',
    description: `Pursuing a Bachelor's degree in English at IGNOU while working full-time as a Frontend Engineer at Opsera.`,
    courses: [],
  },
  {
    degree: 'Full Stack Web Development Program',
    institution: 'Masai School',
    location: 'Bangalore, India',
    duration: '2021 - 2022',
    status: 'Completed',
    description: `Intensive full-stack development program with hands-on projects covering modern web technologies, data structures, algorithms, and industry-standard development practices.`,
    courses: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Data Structures', 'Algorithms'],
  },
];

const certifications = [];

const Education = () => {
  return (
    <div className="py-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wide uppercase text-sm">My Academic Background</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A combination of formal education and intensive hands-on training
          that built my foundation in full stack web development.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow-sm z-10 flex items-center justify-center">
                <FaGraduationCap className="w-2 h-2 text-white hidden md:block" />
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-medium">
                    {edu.duration}
                  </span>
                  {edu.status && (
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      edu.status.includes('In Progress')
                        ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
                        : 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {edu.status}
                    </span>
                  )}
                  <span className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{edu.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-lg text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications — only render if there are any */}
      {certifications.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-5 rounded-2xl flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center shrink-0">
                  <FaCertificate className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{cert.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.issuer}</p>
                  <p className="text-blue-600 dark:text-blue-400 text-xs font-medium mt-1">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Education;
