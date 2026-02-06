'use client';

import { motion } from 'framer-motion';
import { Code, Users, Rocket, Award } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function About() {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Users, label: 'Enterprise Clients', value: '5+' },
    { icon: Rocket, label: 'Years Experience', value: '5.6+' },
    { icon: Award, label: 'Technologies', value: '40+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Senior Frontend Developer with 5.6+ years of experience building responsive, high-performance web applications using React, Next.js, and TypeScript. Proven expertise in UI optimization, modular frontend architecture, and modern ecosystems including Redux Toolkit, Tailwind CSS, and Material UI.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-700 p-6 rounded-lg text-center border border-dark-600 hover:border-primary-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8"
          >
            Professional <span className="text-primary-400">Experience</span>
          </motion.h3>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 pb-8 border-l-2 border-primary-500/30"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
              <div className="bg-dark-700 p-6 rounded-lg border border-dark-600 hover:border-primary-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.position}</h4>
                    <p className="text-primary-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-primary-400 mr-2">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
