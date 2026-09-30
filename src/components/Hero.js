import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaMedium, FaArrowDown, FaFileDownload,
  FaMapMarkerAlt, FaBriefcase, FaGlobeAmericas, FaPassport,
} from 'react-icons/fa';

const roles = ['Frontend Engineer', 'React Specialist', 'UI Architect', 'Full Stack Developer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Harsha-C2508', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/harsha-c-053b31233/', label: 'LinkedIn' },
    { icon: FaMedium, href: 'https://medium.com/@harshac2508', label: 'Medium' },
  ];

  const achievements = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Features Delivered' },
    { number: '100K+', label: 'Users Impacted' },
  ];

  const techStack = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'MongoDB', 'Next.js', 'Playwright', 'Git', 'Tailwind CSS',
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-12"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl" />

      {/* Photo - left side, full height */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-[35%] items-end justify-center">
        <motion.img
          src="/avatar.png"
          alt=""
          className="w-full max-h-full object-contain object-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:ml-auto"
        >
            {/* Role badge */}
            <motion.div variants={item} className="mb-4">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-600/20">
                <FaBriefcase className="w-4 h-4" />
                Frontend Engineer @ Opsera.IO
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight"
            >
              Harsha C
            </motion.h1>

            {/* Typing role */}
            <motion.div variants={item} className="h-9 md:h-11 flex items-center mb-5">
              <span className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium">
                {displayText}
              </span>
              <motion.span
                className="inline-block w-0.5 h-6 md:h-8 bg-blue-600 dark:bg-blue-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              />
            </motion.div>

            {/* Description — larger, higher contrast */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-xl"
            >
              Frontend Engineer with 3+ years of experience building SaaS products and developer
              productivity tools used by enterprise engineering teams.
            </motion.p>

            {/* Achievement Stats */}
            <motion.div variants={item} className="flex items-center gap-6 sm:gap-8 mb-6">
              {achievements.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-10 bg-gray-200 dark:bg-gray-700 -ml-3 sm:-ml-4" />}
                  <div className={i > 0 ? 'ml-3 sm:ml-4' : ''}>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 leading-none">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Location & Relocation Info */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-2.5 mb-7">
              {[
                { icon: FaMapMarkerAlt, text: 'Chennai, India' },
                { icon: FaGlobeAmericas, text: 'Open to Relocation' },
                { icon: FaPassport, text: 'Open to Visa Sponsorship' },
              ].map((tag) => (
                <span
                  key={tag.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                >
                  <tag.icon className="w-3 h-3 shrink-0" />
                  {tag.text}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-6">
              <motion.a
                href="/Harsha_C_Resume.pdf"
                download
                className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-lg shadow-blue-600/25 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaFileDownload className="w-4 h-4" />
                Download Resume
              </motion.a>
              <motion.a
                href="https://github.com/Harsha-C2508"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaGithub className="w-4 h-4" />
                View GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/harsha-c-053b31233/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
            </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a href="#about" aria-label="Scroll down" className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <FaArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
