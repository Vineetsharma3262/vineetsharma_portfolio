'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ExternalLink, Github, Code } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
      id="projects"
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
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my recent work and projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-dark-700 rounded-lg overflow-hidden border border-dark-600 hover:border-primary-500/50 transition-all duration-300 group"
              whileHover={{ y: -10 }}
              onHoverStart={() => setSelectedProject(project.id)}
              onHoverEnd={() => setSelectedProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-primary-400/50" />
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-900/80 rounded-full hover:bg-primary-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} className="text-white" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-900/80 rounded-full hover:bg-primary-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-dark-600 text-gray-400 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <motion.button
                  className="text-primary-400 hover:text-primary-300 font-semibold text-sm flex items-center gap-1"
                  whileHover={{ x: 5 }}
                >
                  Learn More <ExternalLink size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              More <span className="text-primary-400">Projects</span>
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-dark-700 p-6 rounded-lg border border-dark-600 hover:border-primary-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
