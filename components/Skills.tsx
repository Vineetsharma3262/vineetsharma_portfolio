'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { useState } from 'react';

const categories = ['all', 'frontend', 'backend', 'tools'] as const;
type Category = typeof categories[number];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-dark-900"
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
            My <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                <span className="text-primary-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-dark-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500/10 to-primary-600/10 p-8 rounded-lg border border-primary-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">5.6+</div>
              <div>Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">10+</div>
              <div>Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">40+</div>
              <div>Technologies Mastered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
