import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="about"
          className="section-padding bg-white dark:bg-gray-800"
        >
          <div className="container-custom">
            <About />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="education"
          className="section-padding bg-gray-50 dark:bg-gray-900"
        >
          <div className="container-custom">
            <Education />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="experience"
          className="section-padding bg-white dark:bg-gray-800"
        >
          <div className="container-custom">
            <Experience />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="projects"
          className="section-padding bg-gray-50 dark:bg-gray-900"
        >
          <div className="container-custom">
            <Projects />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="contact"
          className="section-padding bg-white dark:bg-gray-800"
        >
          <div className="container-custom">
            <Contact />
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
