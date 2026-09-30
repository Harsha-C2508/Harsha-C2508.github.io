import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Harsha-C2508', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/harsha-c-053b31233/', label: 'LinkedIn' },
    { icon: FaMedium, href: 'https://medium.com/@harshac2508', label: 'Medium' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Harsha C</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating beautiful and performant web applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="mailto:harshac2508@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  harshac2508@gmail.com
                </a>
              </li>
              <li>Malappuram, Kerala</li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Available for work
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Harsha C. Built with React & Tailwind CSS.
          </p>
          <a
            href="#home"
            className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
            aria-label="Back to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
