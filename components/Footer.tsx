'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              © {currentYear} Portfolio. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart className="w-4 h-4 text-primary-500 fill-primary-500" />
              </motion.span>{' '}
              using Next.js & Tailwind CSS
            </p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>Vineet Sharma | Senior Frontend Developer | 5.6+ Years of Experience</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
