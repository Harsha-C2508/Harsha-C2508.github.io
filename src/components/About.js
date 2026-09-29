import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaDatabase, FaUsers, FaCheckCircle } from 'react-icons/fa';

const skills = [
  {
    category: 'Frontend',
    icon: FaCode,
    color: 'blue',
    items: [
      'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Redux',
      'Next.js', 'Tailwind CSS', 'Material-UI', 'Chakra UI',
      'Styled Components', 'Bootstrap', 'Mantine UI'
    ],
  },
  {
    category: 'Backend',
    icon: FaServer,
    color: 'emerald',
    items: [
      'Node.js', 'Express.js',
      'REST APIs', 'WebSockets'
    ],
  },
  {
    category: 'Database',
    icon: FaDatabase,
    color: 'violet',
    items: [
      'MongoDB', 'PostgreSQL', 'Redis'
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: FaTools,
    color: 'amber',
    items: [
      'Git', 'CI/CD', 'Jira', 'Playwright', 'Render',
      'Confluence', 'Figma', 'Postman', 'Vercel', 'Netlify', 'Heroku'
    ],
  },
  {
    category: 'Soft Skills',
    icon: FaUsers,
    color: 'rose',
    items: [
      'Time Management', 'Adaptability', 'Teamwork', 'Leadership', 'Communication'
    ],
  },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    icon: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-100 dark:border-blue-800',
    tag: 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    icon: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-100 dark:border-emerald-800',
    tag: 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-900/20',
    icon: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-100 dark:border-violet-800',
    tag: 'bg-violet-50 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    icon: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-100 dark:border-amber-800',
    tag: 'bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    icon: 'text-rose-600 dark:text-rose-400',
    border: 'border-rose-100 dark:border-rose-800',
    tag: 'bg-rose-50 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300',
  },
};

const About = () => {
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
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wide uppercase text-sm">Get to know me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
        <div className="max-w-3xl mx-auto space-y-4 text-left text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
          Frontend Engineer with 3+ years of experience building developer platforms and internal tooling at Opsera. I focus on React-based applications, improving developer workflows, resolving production issues, and delivering features used by enterprise engineering teams.
          </p>
        </div>
      </motion.div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Professional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 md:p-8 rounded-2xl"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Professional Info
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Location', value: 'Chennai, India' },
              { label: 'Experience', value: '3+ Years' },
              { label: 'Current Role', value: 'Frontend Engineer @ Opsera' },
              { label: 'Relocation', value: 'Open' },
              { label: 'Education', value: 'B.A. English (Expected 2027)' },
            ].map((info) => (
              <div key={info.label} className="flex items-baseline gap-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-24 shrink-0">{info.label}</span>
                <span className="text-gray-900 dark:text-gray-200 text-sm">{info.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 md:p-8 rounded-2xl"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            What I Do
          </h3>
          <ul className="space-y-3">
            {[
              'Build scalable frontend applications using React and TypeScript',
              'Develop reusable UI components and design-system patterns',
              'Collaborate with product, QA, and engineering teams',
              'Debug and resolve production issues across environments',
              'Contribute to enterprise SaaS platforms and developer tools',
              'Write maintainable, tested, and accessible code',
            ].map((task) => (
              <li key={task} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                {task}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 md:p-8 rounded-2xl"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Core Strengths
          </h3>
          <ul className="space-y-3">
            {[
              'React & TypeScript',
              'Enterprise SaaS Applications',
              'Frontend Architecture',
              'API Integration',
              'Production Debugging',
              'Cross-Team Collaboration',
            ].map((strength) => (
              <li key={strength} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <FaCheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                {strength}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">Skills & Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skillGroup, index) => {
            const colors = colorMap[skillGroup.color];
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${colors.bg} border ${colors.border} p-5 rounded-2xl`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <skillGroup.icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 ${colors.tag} rounded-lg text-xs font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
