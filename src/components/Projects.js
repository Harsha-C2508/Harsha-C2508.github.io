import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Halo Chat',
    description: 'A full-stack real-time chat application built with the MERN stack and Socket.IO. Features one-on-one & group chats, file sharing, typing indicators, online status, message receipts, Google OAuth, and chat wallpapers.',
    image: '/chitchat.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Chakra UI'],
    category: 'fullstack',
    github: 'https://github.com/Harsha-C2508/chat-App',
    live: 'https://chat-app-5ww6.onrender.com/',
  },
  {
    title: "HS Collection",
    description: 'A full-stack e-commerce application with product catalog, user authentication, cart & wishlist management, coupon support, order tracking, and real payments via Razorpay.',
    image: '/hsshop.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Chakra UI', 'Razorpay'],
    category: 'fullstack',
    github: 'https://github.com/Harsha-C2508/HS-shop',
    live: 'https://hs-shop-finl.onrender.com/',
  },
  {
    title: 'Book Stash',
    description: 'A full-stack personal book collection tracker with AI-generated summaries via GPT-4o, note translation, cover image uploads to Google Cloud Storage, star ratings, wishlist management, and monthly reading reminders.',
    image: '/bookstash.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Mantine', 'OpenAI'],
    category: 'fullstack',
    github: 'https://github.com/Harsha-C2508/Book-Stash',
    live: 'https://book-stash.onrender.com/',
  },
  {
    title: 'TimeGrid',
    description: 'Modernization of an open-source appointment booking platform (dormant 4+ years). Businesses publish available time slots, customers browse and book. Features role-based dashboards, a 4-step booking wizard, and Docker deployment.',
    image: '/timegrid.png',
    technologies: ['Laravel 11', 'React 19', 'TypeScript', 'Tailwind CSS', 'Inertia.js', 'PostgreSQL', 'Docker', "Claude", "AI", "Team Collaboration"],
    category: 'fullstack',
    github: 'https://github.com/Harsha-C2508/Timegrid/tree/only-claude',
    live: 'https://timegrid-xue6.onrender.com/',
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Fallback letter when image fails */}
        <div className="absolute inset-0 flex items-center justify-center -z-0">
          <span className="text-4xl font-bold text-blue-200 dark:text-gray-600">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Overlay with links */}
        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="View source code"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          {project.live && project.live !== '#' && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="View live demo"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wide uppercase text-sm">My Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Here are some of my projects. Each one showcases different skills, technologies, and collaborative teamwork.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12"
      >
        <motion.a
          href="https://github.com/Harsha-C2508"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaGithub className="w-5 h-5" />
          See More on GitHub
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;
