import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Harsha-C2508',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/harsha-c-053b31233/',
      label: 'LinkedIn',
    },
    {
      icon: FaMedium,
      href: 'https://medium.com/@harshac2508',
      label: 'Medium',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Me</h3>
            <p className="text-gray-400 mb-4">
              A passionate Full Stack Developer focused on creating beautiful and functional web applications.
              Always eager to learn and explore new technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-medium text-white">Email:</span>{' '}
                <a href="mailto:harshac2508@gmail.com" className="hover:text-blue-400 transition-colors">
                  harshac2508@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Location:</span>{' '}
                Malappuram, Kerala
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Availability:</span>{' '}
                Available for work
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Harsha C. All rights reserved. Made with{' '}
            <FaHeart className="inline-block text-red-500 mx-1" /> using React and Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed and built with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 