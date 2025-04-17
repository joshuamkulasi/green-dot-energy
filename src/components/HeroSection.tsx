'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-green-100 rounded-full blur-2xl opacity-50"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-40"
        />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] bg-cover bg-center mix-blend-overlay opacity-5" />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center z-10">
        {/* Headline with Gradient Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-600"
        >
          Powering PNG's Future
        </motion.h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          <span className="block">Leading electrical contractors</span>
          <span className="block">and renewable energy solutions</span>
          <span className="block">provider in Papua New Guinea</span>
        </motion.p>

        {/* CTA Buttons with Better Styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="/services"
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Services
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-green-100 transition duration-300 transform hover:scale-105 shadow hover:shadow-green-500/10"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-green-100 rounded-full blur-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-green-50 rounded-full blur-xl"
        />
      </div>
    </section>
  );
}
