'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm md:text-base font-medium backdrop-blur-sm">
            Senior Front-end Developer | React | Next.js | TypeScript
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="block text-white mb-2">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
            Vineet Sharma
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Crafting exceptional digital experiences with{' '}
          <span className="text-primary-400 font-semibold">5.6+ years</span> of expertise
          <br className="hidden sm:block" />
          in React, Next.js, TypeScript, and modern web technologies
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-primary-500/50"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="group px-8 py-4 bg-dark-700 hover:bg-dark-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 border border-dark-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Bottom Center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-primary-500/30 rounded-lg"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          rotate: 45,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 border border-primary-500/30 rounded-full"
        animate={{
          x: -mousePosition.x * 0.5,
          y: -mousePosition.y * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      />
    </section>
  );
}
