import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa';

const skills = [
  {
    category: 'Frontend',
    icon: FaCode,
    items: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'React',
      'React Router',
      'Redux',
      'Styled Components',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Material-UI (MUI)',
      'Bootstrap',
      'Chakra UI',
      'Mantine UI',
      'FontAwesome',
      'Iconify'
    ],
  },
  {
    category: 'Backend',
    icon: FaServer,
    items: [
      'Node.js',
      'Express.js',
      'Python',
      'Django',
      'REST APIs',
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'GraphQL',
      'Prisma'
    ],
  },
  {
    category: 'Tools & Others',
    icon: FaTools,
    items: [
      'Git',
      'Docker',
      'AWS',
      'CI/CD',
      'Agile',
      'Jira',
      'Confluence',
      'Figma',
      'Postman',
      'Cypress',
      'Heroku',
      'Netlify',
      'Vercel'
    ],
  },
  {
    category: 'Database',
    icon: FaDatabase,
    items: [
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'GraphQL',
      'Prisma'
    ],
  },
];

const About = () => {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="heading-primary">About Me</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          I'm a passionate Software Engineer with a strong focus on frontend development and Salesforce technologies. 
          Currently working at Opsera.io, I've transitioned from an intern to a full-time role, gaining hands-on experience 
          in building enterprise-level applications. My expertise spans across modern frontend frameworks, UI libraries, 
          and Salesforce development. I'm dedicated to creating efficient, scalable, and user-friendly solutions while 
          continuously expanding my skill set in both frontend and backend technologies. My journey reflects my commitment 
          to growth and excellence in software development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Personal Info</h3>
          <div className="space-y-3">
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="font-medium w-32">Name:</span>
              Harsha C
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="font-medium w-32">Email:</span>
              harshac2508@gmail.com
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="font-medium w-32">Location:</span>
              Malappuram, Kerala
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="font-medium w-32">Availability:</span>
              Available for work
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-600">What I Do</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Develop responsive and interactive web applications
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Create RESTful APIs and backend services
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Implement modern UI/UX designs
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Optimize application performance
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Write clean, maintainable code
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="heading-secondary text-center mb-8">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <skillGroup.icon className="w-6 h-6 text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About; 