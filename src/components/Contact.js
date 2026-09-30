import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaMedium, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'service_ym8se2o',
        'template_4zpc0zb',
        {
          to_name: data.name,
          to_email: data.email,
          reply_to: data.email,
          message: data.message,
        },
        'DxusHj8qmXQdKFZh6'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or reach out directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, title: 'Email', content: 'harshac2508@gmail.com', link: 'mailto:harshac2508@gmail.com' },
    { icon: FaPhone, title: 'Phone', content: '+91 8943995700', link: 'tel:+918943995700' },
    { icon: FaMapMarkerAlt, title: 'Location', content: 'Chennai, Tamil Nadu', link: 'https://maps.google.com/?q=Chennai,Tamil Nadu' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, title: 'LinkedIn', link: 'https://www.linkedin.com/in/harsha-c-053b31233/' },
    { icon: FaGithub, title: 'GitHub', link: 'https://github.com/Harsha-C2508' },
    { icon: FaMedium, title: 'Medium', link: 'https://medium.com/@harshac2508' },
  ];

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
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wide uppercase text-sm">Let's Connect</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Have a project in mind or want to discuss opportunities?
          Feel free to reach out — I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors ${
                    errors.name ? 'border-red-300 dark:border-red-700' : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' },
                  })}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors ${
                    errors.email ? 'border-red-300 dark:border-red-700' : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about your project..."
                {...register('message', { required: 'Message is required' })}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none ${
                  errors.message ? 'border-red-300 dark:border-red-700' : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-xl text-sm ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="w-4 h-4" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-4"
        >
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl hover:border-blue-200 dark:hover:border-blue-800 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{info.title}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{info.content}</p>
              </div>
            </a>
          ))}

          {/* Socials */}
          <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-5">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">Connect with me</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.title}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
